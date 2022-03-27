import ItemCount from "./ItemCount";

function Items({ datProd }) {
  const { titulo, tamaño, precio, stock, imagen } = datProd;

  return (
    <div className="cardProd">
      <div className="imagenProd">
        <img src={`./${imagen}`} alt="" />
      </div>
      <h2>{titulo} </h2>
      <p>Tamaño: {tamaño} </p>
      <p>Precio: {precio} </p>
      <ItemCount stock={stock} initial="1" />
    </div>
  );
}

export default Items;
