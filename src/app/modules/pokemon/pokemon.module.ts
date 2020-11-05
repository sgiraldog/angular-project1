import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatIconModule } from '@angular/material/icon';
import { PokemonListDataService } from './services/pokemon-list-data.service';
import { PokemonResolver } from './services/pokemon-resolver';
import { PokemonListEntityService } from './services/pokemon-list-entity.service';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { PokemonHomePageComponent } from './components/pokemon-home-page/pokemon-home-page.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FavoriteButtonComponent } from './components/shared/favorite-button/favorite-button.component';
import { ComparisonModalComponent } from './components/comparison-modal/comparison-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonChartComponent } from './components/pokemon-chart/pokemon-chart.component';
import { ChartsModule } from 'ng2-charts';

export const pokemonRoutes: Routes = [
  {
    path: '',
    component: PokemonHomePageComponent,
    resolve: {
      pokemons: PokemonResolver
    }
  }
]

const entityMetaData: EntityMetadataMap = {
  PokemonItem: {}
};

@NgModule({
  declarations: [ 
    PokemonModalComponent, 
    PokemonHomePageComponent,
    PokemonListComponent,
    FavoriteButtonComponent,
    ComparisonModalComponent,
    PokemonChartComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes),
    InfiniteScrollModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    ChartsModule
  ],
  providers: [ 
    PokemonListEntityService, 
    PokemonResolver, 
    PokemonListDataService 
  ]
})
export class PokemonModule { 
  constructor(
    private eds: EntityDefinitionService, 
    private entityDataService: EntityDataService, 
    private pokemonDataService: PokemonListDataService ){

    eds.registerMetadataMap(entityMetaData);

    entityDataService.registerService('PokemonItem', pokemonDataService);

  }
}
