

import ItemListContainer from "../componentes/ItemListContainer"
import ItemDetailContainer from "../componentes/ItemDetailContainer"

function Home() {
    return(
        <div >
        <h2 className="tituloList">Productos Destacados</h2> 
       <ItemListContainer/>
    {/*    <ItemDetailContainer/>} */}
      </div>
    )
}


export default Home