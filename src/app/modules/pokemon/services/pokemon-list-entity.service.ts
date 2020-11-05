import { PokemonItem } from '../models/pokemon';
import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable()
export class PokemonListEntityService extends EntityCollectionServiceBase<PokemonItem>{
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory){
    super('PokemonItem', serviceElementsFactory);
  }
}