import { createContext, useState } from "react";

//se crea el contexto
const CartContext = createContext();

//se crea el  componente proveedor para el contexto
const CartProvider = ({ children }) => {
  //se crea estados para el tema
  const [cartProductos, setCartProductos] = useState(JSON.parse(localStorage.getItem("memoProductos")) || [] );
  //const [cartProductos, setCartProductos] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const addProductos = (productos, contador) => {  
    productos.quanty = contador;  

    if (cartProductos.find((el) => el.id === productos.id)) {
      let index = cartProductos.findIndex((el) => el.id === productos.id);
      let producto = cartProductos[index];
      producto.quanty = producto.quanty + contador;   

      const nuevoCarrito = [...cartProductos];
      nuevoCarrito.splice(index, 1, producto);
      setCartProductos([...nuevoCarrito]);
      setTotalPrice(precioTotal())     
      localStorage.setItem("productos", JSON.stringify([...nuevoCarrito]))
    } 
    else {      
      let producto = { ...productos, contador };
      let  subtotal = productos.precio * productos.quanty
      setCartProductos((cartProductos) => [...cartProductos, producto]);
      setTotalPrice(precioTotal() + subtotal )     
      localStorage.setItem("memoProductos", JSON.stringify([...cartProductos, producto])) 
    }

  };


  const eliminarProd = (id) => {
    setCartProductos(cartProductos.filter(prod => prod.id !== id))
    localStorage.removeItem("memoProductos")    
  }  
  const precioTotal = () => {   
    return cartProductos.reduce((parcial, producto) => parcial = parcial + (producto.precio * producto.quanty), 0 )
  };
  const limpiarCart = () =>{
      setCartProductos([])
      localStorage.clear()
  }
  // valores a pasar en el contexto
  const data = {
    cartProductos,  
    addProductos,
    precioTotal,
    limpiarCart,
    eliminarProd,
    totalPrice,
  };

  return (
    // funciones que van a ir dentro del componente
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
    // "children" es para que vayan todos los componentes a utilizar
  );
};

export { CartProvider };
export default CartContext;
