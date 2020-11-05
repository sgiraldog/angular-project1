import { createReducer, on } from '@ngrx/store';
import { PokemonItem } from '../models/pokemon';
import { FavoriteActions, PokemonActions } from '../actions/action-types';


export interface PokemonState {
  favoritePokemonList: PokemonItem[];
  isComparing: boolean;
  firstPokemon: number;
  secondPokemon: number;
  searchContent: string;
}

export const initialState: PokemonState = {
  favoritePokemonList: [ { id: 1, name: 'Bulbasaur', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/1.png'},
                         { id: 4, name: 'Charmander', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/4.png'},
                         { id: 7, name: 'Squirtle', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/146c91287ad01f6e15315bbd733fd7442c91fe6d/sprites/pokemon/7.png'} ],
  isComparing: false,
  firstPokemon: undefined,
  secondPokemon: undefined,
  searchContent: ''
}

export const favoritePokemonsReducer = createReducer(
  initialState,
  on(FavoriteActions.addFavorite, (state, action) => {
    return {
      ...state,
      favoritePokemonList: [ ...state.favoritePokemonList, action.pokemon ]
    }
  }),
  on(FavoriteActions.removeFavorite, (state, action) => {
    return {
      ...state,
      favoritePokemonList: [ ...state.favoritePokemonList.filter(pokemon => pokemon.id != action.pokemonId ) ]
    }
  }),
  on(PokemonActions.updateIsComparing, (state, action) => {
    return {
      ...state,
      isComparing: !state.isComparing 
    }
  }),
  on(PokemonActions.selectFirstPokemon, (state, action) => {
    return {
      ...state,
      firstPokemon: action.id 
    }
  }),
  on(PokemonActions.selectSecondPokemon, (state, action) => {
    return {
      ...state,
      secondPokemon: action.id
    }
  }),
  on(PokemonActions.updateSearchContent, (state, action) => {
    return {
      ...state,
      searchContent: action.searchContent
    }
  })
);