import { User } from "./User"


export const Navbar = () => {

  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
      <span className='navbar-brand'>
        <i className='fas fa-action-alt'></i>
        Mis acciones
      </span>
    
     <User/>
    </div>
  )
}
