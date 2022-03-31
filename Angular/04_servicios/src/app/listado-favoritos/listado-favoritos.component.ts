import { EntradaService } from './../shared/services/entrada.service';
import { FirestoreManagerService } from './../shared/services/firestore-manager.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-listado-favoritos',
  templateUrl: './listado-favoritos.component.html',
  styleUrls: ['./listado-favoritos.component.scss']
})
export class ListadoFavoritosComponent implements OnInit {
  public favoritos:any;
  public listaFavoritos: any;
  public listado: any[] = [];
  constructor(public db: FirestoreManagerService, public entrada: EntradaService) { }

  ngOnInit(): void {
    this.recuperarFavoritos();
  }

  recuperarFavoritos(): void {
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.favoritos = data;
      data.forEach(element => {
        this.recuperarEntradas(element.animeid);
      });
    });
  }

  public recuperarEntradas(animeid: string): void {
    this.entrada.recuperarEntradaPorId(animeid).subscribe(
      (data) => {
        //this.listaFavoritos = data.data;
        this.listado.push(data.data);
      },
      (error) => {
        console.log('error')
      },
      () => {

      }
    );
  }

  isFav(animeid: string): boolean {
    let encontrado = false;

    this.favoritos.forEach((element: any) => {
      console.log('Clave' + element.key)
      console.log('Clave introducida: '+  animeid)
      if(element.key == animeid)
        {
          encontrado = true;
        }
    });
    console.log(encontrado);
    return encontrado;
  }

}
