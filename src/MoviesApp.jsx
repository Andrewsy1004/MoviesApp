import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth';

export const MoviesApp = () => {
  return (
    <>
       <AuthProvider>
         <AppRouter />
       </AuthProvider>    
    </>
  )
}
