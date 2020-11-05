import { updateIsComparing } from './../../actions/pokemon.actions';
import { Observable } from 'rxjs';
import { selectPokemonById } from './../../selectors/pokemon.selectors';
import { PokemonState } from './../../reducers/pokemon.reducer';
import { Store } from '@ngrx/store';
import { PokemonItem } from './../../models/pokemon';
import { DialogData } from './../../models/dialog-data';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']
})
export class PokemonModalComponent implements OnInit {

  firstPokemon$: Observable<PokemonItem>;
  favoritePokemonList: PokemonItem[];
  informationUnits = [ '', 'm', 'kg' ];
  informationClass = 'information-container__item';
  informationClasses = [ this.informationClass, this.informationClass + ' bordered', this.informationClass ];

  constructor(public dialog: MatDialogRef<PokemonModalComponent>, @Inject(MAT_DIALOG_DATA) data: DialogData, private store: Store<PokemonState>) {
    this.firstPokemon$ = this.store.select(selectPokemonById, { id: data.firstPokemon})
    this.favoritePokemonList = data.favoritePokemonsList;
  }

  ngOnInit(): void {
  }

  onCompare(): void{
    this.store.dispatch(updateIsComparing());
    this.dialog.close();
  }

  onCloseModal(): void{
    this.dialog.close();
  }
}
