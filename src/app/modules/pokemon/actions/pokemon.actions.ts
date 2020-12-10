import { PokemonItem } from '../models/pokemon';
import { createAction, props } from '@ngrx/store';

export const selectFirstPokemon = createAction(
  '[Pokemon List] Select First Pokemon',
  props<{ id: number }>()
);

export const selectSecondPokemon = createAction(
  '[Pokemon List] Select Second Pokemon',
  props<{ id: number }>()
);

export const updateIsComparing = createAction(
  '[Pokemon List] Update isComparing Flag'
);

export const updateSearchContent = createAction(
  '[Pokemon List] Update Search Content',
  props<{ searchContent: string }>()
);