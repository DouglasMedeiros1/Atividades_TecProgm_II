import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";

export default class AlocarAcomodacao extends Processo {
    private clientes: Cliente[]
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.log('Iniciando a alocação de um cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser alocado? ')
        let armazem = Armazem.InstanciaUnica
        let cliente = armazem.Clientes.find(cliente => cliente.Nome === nome)
        
        if (cliente) {
            console.log('Cliente encontrado. Alocando acomodação...');
            console.log('----------------------');

            this.acomodacoes.forEach(acomodacao => {
                let index =+1
                console.log(`${index}}: Nomenclatura: ${acomodacao.NomeAcomadacao.toString()}`)
            }); 

            let acomodacaoIndex = this.entrada.receberNumero('Selecione o número da acomodação a ser alocada: ') - 1;

            if (acomodacaoIndex >= 0 && acomodacaoIndex < this.acomodacoes.length) {
                let acomodacaoSelecionada = this.acomodacoes[acomodacaoIndex];
                cliente.Acomodacao = acomodacaoSelecionada
                console.log(`Acomodação "${acomodacaoSelecionada.NomeAcomadacao}" alocada ao cliente "${cliente.Nome}".`);
            } else {
                console.log('Número de acomodação inválido.');
            }

        } else {
            console.log('Cliente não encontrado.')
        }
        
        console.log('Finalizando a alocação do cliente...')

    }
}