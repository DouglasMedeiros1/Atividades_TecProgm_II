import Processo from "../../abstracoes/processo";
import Telefone from "../../modelos/telefone";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class CadastroTelefoneDependente extends Processo {
    private cliente: Cliente
    private nomeTitular: string

    constructor(cliente: Cliente, nomeTitular: string) {
        super()
        this.cliente = cliente
        this.nomeTitular = nomeTitular
    }

    processar(): void {
        let clienteTitular = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Nome === this.nomeTitular);
        
        if (clienteTitular) {
            clienteTitular.Telefones.forEach(telefoneTitular => {
                let telefone = new Telefone(
                    telefoneTitular.Ddd,
                    telefoneTitular.Numero,
                );
                
                this.cliente.Telefones.push(telefone);
            });
        } else {
            console.error('Titular não encontrado.');
        }
    }
        
}    