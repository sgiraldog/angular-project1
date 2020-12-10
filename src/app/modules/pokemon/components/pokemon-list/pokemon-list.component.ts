import { ComparisonModalComponent } from './../comparison-modal/comparison-modal.component';
import { PokemonModalComponent } from './../pokemon-modal/pokemon-modal.component';
import { DialogUtils } from './../../../../utils/dialog.utils';
import { selectFirstPokemon, selectSecondPokemon } from './../../actions/pokemon.actions';
import { PokemonListEntityService } from '../../services/pokemon-list-entity.service';
import { environment } from './../../../../../environments/environment';
import { PokemonItem } from './../../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonState } from '../../reducers/pokemon.reducer';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Input() favoritesList: PokemonItem[]; 
  @Input() isComparing: boolean;
  @Input() pokemonsList: PokemonItem[];
  
  @Input('searchContent')
  set searchContent (searchContent: string){
    this.pokemonsService.setFilter(searchContent);
  }
  
  firstPokemon: number;
  secondPokemon: number;
  filteredPokemonsList: PokemonItem[];
  offset = environment.POKEMON_LIST_OFFSET;

  constructor(private pokemonsService: PokemonListEntityService, 
              private store: Store<PokemonState>,
              private dialog: MatDialog) { }

  onListScrolled(): void {
    let params = { offset: this.offset.toString() , limit: environment.POKEMON_LIST_OFFSET.toString() };
    this.pokemonsService.getWithQuery(params);
    this.offset += environment.POKEMON_LIST_OFFSET;
  }

  onPokemonClicked(pokemon: PokemonItem): void {
    this.pokemonsService.update(pokemon);
    
    if ( this.isComparing ) {
      this.secondPokemon = pokemon.id;
      this.store.dispatch(selectSecondPokemon({ id: pokemon.id }));
      this.openComparisonDialog();
    } else {
      this.firstPokemon = pokemon.id
      this.store.dispatch(selectFirstPokemon({ id: pokemon.id }));
      this.openDialog();
    } 
  }

  openDialog(): void{
    const config = DialogUtils.getDefaultDialogConfig();
    config.data = {
      firstPokemon: this.firstPokemon,
      favoritePokemonsList: this.favoritesList,
      pokemonsList: this.pokemonsList
    }
    config.panelClass = 'custom-dialog-settings';
  
    this.dialog.open(PokemonModalComponent, config);
  }

  openComparisonDialog(): void{
    const config = DialogUtils.getDefaultDialogConfig();
    config.data = {
      firstPokemon: this.firstPokemon,
      secondPokemon: this.secondPokemon,
      pokemonsList: this.pokemonsList
    }
    config.panelClass = 'custom-dialog-settings';
    this.dialog.open(ComparisonModalComponent, config);
  }
}
