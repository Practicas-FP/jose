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
  constructor(private http: HttpClient) { }
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get('https://api.jikan.moe/v4/anime?q=&status=&type=&limit=3&sfw&order_by=score&sort=desc').pipe(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      map(results => results['data']));
  }
  getDetails(id) {
    return this.http.get<any>('https://api.jikan.moe/v4/anime/' + id).pipe(
      // eslint-disable-next-line @typescript-eslint/dot-notation
      map(results => results['data']));
  }
}
