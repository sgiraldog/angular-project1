import  PokemonUtils  from 'src/app/utils/pokemon.utils';
import { updateIsComparing } from './../../actions/pokemon.actions';
import { selectPokemonById } from './../../selectors/pokemon.selectors';
import { PokemonState } from './../../reducers/pokemon.reducer';
import { Store } from '@ngrx/store';
import { DialogData } from './../../models/dialog-data';
import { PokemonModalComponent } from './../pokemon-modal/pokemon-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { PokemonItem } from '../../models/pokemon';

@Component({
  selector: 'app-comparison-modal',
  templateUrl: './comparison-modal.component.html',
  styleUrls: ['./comparison-modal.component.css']
})
export class ComparisonModalComponent {

  firstPokemon$: Observable<PokemonItem>;
  secondPokemon$: Observable<PokemonItem>;
  containerTitles = PokemonUtils.containerTitles;
  
  constructor(public dialog: MatDialogRef<PokemonModalComponent>, @Inject(MAT_DIALOG_DATA) data: DialogData, private store: Store<PokemonState>) {
    this.firstPokemon$ = this.store.select(selectPokemonById, { id: data.firstPokemon})
    this.secondPokemon$ = this.store.select(selectPokemonById, { id: data.secondPokemon})
  }

  onCloseModal(): void {
    this.store.dispatch(updateIsComparing());
    this.dialog.close();
  }
}
