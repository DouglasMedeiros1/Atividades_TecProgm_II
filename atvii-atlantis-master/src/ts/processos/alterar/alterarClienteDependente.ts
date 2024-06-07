import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import AlterarEnderecoDependente from "./alterarEnderecoDependente";
import AlterarEndereco from "./alterarEnderecoTitular";
import AlterarTelefoneDependente from "./alterarTelefoneDependente";
import AlterarTelefone from "./alterarTelefoneTitular";


export default class AlterarClienteDependente extends Processo {

    processar(): void {
        console.log('Iniciando a alteração de um dependente...');

        let nomeTitular = this.entrada.receberTexto('Qual o nome do cliente titular? ');
        let nome = this.entrada.receberTexto('Qual o nome do dependente a ser alterado? ');

        let armazem = Armazem.InstanciaUnica;
        let clienteTitular = armazem.Clientes.find(cliente => cliente.Nome === nomeTitular);
        let cliente = clienteTitular?.Dependentes.find(dependente => dependente.Nome === nome);

        if (cliente) {
            console.log(`O cliente selecionado foi: ${cliente.Nome}`);
            let novoNome = this.entrada.receberTexto(`Qual o novo nome do cliente? (${cliente.Nome}) `);
            let novoNomeSocial = this.entrada.receberTexto(`Qual o novo nome social do cliente? (${cliente.NomeSocial}) `);
            let novaDataNascimento = this.entrada.receberData(`Qual a nova data de nascimento do cliente? (${cliente.DataNascimento}) `);

            cliente.Nome = novoNome;
            cliente.NomeSocial = novoNomeSocial;
            cliente.DataNascimento = novaDataNascimento;


            this.processo = new AlterarEnderecoDependente(cliente);
            this.processo.processar();

            this.processo = new AlterarTelefoneDependente(cliente);
            this.processo.processar();
        
        
            console.log('Cliente alterado com sucesso.');
        } else {
            console.log('Cliente não encontrado.');
        }
        console.log('Finalizando a alteração do cliente...');
    
    }
}