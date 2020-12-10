import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home-page/home-page.module').then(module => module.HomePageModule)
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./modules/pokemon/pokemon.module').then(module => module.PokemonModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
