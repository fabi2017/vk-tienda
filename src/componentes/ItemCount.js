import React, { useState } from "react";

import DoNotDisturbOnTwoToneIcon from "@mui/icons-material/DoNotDisturbOnTwoTone";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";

function ItemCount({ stock, initial, onAdd }) {
  const [contador, setContador] = useState(1);

  const addStock = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  onAdd = () => {
    alert(`Usted agrego ${contador} unidades al carrito`);
  };

  const rmvStock = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="item-detail">
        <button className="btn" onClick={rmvStock}>
          <DoNotDisturbOnTwoToneIcon />
        </button>
        <p>{contador}</p>
        <button className="btn" onClick={addStock}>
          <AddCircleTwoToneIcon />
        </button>
      </div>
      <button onClick={onAdd}>Agregar al carrito</button>
    </>
  );
}

export default ItemCount;
