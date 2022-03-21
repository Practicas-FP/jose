import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) {

  }

  public recuperarEntradas(nombre: string): Observable<any> {
    return this.httpClient.get<any>('https://api.jikan.moe/v4/anime?q=' + nombre + '&limit=5&sfw&order_by=');
  }
}
