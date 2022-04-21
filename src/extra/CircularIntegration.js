import "../estilos/Carrito.css"
import * as React from 'react';
import { useContext } from "react";
//COMPONENTES
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green, red  } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
//
import CartContext from "../context/CartContext";



export default function CircularIntegration() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const { limpiarCart}= useContext(CartContext);


  const buttonSx = {
    ...(success && {
      bgcolor: green[400],
      '&:hover': {
        bgcolor: green[700],
      
      },
    }),
  }; 

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    
    }
    setTimeout(() => {      
       limpiarCart()
    }, 4000);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
    

      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="outlined"
          color="error"
          disabled={loading}
          onClick={handleButtonClick}
          size="medium"          
        >
         {success ? <p className="btnChange">Compra realizada</p> : <p className="btnChange">Finalizar compra</p>}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[900],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>

      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"          
          color="error"
          sx={buttonSx}
          onClick={handleButtonClick}
          size="medium"
        >
          {success ? <CheckIcon /> : <ShoppingCartCheckoutIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={57}
            sx={{
              color: green[900],
              position: 'absolute',
              top: -5,
              left: -5,
              zIndex: 1,
            }}
          />
        )}
      </Box>
    </Box>
  );
}