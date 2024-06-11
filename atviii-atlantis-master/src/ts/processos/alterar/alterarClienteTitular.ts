import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import AlterarEnderecoTitular from "./alterarEnderecoTitular";
import AlterarEndereco from "./alterarEnderecoTitular";
import AlterarTelefoneTitular from "./alterarTelefoneTitular";
import AlterarTelefone from "./alterarTelefoneTitular";

export default class AlterarClienteTitular extends Processo {

    processar(): void {
        console.log('Iniciando a alteração de um cliente...');

        let nome = this.entrada.receberTexto('Qual o nome do cliente a ser alterado? ');

        let armazem = Armazem.InstanciaUnica;
        let cliente = armazem.Clientes.find(cliente => cliente.Nome === nome);

        if (cliente) {
            console.log(`O cliente selecionado foi: ${cliente.Nome}`);
            let novoNome = this.entrada.receberTexto(`Qual o novo nome do cliente? (${cliente.Nome}) `);
            let novoNomeSocial = this.entrada.receberTexto(`Qual o novo nome social do cliente? (${cliente.NomeSocial}) `);
            let novaDataNascimento = this.entrada.receberData(`Qual a nova data de nascimento do cliente? (${cliente.DataNascimento}) `);
            let novoHospede = this.entrada.receberNumero(`O cliente está hospedado? (Caso positivo, digite 1) `);

            cliente.Nome = novoNome;
            cliente.NomeSocial = novoNomeSocial;
            cliente.DataNascimento = novaDataNascimento;

            if (novoHospede === 1) {cliente.Hospedado = true
            } else {cliente.Hospedado = false}


            this.processo = new AlterarEnderecoTitular(cliente);
            this.processo.processar();

            this.processo = new AlterarTelefoneTitular(cliente);
            this.processo.processar();
        
        
            console.log('Cliente alterado com sucesso.');
        } else {
            console.log('Cliente não encontrado.');
        }
        console.log('Finalizando a alteração do cliente...');
    
    }
}