import { DetallesAnimeComponent } from './detalles-anime/detalles-anime.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './listado/listado.component';
import { EntradaComponent } from './entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { FormsModule, NgForm } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListadoComponent,
    EntradaComponent,
    PaginaNoEncontradaComponent,
    AcercaDeNosotrosComponent,
    DetallesAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
