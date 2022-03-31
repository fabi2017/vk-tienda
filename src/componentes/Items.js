

function Items({ datProd }) {
  const {titulo, precio, imagen, descripcion } = datProd;
  
  return (
    <div className="cardProd">
      <div className="imagenProd">
        <img src={`./${imagen}`} alt="" />
      </div>
      <h2>{titulo} </h2>
      <p>Precio:$ {precio} </p>    
      <p>{descripcion}</p>     
    </div>
  );
} 


export default Items;


