import { PokemonItem } from './../models/pokemon';
import { AppState } from './../../../reducers/index';
import { PokemonState } from './../reducers/pokemon.reducer';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';


export const selectCurrentState = createFeatureSelector<PokemonState>('pokemonsState');

export const getFavoritePokemonList = createSelector(
  selectCurrentState,
  (state) => state.favoritePokemonList
);

export const getIsComparing = createSelector(
  selectCurrentState,
  (state) => state.isComparing
);

export const getSearchContent = createSelector(
  selectCurrentState,
  (state) => state.searchContent
);

export const selectEntityCache = createFeatureSelector<AppState>('entityCache');

export const pokemonAdapter = createEntityAdapter<PokemonItem>();

export const { selectAll: selectAllPokemonsList } = pokemonAdapter.getSelectors();

export const selectPokemonCollection = createSelector(
  selectEntityCache,
  (state) => state['PokemonItem']
);

export const selectPokemonEntities = createSelector(
  selectPokemonCollection,
  selectAllPokemonsList
);

export const selectPokemonById = createSelector(
  selectPokemonEntities,
  (pokemonsList: PokemonItem[], props: { id: number }) => pokemonsList.find( pokemon => pokemon.id === props.id)
);