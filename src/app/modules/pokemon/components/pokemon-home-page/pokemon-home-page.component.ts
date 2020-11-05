import { updateSearchContent } from './../../actions/pokemon.actions';
import { getFavoritePokemonList, getIsComparing, getSearchContent } from './../../selectors/pokemon.selectors';
import { PokemonState } from './../../reducers/pokemon.reducer';
import { Observable } from 'rxjs';
import { PokemonListEntityService } from './../../services/pokemon-list-entity.service';
import { Component, OnInit } from '@angular/core';
import { PokemonItem } from '../../models/pokemon';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pokemon-home-page',
  templateUrl: './pokemon-home-page.component.html',
  styleUrls: ['./pokemon-home-page.component.css']
})
export class PokemonHomePageComponent implements OnInit {

  pokemonsList$: Observable<PokemonItem[]>;
  favoritePokemonsList$: Observable<PokemonItem[]>;
  isComparing$: Observable<boolean>;
  searchContent$: Observable<string>;

  constructor(private pokemonService: PokemonListEntityService, private store: Store<PokemonState>) { }

  ngOnInit(): void {
    this.loadPokemonData()
  }

  loadPokemonData(): void {
    this.pokemonsList$ = this.pokemonService.entities$
    this.favoritePokemonsList$ = this.store.select(getFavoritePokemonList);
    this.isComparing$ = this.store.select(getIsComparing);
    this.searchContent$ = this.store.select(getSearchContent);
  }

  updateSearchContent(value: string): void {
    this.store.dispatch(updateSearchContent({searchContent: value}));
  }
}
