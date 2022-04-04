
import React from 'react';
import { Link} from "react-router-dom";
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function NavBar() {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (   
      <header className="App-header">
          <div>
          <Link to= {'/'}><img className="imgLogo" src = "../logo2.png"/></Link>
          </div>

          <ul className="navBar">          
              <li><Button variant="outlined" color="error" sx={{ mb: 1}} ><Link to= {'/'}>Inicio</Link></Button></li>              
              <Button variant="outlined" color="error" sx={{ mb: 1}}  id="basic-button"  aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Productos</Button>
               <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} 
                     MenuListProps={{'aria-labelledby': 'basic-button',}}>
                    <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/starwars'}>Star Wars</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/marvel'}>Marvel</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/harrypoter'}>Harry Potter</Link></MenuItem>
               </Menu>
              <li><Button variant="outlined" color="error"  sx={{ mb: 1}}><Link to= {'/nosotros'}>Nosotros</Link></Button></li>
              <li><Button variant="outlined" color="error"  sx={{ mb: 1}}><Link to= {'/contacto'}>Contacto</Link></Button></li>
              <li><Button><Link to= {'*'}><CartWidget/></Link></Button></li>
           </ul>      
      </header>      
    );
}

export default NavBar;
