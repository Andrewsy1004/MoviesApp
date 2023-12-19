import { Routes, Route, Navigate} from "react-router-dom";
import { LoginPage } from "../auth";
import {MoviesRoute} from '../movies';
import {PrivateRoute} from './PrivateRoute';
import {PublicRouter} from './PublicRouter';

export const AppRouter = () => {
  return (
    <>     
    <Routes>
          
      <Route path="/login" element={
        <PublicRouter>
          <LoginPage />
        </PublicRouter>
      }/>

      <Route path="/*" element={
        <PrivateRoute>  
          <MoviesRoute />
       </PrivateRoute>
      } />
        {/*<Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<MoviesRoute />} />/>*/}
      </Routes>   
    
    </>
  )
}
