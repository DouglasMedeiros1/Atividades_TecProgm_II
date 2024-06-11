import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import Cliente from "../../modelos/cliente";
import Telefone from "../../modelos/telefone";

export default class AlterarTelefoneDependente extends Processo {
    private cliente: Cliente
    private _armazem: Armazem

    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this._armazem = Armazem.InstanciaUnica
    }
    processar(): void {
        console.clear();
        console.log('Iniciando o processo de alteração de telefone de dependente...');
        let cliente = this._armazem.Clientes.find(cliente => cliente === this.cliente);
        console.log(`O cliente selecionado foi: ${this.cliente.Nome}`);

        if (!cliente) {
            console.log('Cliente não encontrado!');
            return;
        } else {
            console.log('Alterando o telefone do dependente...');
            
    
            this.cliente.Dependentes.forEach((dependente, index) => {
                console.log(`${index + 1}: ${dependente.Nome}`);
            });

            
            let indexDependente = parseInt(this.entrada.receberTexto('Qual dependente deseja alterar o telefone (número)?')) - 1;
            
            if (indexDependente < 0 || indexDependente >= this.cliente.Dependentes.length) {
                console.log('Dependente selecionado inválido!');
                return;
            }

            let dependente = this.cliente.Dependentes[indexDependente];

           
            dependente.Telefones.forEach((telefone, index) => {
                console.log(`${index + 1}: (${telefone.Ddd}) ${telefone.Numero}`);
            });

            
            let indexTelefone = parseInt(this.entrada.receberTexto('Qual telefone deseja alterar (número)?')) - 1;
            
            if (indexTelefone < 0 || indexTelefone >= dependente.Telefones.length) {
                console.log('Telefone selecionado inválido!');
                return;
            }

            let ddd = this.entrada.receberTexto('Qual o novo ddd de telefone ?');
            let numero = this.entrada.receberTexto('Qual o novo número de telefone?');

          
            let newTelefone = new Telefone(ddd, numero);
            dependente.Telefones[indexTelefone] = newTelefone;
        }

        console.log('Telefone do dependente alterado com sucesso!');
        return;
    }
}
