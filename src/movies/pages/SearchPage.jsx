import { useNavigate, useLocation } from 'react-router-dom';
import querystring from 'query-string';
import {MovieCard} from '../components';
import { UseForm } from '../../hook/UseForm.js';
import {GetMovie} from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { q = '' } = querystring.parse(location.search);
  const movies = GetMovie(q);
   
  const showsearch = q.length === 0;
  const showError = q.length > 0 && movies.length === 0;


  const { formState, onInputChange, onResetForm } = UseForm({
    searchText: "",
  });
  
  const { searchText } = formState;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
    onResetForm();    
  };

  return (
    <>
     <h1>Search Movie</h1>
     <hr />
     
     <div className="row">
        <div className="col-5">
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Search a movie"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1 w-100">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          
          <div className="alert alert-primary" style={{ display: showsearch ? '' : 'none' }}>
            Search a movie
          </div>
          
          <div className="alert alert-danger" style={{ display: showError ? '' : 'none' }}>
            There's no movie with <b>{q}</b>
          </div>

          {
            (<div className="row row-cols-2 row-cols-md-10 g-3 flex-wrap justify-content-center">
               {movies.map((movie) => (
               <MovieCard key={movie.id} {...movie} />
            ))}
            </div>)
          } 
        </div>
      </div>

    </>
  )
}
