
import "../estilos/Carrito.css"
import CartContext from "../context/CartContext";
import { useContext } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



function Carrito() {
  const { cartProductos, calculeTotalPrice} = useContext(CartContext);


 return (   
    <div className="containerCart" >
      {cartProductos.map((item) => {     
       const { precio, imagen, titulo, id, quanty } = item
       let subtotal = precio * quanty
        return (
             <div className="itemCart" key={id} >
                <div className="imagenItem2">
                     <img src={`../${imagen}`} alt="" />
                </div>
                <h3>{titulo} </h3>               
                <span>Precio<p>${precio}</p></span>  
                <p className="contCantidad">Cantidad: {quanty}</p>    
                <span>Subtotal<p>${subtotal}</p></span>                          
                <button><DeleteForeverIcon /></button>                  
            </div>  
        );
      })}      
      {/*  <p>Total Precio:{calculeTotalPrice()}</p>     */}
    </div>
  );



}

export default Carrito;
