import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorDependente from "../../impressores/impressorDependente";
import ImpressorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemTitularesDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos titulares...');

        
        const nomeDependente = this.entrada.receberTexto('Digite o nome do dependente para listar os titulares:');
        const titularesComDependente = this.clientes.filter(cliente => 
            cliente.Dependentes && cliente.Dependentes.some(dependente => dependente.Nome === nomeDependente)
        );

        if (titularesComDependente.length > 0) {
            titularesComDependente.forEach(titular => {
                this.impressor = new ImpressorCliente(titular);
                console.log(this.impressor.imprimir());
            });
        } else {
            console.log(`Nenhum titular encontrado com o dependente ${nomeDependente}.`);
        }
    }
}
