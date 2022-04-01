import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiServiceService {
  public nombre: string;
  public estadoEmision: string;
  public tipo: string;
  public ordenarPor: string;
  public apiURL: string;
  constructor(private http: HTTP) {
    this.nombre = '';
    this.estadoEmision = '';
    this.tipo = '';
    this.ordenarPor = '';
    this.apiURL = 'https://api.jikan.moe/v4/anime/';
  }
  public recuperarEntradas(): void {
    this.http.get('http://ionic.io', {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      console.log(data);

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }
}
