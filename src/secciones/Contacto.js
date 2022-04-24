import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';
import "../estilos/Contacto.css"
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import "../App.css";
import Snackbars from "../extra/Snackbar"


function Contacto() {
    const { darkTheme} = useContext(ThemeContext)
    const handleSubmit = (e) => {
        e.preventDefault();   
        e.target.reset()
    }

    return(
        <>            
       <h1 className="tituloList">Contactenos</h1>
       <div className={`containerContacto  ${darkTheme ? 'dark-mode' : '' }`} >       
                <form onSubmit={handleSubmit} >
                  <TextField autoFocus={true} margin="dense"
                    name="nombre" label="Nombre"type="nombre"
                    fullWidth variant="standard" color="success" required
                    sx={{ mt: 2 }}
                   />
                  <TextField margin="dense"
                    name="telefono" label="Telefono" type="telefono"
                    fullWidth variant="standard" color="success" required
                    sx={{ mt: 2 }}
                    />
                  <TextField margin="dense"
                    name="mail" label="Email" type="email"
                    fullWidth variant="standard" color="success" required
                    sx={{ mt: 2 }}
                    />
                    <TextField margin="dense"
                    name="consulta" label="Consulta" type="texto"
                    fullWidth multiline  rows={4} variant="outlined" color="success" required
                    sx={{ mt: 2 }}
                    />                   
                  <DialogActions>                    
                        <Snackbars action={handleSubmit} />                    
                  </DialogActions>
                </form>
       </div>
      </>
    )
}
export default Contacto