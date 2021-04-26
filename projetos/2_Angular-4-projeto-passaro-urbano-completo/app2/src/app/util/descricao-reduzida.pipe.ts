import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "descricaoReduzida",
})
export class DescricaoReduzida implements PipeTransform {
  transform(texto: string, trucarEm: number, iniciaEm): string {
    if (texto.length > trucarEm) {
      return texto.substr(iniciaEm, trucarEm) + "...";
    }

    return texto;
  }
}
