import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemonList/pokemonList.component';
import { PokemonDetailsComponent } from './pokemonDetails/pokemonDetails.component';

const routes: Routes = [
  { path: 'pokemon', component: PokemonDetailsComponent },
  { path: '', component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }