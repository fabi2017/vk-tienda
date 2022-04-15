import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";

function ItemDetailContainer() {
  const { id } = useParams();
  const [productos, setProductos] = useState(null);

  const getProduct = async () => {
    const docRef = doc(db, "dbProductos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let product = docSnap.data();
      product.id = docSnap.id;
      setProductos(product);
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="containerItem">
      {productos ? (
        <ItemDetail data={productos} key={productos.id} />
      ) : (
        <CircularProgress color="secondary" />
      )}
    </div>
  );
}
export default ItemDetailContainer;
