

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { grey } from '@mui/material/colors';
const color = grey[300];

function CartWidget (){
    return(
       <div className= "icon-carrito">
       <ShoppingCartIcon fontSize="large"  sx={{color,  fontSize: 40}}/>
       </div>
    )    
}
export default CartWidget