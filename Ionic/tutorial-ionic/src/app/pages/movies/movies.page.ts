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
  type: SearchType = SearchType.all;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.searchChanged();
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.movieService.searchData(this.searchTerm, this.type).subscribe(
      (data) => {
        this.results = data;
        console.log('data');
      },
      (error) => {

      },
      () => {

      }
    );
  }
}
