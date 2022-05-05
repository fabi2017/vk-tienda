
import "../estilos/Carrito.css"
import { useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
//COMPONENTES
import CircularIntegration from "../extra/CircularIntegration"
import Button from '@mui/material/Button';
import FormDialog from "../extra/Modal"
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CartItem from "../componentes/CartItem";
//
import { addDoc, collection } from 'firebase/firestore';
import db from '../firebase'
import CartContext from "../context/CartContext";
import ThemeContext from '../context/ThemeContext';


function Carrito() {
  const { cartProductos, precioTotal, limpiarCart,totalPrice}= useContext(CartContext);
  const navigate = useNavigate()   
  const [ordenGenerada, setOrdenGenerada] = useState()
  const [openModal, setOpenModal] = useState(false)
  const { darkTheme} = useContext(ThemeContext)

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mail: "",
  });

  const [orden, setOrden] = useState({
    buyer: formData,
    items: cartProductos.map((cartProduct) => {
      return {
        id: cartProduct.id,
        nombre: cartProduct.titulo,
        precio: cartProduct.precio,
        cantidad: cartProduct.quanty,
      };
    }),
    total: totalPrice,
  });


  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let prevOrden = { ...orden, buyer: formData };
    setOrden({ ...orden, buyer: formData });
    pushOrden(prevOrden);
  };

  const pushOrden = async (prevOrden) => {
    const ordenFirebase = collection(db, "ordenesCompra");
    const ordenDoc = await addDoc(ordenFirebase, prevOrden);
   // console.log("orden generada: ", ordenDoc.id);
    setOrdenGenerada(ordenDoc.id);
  };

 // console.log("orden ", orden);

  const pageHome = () => {
    navigate(`/`);
  };


 return (
   <div className={`containerCart ${darkTheme ? 'dark-mode' : '' }`}>
     {cartProductos.map((item) => {
       return <CartItem dataProd={item} key={item.id} />;
     })}

    {cartProductos.length >= 1 ? (
       <div className={`contCompra ${darkTheme ? 'dark-mode' : '' }`}>
            <p>Total:$ <span>{precioTotal()}</span>{" "}</p>
            <Button sx={{ m: 2, height: 37 }}variant="outlined" color="error"
              onClick={limpiarCart}>Vaciar Carrito</Button>
            <Button  sx={{ m: 2, height: 37 }} variant="outlined" color="error"
              onClick={() => setOpenModal(true)}>Comprar</Button>

            <FormDialog handleClose={() => setOpenModal(false)} open={openModal}>
                {ordenGenerada ?
                (<div className="ordenCompra">
                    <p className="ordenTitle">Orden generada: {ordenGenerada}</p>
                    <p>Su codigo de compra es:<span>{ordenGenerada.slice(-5)}</span></p>
                    <CircularIntegration />
                  </div>
                )            
                :            
                ( <>
                    <DialogTitle>Orden de Compra</DialogTitle>
                    <form onSubmit={handleSubmit}>
                      <TextField autoFocus={true} margin="dense"
                        name="nombre" label="Nombre"type="nombre"
                        fullWidth variant="outlined" required
                        onChange={handleChange} value={formData.nombre}/>
                      <TextField margin="dense"
                        name="telefono" label="Telefono" type="telefono"
                        fullWidth variant="outlined" required
                        onChange={handleChange} value={formData.telefono}/>
                      <TextField margin="dense"
                        name="mail" label="Email" type="email"
                        fullWidth variant="outlined" required
                        onChange={handleChange} value={formData.mail}/>
                      <DialogActions>
                        <Button sx={{ m: 2, p: 1, height: 37 }}variant="outlined"color="error" type="submit">Enviar</Button>
                      </DialogActions>
                    </form>
                  </>)
                }
            </FormDialog>
        </div>
     ) : (
       <div className={`contVacio ${darkTheme ? 'dark-mode' : '' }`}>
         <h3>No hay productos en el carrito</h3>
         <Button sx={{ m: 2, p: 1 }}variant="outlined" size="small"color="error"
           onClick={pageHome}>Volver a inicio</Button>
       </div>
     )}
   </div>
 );

}

export default Carrito;
