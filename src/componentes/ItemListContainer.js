import ItemList from "./ItemList";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Zoom from 'react-reveal/Zoom';

function ItemListContainer() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <Zoom bottom>
    <div className={`containerProd  ${darkTheme ? "dark-mode" : ""}`}>
      
      <ItemList />
     
      
    </div>
    </Zoom>
  );
}

export default ItemListContainer;
