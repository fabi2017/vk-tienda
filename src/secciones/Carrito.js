
import "../estilos/Carrito.css"
import CartContext from "../context/CartContext";
import { useContext } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import CircularIntegration from "../extra/CircularIntegration"



function Carrito() {
  const { cartProductos, precioTotal, limpiarCart, eliminarProd}= useContext(CartContext);
  const navigate = useNavigate()   

  const pageHome = () =>{
    navigate(`/`)
}


 return (  
  
    <div className="containerCart">
        
      {(cartProductos.map(item => {     
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
                    <button onClick={()=> eliminarProd(id)} ><DeleteForeverIcon /></button>                  
                </div>
                )})
              )    
        }

      {(cartProductos.length >= 1) ?            
            (
            <div className="contCompra">
                <p>Total:$ <span>{precioTotal()}</span> </p>  
                <Button sx={{ m: 2 ,  p: 1 , height: 37 }} variant="outlined" color="error" onClick={limpiarCart}>Vaciar Carrito</Button>
                <CircularIntegration/>
             </div>)
              : ( <div className="contVacio" >
                        <h3>No hay productos en el carrito</h3>
                        <Button sx={{ m: 2 ,  p: 1 }} variant="outlined" size="small" color="error"onClick={pageHome}>Volver a inicio</Button>
                 </div>
                )
       }     
    </div>

  );

}

export default Carrito;
