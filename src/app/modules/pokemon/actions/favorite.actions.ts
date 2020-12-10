import { PokemonItem } from '../models/pokemon';
import { createAction, props } from '@ngrx/store';


export const addFavorite = createAction(
  '[Pokemon List] Add New Favorite',
  props<{ pokemon: PokemonItem }>()
);

export const removeFavorite = createAction(
  '[Pokemon List] Remove Favorite',
  props<{ pokemonId: number }>()
);