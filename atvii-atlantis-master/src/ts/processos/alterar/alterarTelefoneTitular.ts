import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class AlterarTelefoneTitular extends Processo {
    private cliente: Cliente
    private _armazem: Armazem

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this._armazem = Armazem.InstanciaUnica
    }
    processar(): void {
        console.clear();
        console.log('Iniciando o processo de alteração de telefone...');
        let cliente = this._armazem.Clientes.find(cliente => cliente === this.cliente);
        console.log(`O cliente selecionado foi: ${this.cliente.Nome}`);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        } else {
            console.log('Alterando o telefone do cliente...');
            
            
            this.cliente.Telefones.forEach((telefone, index) => {
                console.log(`${index + 1}: (${telefone.Ddd}) ${telefone.Numero}`);
            });

           
            let indexTelefone = this.entrada.receberNumero('Qual telefone deseja alterar (número)?') - 1;
            
            if (indexTelefone < 0 || indexTelefone >= this.cliente.Telefones.length) {
                console.log('Telefone selecionado inválido!');
                return;
            }

            let ddd = this.entrada.receberTexto('Qual o novo ddd do telefone?');
            let numero = this.entrada.receberTexto('Qual o novo número do telefone?');

           
            let newTelefone = new Telefone(ddd, numero);
            this.cliente.Telefones[indexTelefone] = newTelefone;
        }

        console.log('Telefone alterado com sucesso!');
        return;
    }
}
