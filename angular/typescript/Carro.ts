import { ConcessionariiaInterface } from "./ConcessionariiaInterface";
import Veiculo from "./Veiculo";

export default class Carro extends Veiculo implements ConcessionariiaInterface {
  private numeroDePortas: number;

  constructor(modelo: string, numeroDePortas: number) {
    super();
    this.modelo = modelo;
    this.numeroDePortas = numeroDePortas;
  }

  public fornecerHorarioDeFuncionamento(): string {
    return "De segunda a sexta das 8 as 18hrs";
  }
}
