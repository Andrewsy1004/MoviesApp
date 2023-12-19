import { useParams, Navigate, useNavigate} from "react-router-dom";
import { useMemo } from "react";
import {getMovieByName} from '../helpers';

export const MoviePage = () => {
  const {name} = useParams();  
  const navigate = useNavigate();

  const movie =  useMemo(() => getMovieByName(name), [name]);
  
  const OnNavegate = () => {
    navigate(-1);
  }

  if(!movie){
    return (
      <Navigate to="/marvel" />
    )
 }
  
  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
           <img 
            src= {(`../src/images/${movie.id}.png`)} 
            alt={movie.name} 
            className="img-thumbnail animate__animated animate__fadeInLeft" />
        </div>
        
        <div className="col-8 animate__animated animate__fadeInRight">
          <h3>{movie.name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><b>Author: </b>{movie.author}</li>
            <li className="list-group-item"><b>Year: </b>{movie.year}</li>
            <li className="list-group-item"><b>Description: </b>{movie.description}</li>
          </ul>

          <button 
           className="btn btn-outline-primary rounded-pill w-100 mt-2"
           onClick={OnNavegate}>
           Come back
          </button>  
        
        </div>

      </div>
    
    </>
  )
}
