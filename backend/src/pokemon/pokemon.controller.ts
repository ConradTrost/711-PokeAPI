import { Controller, Get, Param, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    getPokemon(@Query() query): any {
      return this.pokemonService.findAllPokemon(query.page);
    }

    @Get(':id')
    getSinglePokemon(@Param() params): any {
      return this.pokemonService.findSinglePokemon(params.id)
    }
}
