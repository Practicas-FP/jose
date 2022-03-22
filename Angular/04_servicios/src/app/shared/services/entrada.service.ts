import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  public nombre?: string;
  constructor(private httpClient: HttpClient) {

  }

  public recuperarEntradas(nombre: string): Observable<any> {
    return this.httpClient.get<any>('https://api.jikan.moe/v4/anime?q=' + nombre + '&limit=10&sfw&order_by=score&sort=desc');
  }

  public recuperarEntradasPopularidad(): Observable<any> {
    return this.httpClient.get<any>('https://api.jikan.moe/v4/anime?limit=5&sfw&order_by=score&sort=desc');
  }

  public setNombreBusqueda(nombre: string): void
  {
    this.nombre = nombre;
  }
}
