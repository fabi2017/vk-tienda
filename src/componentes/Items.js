
function Items ({titulo,talle,precio}){
    return(
        <div className="cardProd">
            <h2>{titulo} </h2>
            <p>Talle: {talle} </p>
            <p>Precio: {precio} </p>
            <button>Comprar</button>
        </div>
    );
}

export default Items;


