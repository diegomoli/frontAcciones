import React from 'react'
import { useAuthStore } from '../../hooks/useAuthStore';

export const User = () => {
    const { startLogout, user } = useAuthStore();

  return (
    <div>
          <span className='navbar-brand'>
                  <i className='fas fa-user-alt'></i>
                  &nbsp;
              { user.name }
          </span>
          <button className='btn btn-outline-danger ml-3' onClick={ startLogout }>
          <i className='fas fa-sign-out-alt'></i>
          &nbsp;
              <span>Salir</span>
          </button>
        </div>
  )
}
