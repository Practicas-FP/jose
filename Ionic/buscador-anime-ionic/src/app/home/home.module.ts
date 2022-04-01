import { EntradaAnimeComponent } from './../entrada-anime/entrada-anime.component';
import { LoaderPageModule } from './../pages/loader/loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    LoaderPageModule,
    EntradaAnimeComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
