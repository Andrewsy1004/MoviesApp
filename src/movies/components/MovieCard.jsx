import {Link} from 'react-router-dom';

export const MovieCard = ({name,author,year,id,description,publisher}) => {
  return (
    <>
     <div className="col animate__animated animate__fadeInRight">
        <div className="card">
           <div className="row no-gutters">
              
              <div className="col-4 w-100 ">                 
               <img  src= {(`../src/images/${id}.png`)} className="card-img" alt={name} />
              </div>
              
              <div className="col-8">
                 <div className="card-body">
                   <h5 className="card-title">{name}</h5>
                   <p className="card-text">{author}</p>
                    
                   <Link to={`/movie/${name}`}>
                     more information...
                   </Link>
                   
                 </div>
              </div>
           </div>
        </div>
     </div>   
    </>
  )
}
