import {getHeroByPublisher} from "../helpers";
import { useMemo } from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({publisher}) => {
  const movies = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <>
     
     <div className="row row-cols-1 row-cols-md-3 g-4  ">
        {
          movies.map(movie => (
              <MovieCard key={movie.id} {...movie} />
          ))
        }
      </div>
    
    
    </>
  )
}
