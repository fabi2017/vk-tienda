import "../estilos/NavBar.css"
import React from 'react';
import { Link, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import SwitchTheme from './SwitchTheme';
import CartContext from "../context/CartContext";



function NavBar() {

  const { cartProductos}= useContext(CartContext);

  const { darkTheme} = useContext(ThemeContext)

  console.log("estado del tema ", darkTheme )

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate()     

  const pageHome = () =>{navigate(`/`)}

  const pageNosotros = () =>{navigate(`/nosotros`)}

  const pageContacto = () =>{navigate(`/contacto`)}

  const pageCart = () =>{navigate(`/cart`)}


  return (   
      <header className={`App-header  ${darkTheme ? 'dark-mode' : '' }`}>
          <div>
          <Link to= {'/'}><img className="imgLogo" src = "../logo2.png"/></Link>
          </div>

          <ul className="navBar">   
              <SwitchTheme/>
              <li><Button variant="outlined" color="error" sx={{ mb: 1}} onClick={pageHome} className={`btnNavBar ${darkTheme ? 'dark-mode' : '' }`} >Inicio</Button></li>              
              <Button variant="outlined" color="error" sx={{ mb: 1}}  className={`basic-button ${darkTheme ? 'dark-mode' : '' }`} aria-controls={open ? 'basic-menu' : undefined} 
                        aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Productos</Button>
               <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} 
                     MenuListProps={{'aria-labelledby': 'basic-button',}}>
                    <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/starwars'}>Star Wars</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/marvel'}>Marvel</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/harrypoter'}>Harry Potter</Link></MenuItem>
               </Menu>
              <li><Button variant="outlined" color="error" sx={{ mb: 1}} onClick={pageNosotros} className={`btnNavBar ${darkTheme ? 'dark-mode' : '' }`}>Nosotros</Button></li>
              <li><Button variant="outlined" color="error" sx={{ mb: 1}} onClick={pageContacto} className={`btnNavBar ${darkTheme ? 'dark-mode' : '' }`} >Contacto</Button></li>           
              <li>
              {(cartProductos.length >= 1) &&           
                     (<Button onClick={pageCart}><CartWidget/></Button>) }
              </li>
           </ul>      
      </header>      
    );
}

export default NavBar;
