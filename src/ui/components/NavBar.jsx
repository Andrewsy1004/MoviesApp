import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth';

export const Navbar = () => {
    const { user,logout } = useContext( AuthContext );
    const navigate = useNavigate();
    
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 ">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Movies
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-link nav-item ${isActive ? 'active' : ''}`} 
                        to="/amazon"
                    >
                        Amazon
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-link nav-item ${isActive ? 'active' : ''}`} 
                        to="/neflix"
                    >
                     Neflix
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive}) => `nav-link nav-item ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info text-primary">
                        { user?.name }
                    </span>
                    
                    <button className="nav-item nav-link btn" onClick={onLogout} >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}