import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";

export default class AlterarClienteTitular extends Processo {

    processar(): void {
        console.log('Iniciando a alteração de um cliente...');

        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser alterado? ');

        let armazem = Armazem.InstanciaUnica;
        let clienteIndex = armazem.Clientes.findIndex(cliente => cliente.Nome === nome);
    

        if (clienteIndex !== -1) {
            let novoNome = this.entrada.receberTexto('Qual o novo nome do cliente? ');
            let novoNomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente? ');
            let novaDataNascimento = this.entrada.receberData('Qual a nova data de nascimento do cliente? ');
            let novoCliente = new Cliente(novoNome, novoNomeSocial, novaDataNascimento); 
        
            armazem.Clientes.splice(clienteIndex, 1, novoCliente);
            console.log('Cliente alterado com sucesso.');
        } else {
            console.log('Cliente não encontrado.');
        }
        console.log('Finalizando a alteração do cliente...');
    
    }
}