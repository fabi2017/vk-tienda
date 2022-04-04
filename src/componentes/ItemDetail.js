
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import listaProductos from "../utilidades/listaProductos";


function ItemDetail() {

  const { id} = useParams();
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


  return (
        <div className ="containerItem">          
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
              <ItemCount stock={productos.stock} initial="1" />
          </div>
        </div>
   
  );
}



export default ItemDetail;
