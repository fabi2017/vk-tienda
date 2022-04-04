import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function Items({ datProd }) {
  const {titulo, precio, imagen, id} = datProd;

  
  return (
    <div className="cardProd">
      <div className="imagenProd">
        <img src={`../${imagen}`} alt="" />
      </div>
      <h3>{titulo} </h3>
      <div className='infoProd' >     
        <p>Precio:$ {precio} </p>
        <Link to={`/${titulo}/${id}`}><Button variant="outlined" size="small" color="error" >Ver mas</Button></Link>
      </div>
    </div>
  );
  
} 


export default Items;


