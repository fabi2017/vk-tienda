import "../estilos/ItemDetails.css"
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

//COMPONENTES
import Button from '@mui/material/Button';
import ItemCount from "./ItemCount";
import CartContext from  '../context/CartContext';
import ThemeContext from '../context/ThemeContext';

function ItemDetail({data}) {
  const { darkTheme} = useContext(ThemeContext) 
  const { cartProductos,addProductos} = useContext(CartContext)  
  const {titulo, precio, imagen,imagen2, descripcion,tamaño,categoria,id} = data; 

  const [btnAddCart, setBtnCart] = useState(false);
  const [btnCarrito, setBtnCarrito] = useState(true);

  const navigate = useNavigate()   

  const onAdd = (e, contador) => {           
       setBtnCart(true) 
       setBtnCarrito(false)            
       addProductos(data,contador) 
     
   }

  const pageCarrito = () =>{
          navigate(`/cart`)
    }
  const pageCategoria = () =>{
        navigate(`/categoria/${categoria}`)
    }
   
  return (
    <div className={`itemProd  ${darkTheme ? 'dark-mode' : '' }`}>
      <div className="imagenItem">
        <img src={`../${imagen2}`} alt="" />
        <img className="top" src={`../${imagen}`} alt="" />
      </div>
      <h4 className="txtTitulo">{titulo} </h4>
      <div className="infoItem">
        <p className="txtPrecio">$ {precio} </p>
        <p className="txtDetail">Medidas: {tamaño} </p>
        <p className="txtDetail">{descripcion}</p> 
      </div>
      <div className="infoItem2">
        <ItemCount stock={data.stock} initial="1" action={onAdd} btnAdd={btnAddCart}/>    
        <Button sx={{ m: 2 ,  p: 1 }} variant="outlined" size="small" color="error" disabled={btnCarrito} onClick={pageCarrito}>Ir al Carrito</Button> 
        <Button sx={{ m: 2 ,  p: 1 }} variant="outlined" size="small" color="error" onClick={pageCategoria}>Volver a productos</Button>      
      </div>      
    </div>
  );
}

export default ItemDetail;
