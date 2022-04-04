import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Items from "./Items";
import listaProductos from "../utilidades/listaProductos";
import {useParams} from "react-router-dom";

function ItemList() {
  const {categoria} = useParams()
  const [productos, setProductos] = useState([]);

   const getProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listaProductos);
      }, 1500);
    });
  }; 

   useEffect( () => {
    setProductos([])
    getProductos().then( (datos) => {
        categoria ? productoByCategoria(categoria, listaProductos) : setProductos(datos)
    })
    }, [categoria])

  
  const productoByCategoria = (categoria, listaProductos) => {
    return listaProductos.map((item) => {
      if (item.categoria === ( categoria)) {
        return setProductos(productos => [...productos, item]);
      }
    });
  };
 

  return productos.length ? (
    productos.map((producto) => {
      return <Items datProd={producto} key={producto.id} />;
    })
  ) : (
    <CircularProgress color="inherit" />
  );
}

export default ItemList;
