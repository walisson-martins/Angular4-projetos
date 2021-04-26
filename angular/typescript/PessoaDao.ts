import DaoInterface from "./DaoInterface";
import Pessoa from "./Pessoa";

export default class PessoaDao implements DaoInterface<Pessoa> {
  nomeTabela: string = "";

  inserir(object: Pessoa): boolean {
    console.log("logica de inserir");
    return true;
  }

  atualizar(object: Pessoa): boolean {
    console.log("logica de atualizar");
    return true;
  }

  remover(id: number): Pessoa {
    console.log("logica de remover");
    return new Pessoa("", "");
  }

  selecionar(id: number): Pessoa {
    console.log("logica de selecionar");
    return new Pessoa("", "");
  }

  selecionarTodos(id: number): [any] {
    console.log("logica do select all");
    return [new Pessoa("", "")];
  }
}
