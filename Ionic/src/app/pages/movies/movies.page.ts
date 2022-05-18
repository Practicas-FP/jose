import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from './../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: any;
  searchTerm = '';
  tipo = '';
  estadoEmision = '';
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.searchChanged();
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.movieService.setNombreBusqueda(this.searchTerm);
    this.movieService.setTipo(this.tipo);
    this.movieService.setEstadoEmision(this.estadoEmision);
    this.movieService.searchData().subscribe(
      (data) => {
        this.results = data;
      },
      (error) => {

      },
      () => {

      }
    );
  }
}
