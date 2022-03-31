import { Favoritos } from './../shared/services/favoritos';
import { FirestoreManagerService } from './../shared/services/firestore-manager.service';
import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from '../shared/interfaces/entrada';
import { AuthService } from '../shared/services/auth.service';
import { Anime } from '../shared/interfaces/anime';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {
  @Input()
  public entrada!: any;
  public anime!: Anime;
  public esFavorito?: boolean = false;

  @Input()
  public listaFavoritos?: any;

  constructor(public db: FirestoreManagerService, public authService: AuthService) {

   }

  ngOnInit(): void {
    if(this.listaFavoritos)
      this.esFavorito = this.isFav(this.entrada.mal_id);
      console.log(this.listaFavoritos)
  }

  saveTutorial(animeid: string): void {
    this.db.create(animeid).then(() => {
      console.log('Created new item successfully!');
    });
  }

  public borrarFavorito(animeid: string):void {
    this.db.delete(animeid + '').then(() => {
      console.log('Deleted item successfully!');
    });
  }

  reloadCurrentPage() {
    window.location.reload();
   }

   isFav(animeid: string): boolean {
    let encontrado = false;

    this.listaFavoritos.forEach((element: any) => {
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
