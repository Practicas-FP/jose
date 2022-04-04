import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Buscador', url: '/movies', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'Login', url: '/login', icon: 'people' },
    { title: 'Sobre mí', url: '', icon: 'people' },
  ];
  constructor() {}
}
