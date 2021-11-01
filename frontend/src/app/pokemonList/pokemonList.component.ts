import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
    selector: 'pokemon-component',
    templateUrl: './pokemonList.component.html',
    styleUrls: ['./pokemonList.component.css'],
    host: {'class': 'pokemon-component'}
})

export class PokemonListComponent {
  constructor(private http: HttpClient) {
    this.loadPokemon(0);
  }

  pokemon: any[] = [];
  page: number = 0;
  isFirstPage: boolean = true;

  loadPokemon(page: number): void {

    this.page = page;

    if (page == 0) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }
    this.http.get(`http://localhost:3000/pokemon?page=${page}`)
    .subscribe((pokemon: any) => {
      this.pokemon = pokemon.results;
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}