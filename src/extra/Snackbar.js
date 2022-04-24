import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);    
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button sx={{ m: 1, p: 1, height: 37 }}variant="outlined"color="error" 
      type="submit" onClick={handleClick}>
        Enviar
      </Button>
      <Snackbar open={open} autoHideDuration={1800} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Mensaje enviado
        </Alert>
      </Snackbar>
    
    </Stack>
  );
}
