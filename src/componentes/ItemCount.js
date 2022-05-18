import "../estilos/ItemCount.css"
import React, { useState } from "react";
import Button from '@mui/material/Button';
import DoNotDisturbOnTwoToneIcon from "@mui/icons-material/DoNotDisturbOnTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";


function ItemCount({ stock, initial,action,btnAdd}) {
  const [contador, setContador] = useState(1);

  const addStock = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
   const rmvStock = () => {
    if (contador > initial) {
      setContador(contador - 1);     
    }
  };
  return (
    <>
      <div className="item-detail">
          <button className="btnProd" onClick={rmvStock} disabled = { contador <= initial ? true:null} >
            <DoNotDisturbOnTwoToneIcon sx={{ fontSize: 30 }} />
          </button>
          <p>{contador}</p>
          <button className="btnProd" onClick={addStock} disabled = { contador >= stock ? true:null} >
            <AddCircleTwoToneIcon sx={{ fontSize: 30 }}/>
          </button>
      </div>  
      <div className="contAdd"> 
       <Button  className="btnStyle2" sx={{ m: 2}} variant="outlined" size="small" color="error" disabled={btnAdd} onClick={(e) => action(e, contador)}>Agregar al carrito</Button>     
     </div>
    </>
  );
}

export default ItemCount;
