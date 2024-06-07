import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class AlterarEnderecoTitular extends Processo {
    private cliente: Cliente
    private _armazem: Armazem

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this._armazem = Armazem.InstanciaUnica
    }
    processar(): void {
        console.clear();
        console.log('Iniciando o processo de alteração de endereço...');
        let cliente = this._armazem.Clientes.find(cliente => cliente === this.cliente);
        console.log (`O cliente selecionado foi: ${this.cliente.Nome && this.cliente.Endereco}`);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        } else {
            console.log('Alterando o endereço do cliente...');
            
            let rua = this.entrada.receberTexto('Qual a rua?')
            let bairro = this.entrada.receberTexto('Qual o bairro?')
            let cidade = this.entrada.receberTexto('Qual a cidade?')
            let estado = this.entrada.receberTexto('Qual o estado?')
            let pais = this.entrada.receberTexto('Qual o país?')
            let codigoPostal = this.entrada.receberTexto('Qual o código postal?')
            let newEndereco = new Endereco(rua,bairro,cidade,estado,pais,codigoPostal)
            this.cliente.Endereco = newEndereco
        }

        console.log('Endereço alterado com sucesso!');
        return 
    }
}