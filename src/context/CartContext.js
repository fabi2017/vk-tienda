import { createContext, useState } from "react";

//se crea el contexto
const CartContext = createContext();

//se crea el  componente proveedor para el contexto
const CartProvider = ({ children }) => {
  //se crea estados para el tema
  const [cartProductos, setCartProductos] = useState([]);

  const addProductos = (productos, contador) => {
  
    productos.quanty = contador;
    if (cartProductos.find((el) => el.id === productos.id)) {
      let index = cartProductos.findIndex((el) => el.id === productos.id);
      let producto = cartProductos[index];
      producto.quanty = producto.quanty + contador;

      const nuevoCarrito = [...cartProductos];
      nuevoCarrito.splice(index, 1, producto);
      setCartProductos([...nuevoCarrito]);

    } else {
      let producto = { ...productos, contador };
      setCartProductos((cartProductos) => [...cartProductos, producto]);
    }

  };

  const eliminarProd = (id) => {
    setCartProductos(cartProductos.filter(prod => prod.id !== id))
  }
  
  const precioTotal = () => {   

    return cartProductos.reduce((parcial, producto) => parcial = parcial + (producto.precio * producto.quanty), 0 )
  };


  const limpiarCart = () =>{
      setCartProductos([])
  }



  // valores a pasar en el contexto
  const data = {
    cartProductos,
    addProductos,
    precioTotal,
    limpiarCart,
    eliminarProd,
  };





  return (
    // funciones que van a ir dentro del componente
    <CartContext.Provider value={data}>{children}</CartContext.Provider>
    // "children" es para que vayan todos los componentes a utilizar
  );
};

export { CartProvider };
export default CartContext;
