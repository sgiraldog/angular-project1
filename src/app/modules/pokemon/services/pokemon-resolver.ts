import { PokemonListEntityService } from './pokemon-list-entity.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs';
import { tap, filter, first } from 'rxjs/operators';

@Injectable()
export class PokemonResolver implements Resolve<boolean>{
  constructor(private pokemonsService: PokemonListEntityService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
    return this.pokemonsService.loaded$
      .pipe(
        tap(loaded => {
          if( !loaded ) {
            this.pokemonsService.getAll();
          }
        }),
        filter( loaded => !!loaded),
        first()
      );

  }

}