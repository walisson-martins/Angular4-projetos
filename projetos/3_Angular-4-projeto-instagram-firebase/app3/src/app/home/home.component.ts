import { Component, OnInit, ViewChild } from "@angular/core";
import { Autenticacao } from "../autenticacao.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  //ViewChild recebe publicacoes pela variavel decoradora de home.component.html da tag app-publicacoes
  @ViewChild("publicacoes") public publicacoes: any;
  constructor(private autenticacao: Autenticacao) {}

  ngOnInit() {}

  public sair(): void {
    this.autenticacao.sair();
  }

  public atualizarTimeLine(): void {
    /* POR CONTA DA AMARRAÇAO QUE FIZEMOS DE VIEWCHILD
    nós conseguimos acessar o método atualizarTimeline() do
    filho de home, que é publicacoes.component */
    this.publicacoes.atualizarTimeline();
  }
}
