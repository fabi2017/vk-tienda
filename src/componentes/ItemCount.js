import React, { useState } from "react";
import Button from '@mui/material/Button';
import DoNotDisturbOnTwoToneIcon from "@mui/icons-material/DoNotDisturbOnTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

function ItemCount({ stock, initial, onAdd }) {
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

  onAdd = () => {
    alert(`Usted agrego ${contador} unidades al carrito`);
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
     <Button variant="outlined" size="small" color="error" onClick={onAdd}>Agregar al carrito</Button> 
    </>
  );
}

export default ItemCount;
