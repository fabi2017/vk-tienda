

import ItemCount from "./ItemCount"

function Items ({titulo,tamaño,precio}){  
    return(
        
        <div className="cardProd">
            <h2>{titulo} </h2>
            <p>Tamaño: {tamaño} </p>
            <p>Precio: {precio} </p>            
           <ItemCount stock="10" initial="1"/> 
        </div>
    );
}

export default Items;


