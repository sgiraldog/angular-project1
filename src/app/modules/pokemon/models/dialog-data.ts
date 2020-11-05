import { PokemonItem } from './pokemon';

export interface DialogData {
  firstPokemon: number;
  secondPokemon?: number; 
  favoritePokemonsList?: PokemonItem[];
  pokemonsList: PokemonItem[];
}