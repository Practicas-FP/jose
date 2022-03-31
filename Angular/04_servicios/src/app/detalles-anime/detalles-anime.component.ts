import { EntradaService } from './../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreManagerService } from '../shared/services/firestore-manager.service';
import { AuthService } from '../shared/services/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-detalles-anime',
  templateUrl: './detalles-anime.component.html',
  styleUrls: ['./detalles-anime.component.scss']
})
export class DetallesAnimeComponent implements OnInit {
  public entrada: any;
  public animeid: string = "";
  public listaEpisodios: any;
  public esFavorito?: boolean = false;
  public estaLogeado?: boolean;
  constructor(private entradaService: EntradaService, private router: Router,
    private route: ActivatedRoute, private db: FirestoreManagerService,
    public login: AuthService) {
      this.route.queryParams.subscribe(params => {
        this.animeid = params['animeid'];
      });

      if(this.login.isLoggedIn)
      {
        this.recuperarFavoritos()
        console.log('fav ejecutado')
      }


    this.recuperarEntrada();
    this.recuperarCapitulos();
    console.log('variable en on init')
    console.log(this.esFavorito)
    }

  ngOnInit(): void {

  }

  public recuperarCapitulos(): void {
    this.entradaService.recuperarEpisodiosPorId(this.animeid).subscribe(
      (data) => {
        this.listaEpisodios = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

  public recuperarEntrada(): void {
    this.entradaService.recuperarEntradaPorId(this.animeid).subscribe(
      (data) => {
        this.entrada = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

  public recuperarEntradasPopularidad(): void {
    this.entradaService.recuperarEntradasPopularidad().subscribe(
      (data) => {
        this.entrada = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }

  guardarAnime(animeid: string): void {
    this.db.create(animeid).then(() => {
      console.log('Created new item successfully!');
      this.esFavorito = true;
    });
  }

   borrarFavorito(animeid: string):void {
    this.db.delete(animeid + '').then(() => {
      console.log('Deleted item successfully!');
      this.esFavorito = false;
    });
  }

  isFav(animeid: string): boolean {
    let encontrado = false;
    let listaFavoritos = this.recuperarFavoritos();
    console.log(listaFavoritos)

    return encontrado;
  }

  recuperarFavoritos(): void {
    let encontrado = false;
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      data.forEach((element: any) => {
        console.log('Clave' + element.key)
        console.log('Clave introducida: '+  this.animeid)
        if(element.key == this.animeid)
          {
            this.esFavorito = true;
          }
      });
    });

  }

}
