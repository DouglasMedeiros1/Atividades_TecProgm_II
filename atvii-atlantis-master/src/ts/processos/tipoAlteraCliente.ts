import Processo from "../abstracoes/processo";
import MenuTipoAlteraCliente from "../menus/menuTipoAlteraCliente";
import MenuTipoDeleteCliente from "../menus/menuTipoDeleteCliente";
import AlterarClienteDependente from "./alterar/alterarClienteDependente";
import AlterarClienteTitular from "./alterar/alterarClienteTitular";

export default class TipoAlteraCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoAlteraCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new AlterarClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new AlterarClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}