import ItemList from "./ItemList"
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function ItemListContainer (){

    const { darkTheme} = useContext(ThemeContext)


    return(        
        <div className="contLista">
            <div className ={`containerProd  ${darkTheme ? 'dark-mode' : '' }`}>
                 <ItemList/>        
            </div>
        </div>
        
    )    
}

export default ItemListContainer