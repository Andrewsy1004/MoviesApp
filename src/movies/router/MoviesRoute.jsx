import { Routes, Route, Navigate} from "react-router-dom";
import {Navbar} from "../../ui";
import {AmazonPage,NeflixPage,MoviePage,SearchPage} from "../pages";

export const MoviesRoute = () => {
  return (
    <>
     <Navbar/>

      <div className="container">
         <Routes>
            <Route path="amazon" element={<AmazonPage/>}/>
            <Route path="neflix" element={<NeflixPage/>}/>
            <Route path="search" element={<SearchPage/>}/>

            <Route path="movie/:name" element={<MoviePage/>}/>

            <Route path="/" element={<Navigate to="/amazon" replace/>}/>

         </Routes>
      </div> 

    
    </>
  )
}
