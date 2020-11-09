import { environment } from './../../environments/environment';
import { PokemonItem } from './../modules/pokemon/models/pokemon';
import { Update } from '@ngrx/entity';

export default class PokemonUtils {
  
  static informationUnits = [ '', 'm', 'kg' ];
  static informationClass = 'information-container__item';
  static informationClasses = [ PokemonUtils.informationClass, PokemonUtils.informationClass + ' bordered', PokemonUtils.informationClass ];

  static buildPokemon(index: number, data: string, offset: string): PokemonItem {
    return {
      id: index + 1 + parseInt(offset),
      name: data['name'],
      url: data['url'],
      imageUrl: environment.SPRITES_URL + (index + parseInt(offset) + 1) +'.png'
    }
  }
  
  static buildFullPokemon(update: Update<PokemonItem>, res: [Object, Object]): PokemonItem {
    const pokemonRes = res[0];
    const speciesRes = res[1];
  
    const pokemon: PokemonItem = {
      id: update.changes.id,
      name: update.changes.name,
      url: update.changes.url,
      imageUrl: update.changes.imageUrl,
      description: speciesRes['flavor_text_entries'][0].flavor_text,
      information: {
        height: pokemonRes['height'],
        weight: pokemonRes['weight'],
        gender: this.getStringGender(speciesRes['gender_rate'])
      },
      abilities: pokemonRes['abilities'],
      types: pokemonRes['types'],
      stats: pokemonRes['stats']
    };
  
    return pokemon;
  }
  
  static getStringGender(index: number) {
    if ( index >= 0 && index <= 4 ) {
      return 'Male';
    } else if ( index >= 4 && index <= 8 ) {
      return 'Female';
    } else if ( index === -1 ) {
      return 'Genderless';
    } else {
      return 'Unknown'
    }
  }
}
