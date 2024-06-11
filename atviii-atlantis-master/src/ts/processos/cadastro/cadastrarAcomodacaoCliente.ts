import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Acomodacao from "../../modelos/acomodacao";
import Cliente from "../../modelos/cliente";

export default class CadastrarAcomodacaoCliente extends Processo {

    private hospede: number
    private cliente: Cliente
    private clientes: Cliente[]
    private acomodacoes: Acomodacao[]
    constructor(cliente: Cliente, hospede: number) {
        super()
        this.hospede = hospede
        this.cliente = cliente
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {

        let index = 0 
        let hospedado: boolean
        if (this.hospede === 1) {
            hospedado = true
            
            console.log(`----------------------`);
            
            this.acomodacoes.forEach(acomodacao => {
                console.log(`${index +=1}: ${acomodacao.NomeAcomadacao.toString()}`)
                }); 
                let acomodacaoIndex = this.entrada.receberNumero('Selecione o número da acomodação a ser alocada: ') - 1;
                if (acomodacaoIndex >= 0 && acomodacaoIndex < this.acomodacoes.length) {
                    
                    let acomodacaoSelecionada = this.acomodacoes[acomodacaoIndex];
                    this.cliente.Acomodacao = acomodacaoSelecionada
                    this.cliente.Hospedado = true
                
                console.log(`Acomodação "${acomodacaoSelecionada.NomeAcomadacao}" alocada ao cliente "${this.cliente.Nome}".`);
            } else {
                console.log('Número de acomodação inválido.');
                hospedado = false
                this.cliente.Hospedado = hospedado
            }

        
            console.log('Finalizando a alocação do cliente...')
        } else {
            hospedado = false
            this.cliente.Hospedado = hospedado
        }

    }
}