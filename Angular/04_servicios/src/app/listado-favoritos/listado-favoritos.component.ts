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
  constructor(public db: FirestoreManagerService, public entrada: EntradaService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.favoritos = data;
    });
  }

  public recuperarEntradas(animeid: string): void {
    this.entrada.recuperarEntradaPorId(animeid).subscribe(
      (data) => {
        this.listaFavoritos = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }

}
