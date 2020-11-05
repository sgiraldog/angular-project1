import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment.prod';
import { combineLatest, from, Observable } from 'rxjs';
import { PokemonItem } from './../models/pokemon';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { HttpClient } from '@angular/common/http';
import { Update } from '@ngrx/entity';
import PokemonUtils from 'src/app/utils/pokemon.utils';

@Injectable()
export class PokemonListDataService extends DefaultDataService<PokemonItem>{

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('PokemonItem', http, httpUrlGenerator);
    
  }

  getAll(): Observable<PokemonItem[]> {
    const pokemons: PokemonItem[] = [];
    return this.http.get(environment.API_URL + '/pokemon')
      .pipe(
        map(res => {
          res['results'].map((pokemon, index) => pokemons.push(PokemonUtils.buildPokemon(index, pokemon, '0')));
          return pokemons;
        })
      );
  }

  getWithQuery(params: QueryParams): Observable<PokemonItem[]> {
    const pokemons: PokemonItem[] = [];
    return this.http.get(environment.API_URL + '/pokemon' + `?offset=${params.offset}&limit=${params.limit}`)
      .pipe(
        map(res => {
          res['results'].map((pokemon, index) => pokemons.push(PokemonUtils.buildPokemon(index, pokemon, params.offset.toString())));
          return pokemons;
        })
      );
  }

  update(update: Update<PokemonItem>): Observable<PokemonItem>{
    return combineLatest([
      this.http.get(environment.API_URL + '/pokemon/' + update.id), 
      this.http.get(environment.API_URL + '/pokemon-species/' + update.id)])
      .pipe(
        map( res => {
          return PokemonUtils.buildFullPokemon(update, res);
        })
      );
  }
}