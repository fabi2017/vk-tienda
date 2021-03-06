import "../estilos/NavBar.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
//COMPONENTES
import Button from "@mui/material/Button";
import CartWidget from "./CartWidget";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SwitchTheme from "./SwitchTheme";
//
import ThemeContext from "../context/ThemeContext";
import CartContext from "../context/CartContext";
//
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  const { cartProductos } = useContext(CartContext);
  const { darkTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const pageHome = () => {
    navigate(`/`);
  };
  const pageNosotros = () => {
    navigate(`/nosotros`);
  };
  const pageContacto = () => {
    navigate(`/contacto`);
  };
  const pageCart = () => {
    navigate(`/cart`);
  };

  return (
    <header className={`App-header  ${darkTheme ? "dark-mode" : ""}`}>
      <Navbar className={`navBar  ${darkTheme ? "dark-mode" : ""}`} expand="lg">
        <Container>
          <Link to="/" className="contLogo">
            <img alt="" src="/logo2.png" className="logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav  className="me-auto">
              <Button variant="outlined" color="error" sx={{ mt: 1, mr: 5}}
                onClick={pageHome} className="btnNav" >Inicio</Button>             
                <Button variant="outlined" color="error" sx={{ mt: 1, mr: 5}}  aria-controls={open ? 'basic-menu' : undefined} 
                aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Productos</Button>
                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} 
                      MenuListProps={{'aria-labelledby': 'basic-button',}}>
                      <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/starwars'}>Star Wars</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/marvel'}>Marvel</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link className="linkMenu" to= {'/categoria/harrypoter'}>Harry Potter</Link></MenuItem>
                </Menu>
                <Button variant="outlined" color="error" sx={{ mt: 1, mr: 5}}
                onClick={pageNosotros} className={`btnNavBar ${darkTheme ? 'dark-mode' : '' }`}>Nosotros</Button>
                <Button variant="outlined" color="error" sx={{ mt: 1, mr: 5}} 
                onClick={pageContacto} className={`btnNavBar ${darkTheme ? 'dark-mode' : '' }`} >Contacto</Button>        
                <li>
                {(cartProductos.length >= 1) && (<Button onClick={pageCart}><CartWidget/></Button>) }
                </li>             
            </Nav>
          </Navbar.Collapse>
        </Container>
        <SwitchTheme />
      </Navbar>
    </header>
  );
}

export default NavBar;
