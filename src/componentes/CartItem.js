
import "../estilos/CartItem.css"
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CartContext from "../context/CartContext";
import ThemeContext from '../context/ThemeContext';

function CartItem({ dataProd }) {
  const {titulo, precio, imagen, id, quanty} = dataProd; 
  let subtotal = precio * quanty 
  const { eliminarProd}= useContext(CartContext); 
  const { darkTheme} = useContext(ThemeContext)
  
  return (
    <div className={`itemCart ${darkTheme ? 'dark-mode' : '' }`}>
        <div className="imagenItem2">
            <img src={`../${imagen}`} alt="" />
        </div>
        <h3>{titulo} </h3>               
        <span>Precio<p>${precio}</p></span>  
        <p className="contCantidad">Cantidad: {quanty}</p>    
        <span>Subtotal<p>${subtotal}</p></span>                          
        <button className={`btnEliminar ${darkTheme ? 'dark-mode' : '' }`} onClick={()=> eliminarProd(id)} ><DeleteForeverIcon /></button>                  
    </div>
  );
  
} 


export default CartItem;