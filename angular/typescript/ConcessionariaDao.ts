import DaoInterface from "./DaoInterface";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";

export default class ConcessionariaDao implements DaoInterface<Concessionaria> {
  nomeTabela: string = "tb-concessionaria";

  inserir(object: Concessionaria): boolean {
    console.log("logica de inserir");
    return true;
  }

  atualizar(object: Concessionaria): boolean {
    console.log("logica de atualizar");
    return true;
  }

  remover(id: number): ConcessionariaDao {
    console.log("logica de remover");
    return new ConcessionariaDao();
  }

  selecionar(id: number): Concessionaria {
    console.log("logica de selecionar");
    return new Concessionaria("", []);
  }
  selecionarTodos(id: number): [any] {
    console.log("logica selectr");
    return [new Concessionaria("", [])];
  }
}
