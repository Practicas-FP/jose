import { DetallesAnimeComponent } from './detalles-anime/detalles-anime.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AcercaDeNosotrosComponent } from './acerca-de-nosotros/acerca-de-nosotros.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListadoFavoritosComponent } from './listado-favoritos/listado-favoritos.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'nosotros', component: AcercaDeNosotrosComponent},
  { path: 'detalles', component: DetallesAnimeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/listado', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'favoritos', component: ListadoFavoritosComponent, canActivate: [AuthGuard] },
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
