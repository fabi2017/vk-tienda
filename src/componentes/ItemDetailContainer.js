import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
//COMPONENTES
import CircularProgress from "@mui/material/CircularProgress";
import ItemDetail from "./ItemDetail";
//
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";

function ItemDetailContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState(null);
  const navigate = useNavigate()  
  const { darkTheme} = useContext(ThemeContext) 

  const page404 = () =>{
    navigate(`*`)
}

  const getProduct = async () => {
    const docRef = doc(db, "dbProductos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    //  console.log("Document data:", docSnap.data());
      let product = docSnap.data();
      product.id = docSnap.id;
      setProductos(product);
    } else {
    //  console.log("No such document!");
      page404()
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);


  return (   
    <div className={`containerItem  ${darkTheme ? 'dark-mode' : '' }`}>
      {productos ? (
        <ItemDetail data={productos} key={productos.id} />
      ) : (
        <CircularProgress color="success" />
      )}
    </div>
  );
}
export default ItemDetailContainer;
