import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import Moto from "./Moto";

let carro = new Carro("Velost", 3);
let moto = new Moto();

let concessionaria = new Concessionaria("", []);
//
console.log(moto);
console.log(carro);
console.log(concessionaria.fornecerEndereco());
