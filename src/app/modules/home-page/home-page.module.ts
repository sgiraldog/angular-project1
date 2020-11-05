import { EntityDefinitionService, EntityDataService, EntityMetadataMap } from '@ngrx/data';
import { PokemonListDataService } from './../pokemon/services/pokemon-list-data.service';
import { PokemonResolver } from './../pokemon/services/pokemon-resolver';
import { PokemonListEntityService } from './../pokemon/services/pokemon-list-entity.service';
import { FavoriteCarouselComponent } from './components/favorite-carousel/favorite-carousel.component';

import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../modules/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { favoritePokemonsReducer } from '../pokemon/reducers/pokemon.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const homePageRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
]
const entityMetaData: EntityMetadataMap = {
  PokemonItem: {}
};

@NgModule({
  declarations: [HomePageComponent, FavoriteCarouselComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(homePageRoutes),
    SharedModule,
    StoreModule.forFeature('pokemonsState', favoritePokemonsReducer),
    NgbModule
  ],
  providers: [ 
    PokemonListEntityService, 
    PokemonResolver, 
    PokemonListDataService 
  ]
})
export class HomePageModule {
  constructor(
    private eds: EntityDefinitionService, 
    private entityDataService: EntityDataService, 
    private pokemonDataService: PokemonListDataService ){

    eds.registerMetadataMap(entityMetaData);

    entityDataService.registerService('PokemonItem', pokemonDataService);

  }
 }
