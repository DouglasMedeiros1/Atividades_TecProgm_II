import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class AlterarEnderecoDependente extends Processo {
    private cliente: Cliente
    private _armazem: Armazem

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this._armazem = Armazem.InstanciaUnica
    }
    processar(): void {
        console.clear();
        console.log('Iniciando o processo de alteração de endereço de dependente...');
        let cliente = this._armazem.Clientes.find(cliente => cliente === this.cliente);
        console.log(`O cliente selecionado foi: ${this.cliente.Nome}`);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        } else {
            console.log('Alterando o endereço do dependente...');

            // Listar os dependentes existentes
            this.cliente.Dependentes.forEach((dependente, index) => {
                console.log(`${index + 1}: ${dependente.Nome}`);
            });

            // Selecionar o dependente a ser alterado
            let indexDependente = parseInt(this.entrada.receberTexto('Qual dependente deseja alterar o endereço (número)?')) - 1;
            
            if (indexDependente < 0 || indexDependente >= this.cliente.Dependentes.length) {
                console.log('Dependente selecionado inválido!');
                return;
            }

            let dependente = this.cliente.Dependentes[indexDependente];

            // Solicitar o novo endereço
            let rua = this.entrada.receberTexto('Qual a rua?');
            let bairro = this.entrada.receberTexto('Qual o bairro?');
            let cidade = this.entrada.receberTexto('Qual a cidade?');
            let estado = this.entrada.receberTexto('Qual o estado?');
            let pais = this.entrada.receberTexto('Qual o país?');
            let codigoPostal = this.entrada.receberTexto('Qual o código postal?');
            let newEndereco = new Endereco(rua, bairro, cidade, estado, pais, codigoPostal);

            // Atualizar o endereço do dependente
            dependente.Endereco = newEndereco;
        }

        console.log('Endereço do dependente alterado com sucesso!');
        return;
    }
}
