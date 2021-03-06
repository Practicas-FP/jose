import { Favoritos } from './../shared/services/favoritos';
import { FirestoreManagerService } from './../shared/services/firestore-manager.service';
import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from '../shared/interfaces/entrada';
import { AuthService } from '../shared/services/auth.service';
import { Anime } from '../shared/interfaces/anime';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {
  @Input()
  public entrada!: any;
  public anime!: Anime;
  public esFavorito?: boolean = false;

  constructor() {

   }

  ngOnInit(): void {

  }
}
