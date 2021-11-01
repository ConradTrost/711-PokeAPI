import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
    selector: 'pokemon-details-component',
    templateUrl: './pokemonDetails.component.html',
    styleUrls: ['./pokemonDetails.component.css'],
    host: {'class': 'pokemonDetails-component'}
})

export class PokemonDetailsComponent {
  constructor(private http: HttpClient) {
    this.loadPokemonDetails();
  }

  pokemon: any;
  panelOpenState = false;
  urlParams: any = new URLSearchParams(window.location.search);
  queryParam: string = this.urlParams.get('pokemon');

  loadPokemonDetails(): void {
    this.http.get(`http://localhost:3000/pokemon/${this.queryParam}`)
    .subscribe((pokemon: any) => {
      this.pokemon = pokemon;
    });
  }
}