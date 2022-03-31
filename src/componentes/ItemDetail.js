
import ItemCount from "./ItemCount";

function ItemDetail({ datProd2 }) {
    const { titulo, tamaño, precio, stock, imagen } = datProd2;
  
    return (
      <div className="itemProd">
        <div className="imagenProd">
          <img src={`./${imagen}`} alt="" />
        </div>
        <h2>{titulo} </h2>
        <p>Tamaño: {tamaño} </p>
        <p>Precio:$ {precio} </p>
        <ItemCount stock={stock} initial="1" />
      </div>
    );
  }


export default ItemDetail;
