import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UseForm } from '../../hook/UseForm';
import { AuthContext } from '../context';
import { useContext } from 'react';

export const LoginPage = () => {
  const navigate = useNavigate();
  
  const { login } = useContext(AuthContext);


  const { formState, onInputChange, onResetForm } = UseForm({
    nombre: '',
    email: '',
  });

  const { nombre, email } = formState;

  const onSubmit = (event) => {
    event.preventDefault();

    navigate('/', {
      replace: true,
    });
  };
  
  const onLogin = () => {
    if (nombre.trim() === '' || email.trim() === '') return;
    
    const lastPath = localStorage.getItem('lastPath') || '/';
    login(nombre);

   navigate(lastPath, {
     replace: true
   });
 }

  return (
    <div className="container mt-5 animate__animated animate__backInDown">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary rounded-pill w-100" onClick={onLogin}>
                  Send
                </button>
                <br />
                <button type="button" className="btn btn-secondary rounded-pill w-100 mt-3" onClick={onResetForm}>
                  Restart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
