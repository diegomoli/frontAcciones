import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { User } from "./User";

export const NavbarCotizacion = () => {
  const navigate =useNavigate()
      const { label, value, money } = useSelector((state) => state.simbolo.simbolo);
  const handleBack=() => {
    navigate(-1);
}
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
      <i className="fa-solid fa-arrow-left" style={{color:"white"}} onClick={handleBack}></i>
      
      <span className='navbar-brand'>
          {label}- { value} -{money } 
      </span>
      <User/>
    </div>
  )
}
