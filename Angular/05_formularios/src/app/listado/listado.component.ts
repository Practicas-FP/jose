import { EntradaService } from './../shared/services/entrada.service';
import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from '../shared/interfaces/entrada';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  @Input()
  public nombreSerie!: string;

  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) {
    this.recuperarEntradas(this.nombreSerie);
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

  ngOnInit(): void {
    this.recuperarEntradas('Fate');
  }

  public mostrarEntrada(titulo: string): void {
    alert("Entrada seleccionada " + titulo);
  }

}
