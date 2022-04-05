import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscador', url: '/movies', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'people' },
    { title: 'Área de usuario', url: 'dashboard', icon: 'people' },
    { title: 'Favoritos', url: 'favoritos', icon: 'people' },
    { title: 'Sobre mí', url: 'sobre-mi', icon: 'people' },
  ];
  constructor() {}
}
