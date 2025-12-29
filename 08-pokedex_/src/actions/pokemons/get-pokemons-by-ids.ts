import { Pokemon } from '../../domain/entities/pokemon';
import { getPokemonById } from './get-pokemon-by-id';

export const getPokemonsByIds = async (ids: number[]): Promise<Pokemon[]> => {
  try {
    const pokemPromises: Promise<Pokemon>[] = ids.map(id => {
      return getPokemonById(id);
    });

    return Promise.all(pokemPromises);
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting pokemons by ids: ${ids}`);
  }
};
