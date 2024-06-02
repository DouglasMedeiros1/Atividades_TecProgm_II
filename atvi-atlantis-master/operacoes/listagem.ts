import Cliente from "../modelos/cliente";

export default function Listagem (cliente: Cliente[]): void {
        for (let index = 0; index < cliente.length; index++) {
            const element = cliente[index];

            console.log("\n---------------\nDados do Cliente: \n------------\n");
            console.log(`  Nome: ${element.nome}`);
            console.log(`  Nome Social: ${element.nomeSocial}`);
            console.log(`  Data de Nascimento: ${element.dataNascimento.toDateString()}`);
            console.log(`  Data de Cadastro: ${element.dataCadastro.toDateString()}`);

            console.log(`\n  Titular: ${cliente[index].titular.nome}`);
            console.log(`\n  Dependentes: ${element.dependentes.length}`);

            console.log(`\n  Endereço:`);
            console.log(`   Rua: ${element.endereco.rua}`);
            console.log(`   Bairro: ${element.endereco.bairro}`);
            console.log(`   Cidade: ${element.endereco.cidade}`);
            console.log(`   Estado: ${element.endereco.estado}`);
            console.log(`   País: ${element.endereco.pais}`);
            console.log(`   Código Postal: ${element.endereco.codigoPostal}`);

            element.telefones.forEach((telefone, index) => {
                console.log(`\n Telefone(s) ${index + 1}: (${telefone.ddd}) ${telefone.numero}`);
            });
        }



} 

