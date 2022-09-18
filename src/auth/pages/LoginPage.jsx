import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForms';
import './loginPage.css';

const formField = {
  email: "",
  password:"",
}
export const LoginPage = () => {
   const { startLogin, errorMessage } = useAuthStore();
  const { email, password, onInputChange } = useForm(formField);
  
  const onSubmit = (event) => {
    event.preventDefault();
    startLogin({ email, password });
  }
  
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }
  }, [errorMessage]);

  return (
    <div className="container login-container">
      <div className="row justify-content-center">
        <div className="col-md-8 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name='email'
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name='password'
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btnSubmit"
                value="Login"
              />
            </div>
          </form>
        </div>

       
      </div>
    </div>
  )
}