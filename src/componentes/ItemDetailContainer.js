
import { useEffect, useState } from "react";
import listaProductos from "../utilidades/listaProductos";
import CircularProgress from "@mui/material/CircularProgress";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

  const { id} = useParams();
  const [productos, setProductos] = useState(null);

   function getById(id, myArray) {
    return myArray.find((itm) => itm.id === id);
  }

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listaProductos);
    }, 1500);
  });

  useEffect(() => {
    getProductById(Number(id), setProductos);
  }, [id]);

  async function getProductById(id, setState) {
    try {
      const response = await getItems;
      setState(getById(id, response));
    } catch (error) {
      console.log(error);
    }
  } 

  return (
    <div className ="containerItem">     
      {productos ? (
        <ItemDetail key={productos.id} />
      ) : (
        <CircularProgress color="success" />
      )}      
    </div>
  );
}
export default ItemDetailContainer;
