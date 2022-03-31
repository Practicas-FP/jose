import { EntradaService } from './../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreManagerService } from '../shared/services/firestore-manager.service';

@Component({
  selector: 'app-detalles-anime',
  templateUrl: './detalles-anime.component.html',
  styleUrls: ['./detalles-anime.component.scss']
})
export class DetallesAnimeComponent implements OnInit {
  public entrada: any;
  public animeid: string = "";
  public listaEpisodios: any;
  public esFavorito: boolean = false;
  constructor(private entradaService: EntradaService, private router: Router,
    private route: ActivatedRoute, private db: FirestoreManagerService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.animeid = params['animeid'];
    });
    this.recuperarEntrada();
    this.recuperarCapitulos();
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
    });
  }

  public borrarFavorito(animeid: string):void {
    this.db.delete(animeid + '').then(() => {
      console.log('Deleted item successfully!');
    });
  }

}
