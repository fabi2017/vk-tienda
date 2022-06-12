import "../App.css";
import FormContacto from "../componentes/FormContacto";
import Flip from 'react-reveal/Flip';

function Contacto() {
  return (
    <Flip bottom>
    <div className="contContacto">
      <h2 className="tituloList">Contactenos</h2>
     <FormContacto/>      
    </div>
    </Flip>
  );
}
export default Contacto;
