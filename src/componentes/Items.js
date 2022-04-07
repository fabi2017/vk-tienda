import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'

function Items({ datProd }) {
  const {titulo, precio, imagen, id} = datProd;

  const navigate = useNavigate()
  
  const verMas = () =>{
    navigate(`/${titulo}/${id}`)
  }

  
  return (
    <div className="cardProd">
      <div className="imagenProd">
        <img src={`../${imagen}`} alt="" />
      </div>
      <h3>{titulo} </h3>
      <div className='infoProd' >     
        <p>Precio:$ {precio} </p>
        <Button variant="outlined" size="small" color="error" onClick={verMas}>Ver mas</Button>        
      </div>
    </div>
  );
  
} 


export default Items;


