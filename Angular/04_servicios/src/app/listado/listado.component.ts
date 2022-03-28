import { BusquedaService } from './../shared/services/busqueda.service';
import { EntradaService } from './../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from '../shared/interfaces/entrada';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  public tituloBusqueda?: string;
  public listadoEntradas: any;
  public estadoEmision: string = "";
  public ordenarPor: string = "score";
  public tipo: string = "";
  public p: number = 1;

  constructor(private entradaService: EntradaService) {
    this.tituloBusqueda = "";
  }

  public recuperarEntradas(nombre: string): void {
    this.entradaService.setNombreBusqueda(nombre)
    this.entradaService.setEstadoEmision(this.estadoEmision)
    this.entradaService.setOrdenarPor(this.ordenarPor)
    this.entradaService.setTipo(this.tipo)

    this.entradaService.recuperarEntradas().subscribe(
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
