import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
const prompt = require('prompt-sync')();

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[];
    private impressor!: Impressor;

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();
        console.log('Listagem de dependentes de um titular');

        const nomeTitular = prompt('Digite o nome do titular para listar os dependentes:');
        const Nometitular = this.clientes.find(cliente => cliente.Nome === nomeTitular);

        const dataNascTitular = prompt('Digite o nome do titular para listar os dependentes:');
        const DataNasctitular = this.clientes.find(cliente => cliente.Nome === dataNascTitular);

        if (Nometitular && DataNasctitular) {
            console.log(`Dependentes de ${Nometitular.Nome}:`);
            Nometitular.Dependentes.forEach(dependente => {
                this.impressor = new ImpressaorCliente(dependente);
                console.log(this.impressor.imprimir());
                
            });
        } else {
            console.log(`Titular ${nomeTitular} não encontrado.`);
        }
    }
}
