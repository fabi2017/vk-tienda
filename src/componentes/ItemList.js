
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Items from "./Items";
import listaProductos from "./listaProductos";

function ItemList() {
  
    const [productos, setProductos] = useState([]) 

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(listaProductos)
            }, 2000)
        })
    }

    useEffect(() => {
        getProducts().then((datos) => {
            setProductos(datos)           
        })
    }, []) 

     return(          
        productos.length ? (
            productos.map( ( producto) => {                 
                return(
                    <Items datProd = {producto} key={producto.id}/>                               
                )
            })
        ) : <CircularProgress color="inherit" />
    ) 
}

export default ItemList;