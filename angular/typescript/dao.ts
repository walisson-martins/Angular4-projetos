import DaoInterface from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
  nomeTabela: string = "";

  inserir(object: T): boolean {
    console.log("logica de inserir");
    return true;
  }

  atualizar(object: T): boolean {
    console.log("logica de atualizar");
    return true;
  }

  remover(id: number): T {
    console.log("logica de remover");
    return  Object();
  }

  selecionar(id: number): T {
    console.log("logica de selecionar");
    return  Object();
  }

  selecionarTodos(id: number): [T] {
    console.log("logica do select all");
    return [ Object()];
  }
}
