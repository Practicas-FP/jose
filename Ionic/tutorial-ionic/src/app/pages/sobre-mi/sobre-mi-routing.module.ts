import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreMiPage } from './sobre-mi.page';

const routes: Routes = [
  {
    path: '',
    component: SobreMiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreMiPageRoutingModule {}
