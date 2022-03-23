

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { lightBlue } from '@mui/material/colors';
const color = lightBlue[100];

function CartWidget (){
    return(
       <div className= "icon-carrito">
       <ShoppingCartIcon fontSize="large"  sx={{color,  fontSize: 40}}/>
       </div>
    )    
}
export default CartWidget