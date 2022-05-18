import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoTestPage } from './photo-test.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoTestPageRoutingModule {}
