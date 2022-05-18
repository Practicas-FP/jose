import { AuthService } from './../shared/services/auth.service';
import { BusquedaService } from './../shared/services/busqueda.service';
import { Component, OnInit } from '@angular/core';
import { ListadoComponent } from '../listado/listado.component';
import { EntradaService } from '../shared/services/entrada.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public texto: string = "";

  constructor(private entradaService: EntradaService, public login: AuthService) { }

  ngOnInit(): void {

  }

  public mostrarBusqueda(busqueda: string): void {
    alert("Busqueda seleccionada " + busqueda);
  }

  public iniciarBusqueda(nombre: string): void {
    this.mostrarBusqueda(nombre);
    this.entradaService.setNombreBusqueda(nombre);
  }

}
