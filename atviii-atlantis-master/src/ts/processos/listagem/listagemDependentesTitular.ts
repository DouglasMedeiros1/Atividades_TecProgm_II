import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressorCliente from "../../impressores/impressorCliente";
import ImpressorDependente from "../../impressores/impressorDependente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

export default class ListagemDependentesTitular extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos dependentes...');
        console.log('Digite o nome do titular para listar os dependentes:');
        
        
        const nomeTitular = this.entrada.receberTexto('Qual a opção desejada? ');
        const clienteTitular = this.clientes.find(cliente => cliente.Nome === nomeTitular);

        if (clienteTitular) {
            if (clienteTitular.Dependentes && clienteTitular.Dependentes.length > 0) {
                console.log(`Dependentes de ${clienteTitular.Nome}:`);
                clienteTitular.Dependentes.forEach(dependente => {
                    this.impressor = new ImpressorDependente(dependente);
                    console.log(this.impressor.imprimir());
                });
            } else {
                console.log(`${clienteTitular.Nome} não possui dependentes.`);
            }
        } else {
            console.log(`Titular ${nomeTitular} não encontrado.`);
        }
    }
}
