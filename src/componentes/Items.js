
import "../estilos/Items.css"
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Items({ datProd }) {
  const {titulo, precio, imagen, id} = datProd;
  const { darkTheme} = useContext(ThemeContext)
  const navigate = useNavigate()  

  const verMas = () =>{
    navigate(`/${titulo}/${id}`)
  }
  
  return (
    <div className={`cardProd  ${darkTheme ? 'dark-mode' : '' }`} >
      <div className="imagenProd">
        <img src={`../${imagen}`} alt="" />
      </div>      
      <div className={`infoProd  ${darkTheme ? 'dark-mode' : '' }`} >     
        <h5>{titulo} </h5>
        <p>Precio:$ {precio} </p>
        <Button variant="outlined" size="small" color="error" onClick={verMas}>Ver mas</Button>        
      </div>   
    </div>
  );
  
} 


export default Items;


