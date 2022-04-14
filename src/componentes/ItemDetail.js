
import "../estilos/ItemDetails.css"
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Button from '@mui/material/Button';
import listaProductos from "../utilidades/listaProductos";
import { useNavigate } from "react-router-dom";
import CartContext from  '../context/CartContext';


function ItemDetail() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);
  const { cartProductos,addProductos} = useContext(CartContext)  
  const {titulo, precio, imagen, descripcion,tamaño,categoria} = productos; 

  const [btnAddCart, setBtnCart] = useState(false);
  const [btnCarrito, setBtnCarrito] = useState(true);

  const navigate = useNavigate()        


  useEffect(() => {   
    productoById(id, listaProductos);
  }, [id]);

  const productoById = () => {
    return listaProductos.map((productos) => {
      if (productos.id === Number(id)) {
        return setProductos(productos);
      }
    });
  };       

   const onAdd = (e, contador) => {           
       setBtnCart(true) 
       setBtnCarrito(false)            
       addProductos(productos,contador) 
       console.log("productos agregados: ", cartProductos)    
   }


   const pageCarrito = () =>{
          navigate(`/cart`)
    }
  const pageCategoria = () =>{
        navigate(`/categoria/${categoria}`)
    }
   
  return (
    <div className="itemProd">
      <div className="imagenItem">
        <img src={`../${imagen}`} alt="" />
      </div>
      <h2>{titulo} </h2>
      <div className="infoItem">
        <p>Precio:$ {precio} </p>
        <p>Medidas: {tamaño} </p>
        <p>{descripcion}</p>          
      </div>
      <div>
        <Button sx={{ m: 2 ,  p: 1 }} variant="outlined" size="small" color="error" onClick={pageCategoria}>Volver a productos</Button>
        <ItemCount stock={productos.stock} initial="1" action={onAdd} btnAdd={btnAddCart}/>
        <Button sx={{ m: 2 ,  p: 1 }} variant="outlined" size="small" color="error" disabled={btnCarrito} onClick={pageCarrito}>Ir al Carrito</Button>        
      </div>      
    </div>
  );
}

export default ItemDetail;
