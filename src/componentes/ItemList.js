import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//COMPONENTES
import CircularProgress from "@mui/material/CircularProgress";
import Items from "./Items";
//
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function ItemList() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    const itemCollec = collection(db, "dbProductos");
    const productosSnap = await getDocs(itemCollec);
    const prodLista = productosSnap.docs.map((doc) => {
      let producto = doc.data();
      producto.id = doc.id;     
      return producto;
    });
    return prodLista;
  };

  useEffect(() => {
    setProductos([]);
    getProductos().then((productos) => {     
      categoria  ? productoByCategoria(categoria, productos)
        : setProductos(productos);
    });
  }, [categoria]);

  const productoByCategoria = (categoria, array) => {
    return array.map((producto) => {
      if (producto.categoria === categoria) {
        console.log("map de: ", productos);
        return setProductos((productos) => [...productos, producto]);
      }
    });
  };

  return productos.length ? (
    productos.map((producto) => {
      return <Items datProd={producto} key={producto.id} />;
    })
  ) : (
    <CircularProgress color="secondary" />
  );
}

export default ItemList;
