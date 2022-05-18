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

  }



}
