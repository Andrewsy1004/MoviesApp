import {movies} from '../data/movies.js';

export const getHeroByPublisher = (publisher) => {
    const validPublishers = ['neflix', 'amazon'];

    if(!validPublishers.includes(publisher)){
        throw new Error(`Company "${publisher}" no es correcto`);
    }

    return movies.filter(hero => hero.publisher === publisher);
     
}