import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreMiPageRoutingModule } from './sobre-mi-routing.module';

import { SobreMiPage } from './sobre-mi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreMiPageRoutingModule
  ],
  declarations: [SobreMiPage]
})
export class SobreMiPageModule {}
