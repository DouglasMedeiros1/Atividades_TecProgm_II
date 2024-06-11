import Processo from "../abstracoes/processo";
import MenuTipoListagemClientes from "../menus/menuTipoListagemClientes";
import ListagemTitularesDependentes from "./listagem/listagemTitularesDependentes";
import ListagemDependentesTitular from "./listagem/listagemDependentesTitular";
import ListagemTodosTitular from "./listagem/listagemTodosTitular";
import ListagemTodosDependentes from "./listagem/listagemTodosDependentes";

export default class TipoListagemClientes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemClientes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemTodosTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new ListagemTodosDependentes()
                this.processo.processar()
                break
            case 3:
                this.processo = new ListagemTitularesDependentes()
                this.processo.processar()
                break;
            case 4:
                this.processo = new ListagemDependentesTitular()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida... :(')
        }
    }
}