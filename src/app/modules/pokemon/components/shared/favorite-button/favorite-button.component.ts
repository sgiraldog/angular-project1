import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { environment } from './../../../../../../environments/environment';
import { addFavorite, removeFavorite } from './../../../actions/favorite.actions';
import { PokemonState } from './../../../reducers/pokemon.reducer';
import { Store } from '@ngrx/store';
import { PokemonItem } from './../../../models/pokemon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit {
  @Input() active: boolean;
  @Input() favoritesList: PokemonItem[];
  @Input() pokemon: PokemonItem;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private store: Store<PokemonState>, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.active = this.favoritesList.filter(pokemon => pokemon.id === this.pokemon.id).length > 0;
  }

  onChangeFavoriteStatus(event: MouseEvent): void {
    if ( this.active ) {
      this.store.dispatch(removeFavorite({ pokemonId: this.pokemon.id }));
      this.active = !this.active;
    } else {
      if ( this.favoritesList.length < environment.POKEMON_FAVORITE_LIMIT ) {
        this.store.dispatch(addFavorite({ pokemon: this.pokemon }));
        this.active = !this.active;
      } else {
        this.openSnackBar();
      }
    }
    event.stopPropagation();
  }

  openSnackBar() {
    this._snackBar.open(`You can't have more than ${environment.POKEMON_FAVORITE_LIMIT} favorites`, 'Close', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
