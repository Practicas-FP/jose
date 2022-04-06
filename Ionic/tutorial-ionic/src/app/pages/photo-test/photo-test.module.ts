import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoTestPageRoutingModule } from './photo-test-routing.module';

import { PhotoTestPage } from './photo-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoTestPageRoutingModule
  ],
  declarations: [PhotoTestPage]
})
export class PhotoTestPageModule {}
