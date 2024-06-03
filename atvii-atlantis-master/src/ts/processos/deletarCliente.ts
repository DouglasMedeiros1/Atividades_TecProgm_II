import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastroEnderecoTitular from "./cadastroEnderecoTitular";

export default class DeletarCliente extends Processo {
    processar(): void {
        console.log('Iniciando a remoção de um cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser removido? ')
        let dataNascimentoStr = this.entrada.receberTexto('Qual a data de nascimento do cliente (dd/mm/yyyy)? ')
        
        
        let dataNascimento = new Date(dataNascimentoStr)
        let armazem = Armazem.InstanciaUnica

        
        let clienteIndex = armazem.Clientes.findIndex(cliente => 
            cliente.Nome === nome && cliente.DataNascimento.getTime() === dataNascimento.getTime()
        )
        
        
        if (clienteIndex !== -1) {
            armazem.Clientes.splice(clienteIndex, 1)
            console.log('Cliente removido com sucesso.')
        } else {
            console.log('Cliente não encontrado.')
        }
        
        console.log('Finalizando a remoção do cliente...')
    }
}

