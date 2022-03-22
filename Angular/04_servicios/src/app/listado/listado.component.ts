import { BusquedaService } from './../shared/services/busqueda.service';
import { EntradaService } from './../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from '../shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public tituloBusqueda?: string;
  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) {
    this.tituloBusqueda = "";
  }

  public recuperarEntradas(nombre: string): void {
    this.entradaService.recuperarEntradas(nombre).subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }

  public recuperarEntradasPopularidad(): void {
    this.entradaService.recuperarEntradasPopularidad().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }

  ngOnInit(): void {
    this.recuperarEntradas(this.tituloBusqueda + '');
  }

  ngOnChange(): void {

  }


  public mostrarEntrada(titulo: string): void {
    alert("Entrada seleccionada " + titulo);
  }

}
