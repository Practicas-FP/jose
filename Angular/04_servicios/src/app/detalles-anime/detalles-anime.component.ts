import { EntradaService } from './../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles-anime',
  templateUrl: './detalles-anime.component.html',
  styleUrls: ['./detalles-anime.component.css']
})
export class DetallesAnimeComponent implements OnInit {
  private entrada: any;
  constructor(private entradaService: EntradaService) { }

  ngOnInit(): void {
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

}
