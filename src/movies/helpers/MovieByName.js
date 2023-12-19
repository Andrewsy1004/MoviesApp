import {movies} from '../data/movies.js';

export const GetMovie = (q = '') => {
    if(q.length === 0) return [];    
    return movies.filter(movie => movie.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));
}