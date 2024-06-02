import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
const prompt = require('prompt-sync')();


export default function Cadastrar (clientes: Cliente[] = []): void {

        let cliente = new Cliente();
        let dependentes = new Cliente();
        cliente.nome = prompt("Nome: ");
        cliente.nomeSocial = prompt("Nome Social: ");
        cliente.dataNascimento = new Date(prompt("Data de Nascimento: "));
        cliente.dataCadastro = new Date(prompt("Data de Cadastro: "));
        cliente.titular = cliente;
        
        console.log(`\nEndereço:`);
        let endereco = new Endereco();
        endereco.rua = prompt("Rua: ");
        endereco.bairro = prompt("Bairro: ");
        endereco.cidade = prompt("Cidade: ");
        endereco.estado = prompt("Estado: ");
        endereco.pais = prompt("Pais: ");
        endereco.codigoPostal = prompt("Código Postal: ");
        cliente.endereco = endereco
        
        
        let numTelefones = parseInt(prompt("\nQuantos telefones deseja cadastrar? "));
        for (let i = 0; i < numTelefones; i++) {
            let telefone = new Telefone();
            telefone.ddd = prompt("DDD do telefone " + (i+1) + ": ");
            telefone.numero = prompt("Número do telefone " + (i+1) + ": ");
            console.log("\n")
            cliente.telefones.push(telefone);
            
        }
        
        let dependentesOpc = parseInt(prompt("Quantos dependentes deseja cadastrar? "));
        for (let i = 0; i < dependentesOpc; i++) {
            dependentes.nome = prompt("Nome do dependente " + (i+1) + ": ");
            dependentes.nomeSocial = prompt("Nome Social do dependente " + (i+1) + ": ");
            dependentes.dataNascimento = new Date(prompt("Data de Nascimento: "));
            dependentes.dataCadastro = new Date(prompt("Data de Cadastro: "));
            dependentes.endereco = (cliente.endereco.clonar() as Endereco)
            dependentes.telefones = cliente.telefones.map((telefone: Telefone) => telefone.clonar()) as Telefone[];
            dependentes.titular = cliente;
            cliente.dependentes.push(dependentes);
            
            console.log("\n");
        }
        
        clientes.push(cliente);
        console.log("Cadastrado com sucesso!");
    
        
}
