import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FirebaseManagerService } from 'src/app/services/firebase-manager.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favoritos: any = [];
  listado: any = [];
  constructor(public db: FirebaseManagerService, public animeapi: MovieService) { }

  ngOnInit() {
    this.recuperarFavoritos();
  }

  public recuperarFavoritos(){
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.favoritos = data;
      data.forEach(element => {
        this.detallesFavoritos(element.animeid);
      });
      console.log();
    });
  }

  public detallesFavoritos(animeid: string){
    this.animeapi.getDetails(animeid).subscribe(
      (data) => {
        //this.listaFavoritos = data.data;
        this.listado.push(data);
        console.log(data);
      },
      (error) => {
        console.log('error');
      },
      () => {

      }
    );
  }

}
