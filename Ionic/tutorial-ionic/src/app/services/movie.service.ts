import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public nombre?: string = '';
  public estadoEmision = '';
  public tipo = '';
  public ordenarPor = '';
  constructor(private http: HttpClient) { }
  searchData(): Observable<any> {
    // eslint-disable-next-line max-len
    return this.http.get('https://api.jikan.moe/v4/anime?q=' + this.nombre + '&status=' +
    this.estadoEmision + '&type=' + this.tipo + '&limit=3&sfw&' + 'order_by=score&sort=desc').pipe(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      map(results => results['data']));
  }
  getDetails(id) {
    return this.http.get<any>('https://api.jikan.moe/v4/anime/' + id).pipe(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      map(results => results['data']));
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
