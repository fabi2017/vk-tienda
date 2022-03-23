
import Items from "./Items"


function ItemListContainer ({children}){
    return(
        <div className ="containerItem">
            <h2>{children}</h2>
        <Items titulo = "Llavero" tamaño = "10 cm." precio = {600} />
        <Items titulo = "Taza" tamaño = "25 cm." precio = {900}/>
        </div>
    )
    
}

export default ItemListContainer