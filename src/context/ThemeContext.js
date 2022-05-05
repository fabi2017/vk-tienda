import { createContext, useState } from "react";

//se crea el contexto
const ThemeContext =  createContext()

//se crea el  componente proveedor para el contexto
const ThemeProvider = ({children} ) => {
 
     //se crea estados para el tema 
    const [darkTheme,setDarkTheme ] = useState(false)

    const cambioTema = () => {
        setDarkTheme(!darkTheme)
      //  console.log("funcion del tema dark ")
    } 

    // valores a pasar en el contexto
    const data = {
        darkTheme,
        setDarkTheme,
        cambioTema,
    }

        
    return (  // funciones que van a ir dentro del componente 
        <ThemeContext.Provider value={data}>
            {children} 
        </ThemeContext.Provider> 
     // "children" es para que vayan todos los componentes a utilizar  
    )
}

export {ThemeProvider}

export default ThemeContext
