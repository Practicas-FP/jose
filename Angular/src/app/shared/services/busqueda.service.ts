import { ListadoComponent } from './../../listado/listado.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {
  private listado: ListadoComponent;
  constructor(listado: ListadoComponent) {
    this.listado = listado;
  }
  public busquedaNombre(nombre:string) {
    this.listado.mostrarEntrada(nombre);
  }
}
