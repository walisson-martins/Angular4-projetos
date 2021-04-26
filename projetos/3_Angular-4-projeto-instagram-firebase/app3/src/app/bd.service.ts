import { Injectable } from "@angular/core";

import * as firebase from "firebase";
import { Progresso } from "./progresso.service";

@Injectable()
export class Bd {
  constructor(private progresso: Progresso) {}
  public publicar(publicacao: any): void {
    // console.log(publicacao)
    firebase
      .database()
      .ref(`publicacoes/${btoa(publicacao.email)}`)
      .push({ titulo: publicacao.titulo })
      .then((resposta: any) => {
        let nomeImagem = resposta.key;
        firebase
          .storage()
          .ref()
          .child(`imagens/${nomeImagem}`)
          .put(publicacao.imagem)
          .on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            /* Evento on() armazena os eventos
                    da tarefa de upload pro storage do firebase*/
            (snapshot: any) => {
              //aqui iremos acompanhar o progresso do upload
              this.progresso.status = "andamento";
              this.progresso.estado = snapshot;
              // console.log("Snapshot capturado no on()->",snapshot)
            },
            (error) => {
              this.progresso.status = "erro";
              //  console.log(error)
            },
            () => {
              this.progresso.status = "concluido";
              // console.log("upload completo")
            }
          );
      });
  }

  public consultaPublicacoes(emailUsuario: string): Promise<any> {
    return new Promise((resolve, reject) => {
      //consultar as publicações em database
      firebase
        .database()
        .ref(`publicacoes/${btoa(emailUsuario)}`)
        .orderByKey()
        /* método on, é um listening que ficará ouvindo este path e notificará 
                    a aplicação sobre qualquer mudança que tiver neste path.
                    O método once só fará uma única consulta no momento que o método é executado */
        .once("value")
        .then((snapshot: any) => {
          // console.log(snapshot.val())

          let publicacoes: Array<any> = [];

          snapshot.forEach((childSnapshot: any) => {
            let publicacao = childSnapshot.val();
            publicacao.key = childSnapshot.key;
            publicacoes.push(publicacao);
          });
          // resolve(publicacoes)
          return publicacoes.reverse();
        })
        .then((publicacoes: any) => {
          publicacoes.forEach((publicacao) => {
            firebase
              .storage()
              .ref()
              .child(`imagens/${publicacao.key}`)
              .getDownloadURL()
              .then((url: string) => {
                publicacao.url_imagem = url;

                //consultar o nome do usuário
                firebase
                  .database()
                  .ref(`usuario_detalhe/${btoa(emailUsuario)}`)
                  .once("value")
                  .then((snapshot: any) => {
                    publicacao.nome_usuario = snapshot.val().nome_usuario;
                    publicacoes.push(publicacao);
                  });
              });
          });
          resolve(publicacoes);
        });
    });
  }
}
