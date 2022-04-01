import { Component, OnInit } from '@angular/core';
import { AnimeApiServiceService } from '../services/anime-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listadoAnimes: any;
  constructor(private animeApiService: AnimeApiServiceService) { }

  ngOnInit() {
    console.log(this.listadoAnimes);
    this.searchChanged();
    console.log('hi');
    console.log(this.listadoAnimes);
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.animeApiService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoAnimes = data;
      },
      (error) => {
        console.log('ha cascao');
      },
      () => {

      }
    );

  }

}
