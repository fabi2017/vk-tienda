
import "../estilos/CartItem.css"
import { useContext } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CartContext from "../context/CartContext";

function CartItem({ dataProd }) {
  const {titulo, precio, imagen, id, quanty} = dataProd; 
  let subtotal = precio * quanty 
  const { eliminarProd}= useContext(CartContext); 
  
  return (
    <div className="itemCart">
        <div className="imagenItem2">
            <img src={`../${imagen}`} alt="" />
        </div>
        <h3>{titulo} </h3>               
        <span>Precio<p>${precio}</p></span>  
        <p className="contCantidad">Cantidad: {quanty}</p>    
        <span>Subtotal<p>${subtotal}</p></span>                          
        <button className="btnEliminar" onClick={()=> eliminarProd(id)} ><DeleteForeverIcon /></button>                  
    </div>
  );
  
} 


export default CartItem;