import {movies} from '../data/movies';

export const getMovieByName = (name) => {
    if(name.lenght === 0) return [];
    return movies.find((movie) => movie.name.toLowerCase() === name.toLowerCase());
}