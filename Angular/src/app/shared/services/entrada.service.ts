import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  public nombre?: string;
  public estadoEmision: string = "";
  public tipo: string = "";
  public ordenarPor: string = "";
  constructor(private httpClient: HttpClient) {

  }

  public recuperarEntradas(): Observable<any> {
    return this.httpClient.get<any>('https://api.jikan.moe/v4/anime?q=' + this.nombre + '&status=' + this.estadoEmision + '&type=' + this.tipo + '&limit=40&sfw&' + 'order_by=' + this.ordenarPor + '&sort=desc');
  }

  public recuperarEntradasPopularidad(): Observable<any> {
    return this.httpClient.get<any>('https://api.jikan.moe/v4/anime?limit=20&sfw&order_by=score&sort=desc');
  }

  public recuperarEntradaPorId(id: string): Observable<any> {
    return this.httpClient.get<any>('https://api.jikan.moe/v4/anime/' + id);
  }

  public recuperarEpisodiosPorId(id: string): Observable<any> {
    return this.httpClient.get<any>('https://api.jikan.moe/v4/anime/' + id +'/episodes');
  }

  public setNombreBusqueda(nombre: string): void
  {
    this.nombre = nombre;
  }

  public setEstadoEmision(estadoEmision: string): void
  {
    this.estadoEmision = estadoEmision;
  }
  public setTipo(tipo: string): void
  {
    this.tipo = tipo;
  }
  public setOrdenarPor(ordenarPor: string): void
  {
    this.ordenarPor = ordenarPor;
  }
}
