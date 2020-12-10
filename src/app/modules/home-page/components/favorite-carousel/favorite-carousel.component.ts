import { PokemonItem } from './../../../pokemon/models/pokemon';
import { Component, OnInit, Input } from '@angular/core';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-favorite-carousel',
  templateUrl: './favorite-carousel.component.html',
  styleUrls: ['./favorite-carousel.component.css']
})
export class FavoriteCarouselComponent {
  @Input() favoritesList: PokemonItem[]; 

  constructor() { }

}
