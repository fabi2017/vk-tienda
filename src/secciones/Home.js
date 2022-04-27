import ItemListContainer from "../componentes/ItemListContainer"
import ImageSlider from "../extra/ImageSlider"
import { SliderData } from '../extra/SliderData';

function Home() {
    return(
        <div >
        <ImageSlider slides={SliderData} />
        <h1 className="tituloList">Productos Destacados</h1> 
       <ItemListContainer/> 
      </div>
    )
}


export default Home