import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
 
@Injectable()
export class PokemonService {
  constructor(private httpService: HttpService) {}


  findAllPokemon(page: number): Observable<any>{
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${2*(page-1)}0`)
      .pipe(map(response => response.data));
  }

  findSinglePokemon(id: string): Observable<any>{
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(map(response => response.data))
  }
}
