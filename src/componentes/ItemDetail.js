import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import listaProductos from "../utilidades/listaProductos";
import { useNavigate } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

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
     
      const [btnAddCart, setAddCart] = useState(false);
      const [btnComprar, setComprar] = useState(true);
    

      const onAdd = (e, contador) => {        
        alert(`Usted agrego ${contador} unidades al carrito`);     
        setAddCart(true)
        setComprar(false)     
      };

       
      const navigate = useNavigate()        
      const pageCart = () =>{
          navigate(`/cart`)
       }


       

  return (
    <div className="itemProd">
      <div className="imagenItem">
        <img src={`../${productos.imagen}`} alt="" />
      </div>
      <h2>{productos.titulo} </h2>
      <div className="infoItem">
        <p>Precio:$ {productos.precio} </p>
        <p>Medidas: {productos.tamaño} </p>
        <p>{productos.descripcion}</p>
      </div>
      <ItemCount stock={productos.stock} initial="1" action={onAdd} btn={btnAddCart}/>
      <Button sx={{ m: 2 ,  p: 1 }} variant="outlined" size="small" color="error" disabled={btnComprar} onClick={pageCart} >Comprar</Button>
    </div>
  );
}

export default ItemDetail;
