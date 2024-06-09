import Impressor from "../interfaces/impressor";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";

export default class ImpressorTelefone {
    private telefones: Telefone[]; 

    constructor(telefones: Telefone[]) {
        this.telefones = telefones;
    }

    imprimir(): string {
        let impressao = "| Telefones:\n|\n";
        for (const telefone of this.telefones) {
            impressao += `| Número : ( ${telefone.Ddd} ) ${telefone.Numero} \n`;
        } console.log(`|`);
        

        return impressao;
    }
}
