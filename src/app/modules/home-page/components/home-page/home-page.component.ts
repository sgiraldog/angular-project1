import { getFavoritePokemonList } from './../../../pokemon/selectors/pokemon.selectors';
import { PokemonItem } from './../../../pokemon/models/pokemon';
import { PokemonListEntityService } from './../../../pokemon/services/pokemon-list-entity.service';
import { Observable } from 'rxjs';
import { PokemonState } from './../../../pokemon/reducers/pokemon.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  favoritePokemonsList$: Observable<PokemonItem[]>;

  constructor(private pokemonService: PokemonListEntityService, private store: Store<PokemonState>) { }
  

  ngOnInit(): void {
    this.favoritePokemonsList$ = this.store.select(getFavoritePokemonList);
  }

}
