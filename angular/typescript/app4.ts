// import ConcessionariaDao from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria";
import { Dao } from "./dao";
// import PessoaDao from "./PessoaDao";
import Pessoa from "./Pessoa";

// let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria("", []);
let pessoa: Pessoa = new Pessoa("", "");

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>();
// let dao2: PessoaDao = new PessoaDao();

dao3.inserir(concessionaria);
