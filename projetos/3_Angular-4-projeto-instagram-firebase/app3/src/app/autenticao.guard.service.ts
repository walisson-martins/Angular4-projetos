import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class Autenticacaoguard implements CanActivate {
  constructor(private autenticacao: AuthService) {}

  canActivate(): boolean {
    return this.autenticacao.autenticado();
  }
}
