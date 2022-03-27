
import React from 'react';
import Link from '@mui/material/Link';
import CartWidget from './CartWidget'
import { grey } from '@mui/material/colors';

const color = grey[300];



function NavBar() {
  return (   
      <header className="App-header">
          <div>
              <img className="imgLogo" src = "logo2.png"/>
          </div>

          <ul className="navBar">          
            <Link href="#" underline="hover" sx={{ p: 2 , fontSize: 'h6.fontSize', fontWeight: 'medium',color }} >{'Inicio'}</Link>
            <Link href="#" underline="hover" sx={{ p: 2 , fontSize: 'h6.fontSize', fontWeight: 'medium', color}} >{'Productos'}</Link>
            <Link href="#" underline="hover" sx={{ p: 2 , fontSize: 'h6.fontSize', fontWeight: 'medium', color }} >{'Nosotros'}</Link>
            <Link href="#" underline="hover" sx={{ p: 2 , fontSize: 'h6.fontSize', fontWeight: 'medium',color }}  >{'Contacto'}</Link>
            <Link href="#">
               <CartWidget/>
            </Link>
          </ul>      
      </header>      
    );
}

export default NavBar;
