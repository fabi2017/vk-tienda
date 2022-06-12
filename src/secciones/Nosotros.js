import SimpleAccordion from "../extra/Accordion";
import "../App.css"
import Flip from 'react-reveal/Flip';

function Nosotros() {
  return (
    <Flip top>
    <div className="contNosotros">
      <h2 className="tituloList">Sobre Nosotros</h2>    
      <SimpleAccordion />    
    </div>
    </Flip>
  );
}

export default Nosotros;
