import { chartOptions, firstChartStyle } from './../../../../utils/chart.utils';
import { PokemonItem } from './../../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-chart',
  templateUrl: './pokemon-chart.component.html',
  styleUrls: ['./pokemon-chart.component.css']
})
export class PokemonChartComponent {

  @Input('firstPokemon')
  set firstPokemon(firstPokemon: PokemonItem){
    this.addPokemonToDataSet(firstPokemon);
  }
  
  @Input('secondPokemon')
  set secondPokemon(secondPokemon: PokemonItem){
    this.addSecondPokemonToDataSet(secondPokemon);
  }

 
  chartType: ChartType = 'bar';
  chartOptions: ChartOptions = chartOptions;
  chartData: ChartDataSets[];
  chartLabels: Label[];

  constructor() { }

  addPokemonToDataSet(pokemon: PokemonItem): void {
    this.chartLabels = pokemon.stats.map( item => item.stat.name);
    const currenPokemonBase = pokemon.stats.map( stat => stat['base_stat']);
    this.chartData = [{
      data: currenPokemonBase,
      label: pokemon.name,
      ...firstChartStyle
    }];
  }

  addSecondPokemonToDataSet(pokemon: PokemonItem): void {
    const secondPokemonBase = pokemon.stats.map( stat => stat['base_stat']);
    this.chartData.push({
      data: secondPokemonBase,
      label: pokemon.name,
      ...firstChartStyle
    });
  }

}
