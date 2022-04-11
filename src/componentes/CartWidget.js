import "../estilos/CartWidget.css"
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import CartContext from "../context/CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget (){
    const { darkTheme} = useContext(ThemeContext)
    const { cartProductos } = useContext(CartContext);
    return(
       <div className= "icon-carrito">
       <ShoppingCartIcon fontSize="large" className={`svgShoop  ${darkTheme ? 'dark-mode' : '' }`} sx={{fontSize: 40}}/>
       <p>{cartProductos.length}</p>
       </div>
    )    
}
export default CartWidget