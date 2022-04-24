import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import "../App.css"
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

function SimpleAccordion() {
  const { darkTheme} = useContext(ThemeContext)
  return (
    <div className="contAccordion">
      <Accordion id={`${darkTheme ? 'accordionDark' : '' }`}> 
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>¿Quienes somos?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Somos una tienda con más de 10 años de experiencia en el rubro. ¡Si
            te gustan los coleccionables y los cómics Tineda-Vk es tu lugar!
            Conseguí todo el merchandising de las principales licencias y mucho
            más… ! Los esperamos todos los días para compartir nuestro mundo y
            pasión con ustedes.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion id={`${darkTheme ? 'accordionDark' : '' }`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>¿Cómo hago para comprar?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Seleccione los productos que usted desee y luego dirijase al
            "Carrito de Compras"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion id={`${darkTheme ? 'accordionDark' : '' }`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>¿La compra es confirmada con el envío del formulario?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. Primero confirmamos la disponibilidad de stock del producto,
            luego la forma de pago y por último la zona para el envío una vez
            finalizada la compra recibirás en tu correo electrónico la
            confirmación y el detalle de toda tu compra.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion id={`${darkTheme ? 'accordionDark' : '' }`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>¿Puedo retirar mi compra en el local?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si, una vez hecha la compra, podes pasar por el local a retirar en
            el horario en que está abierto. Lunes a Jueves de 12 a 19hs, Viernes
            de 12 a 20hs y Sabados de 11 a 20hs
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion id={`${darkTheme ? 'accordionDark' : '' }`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>¿Qué opciones tengo para pagar?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            • Contra reembolso • Depósito Bancario • Transferencia Bancaria •
            Tarjeta de Crédito según zona y modalidad
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion id={`${darkTheme ? 'accordionDark' : '' }`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>¿Se puede cancelar un pedido?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para cancelar la compra deberás llamar al nro° 011-xxx-xxxx,
            indicando el N° de pedido. En el caso de pago en línea la
            cancelación y reintegro del monto abonado, puede demorar hasta 48 hs
            hábiles.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion id={`${darkTheme ? 'accordionDark' : '' }`}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <h3>¿Como realizar un cambio?</h3>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ponte en contacto con nosotros por Facebook, Instagram o WhatsApp
            para coordinar cualquier consulta por cambios.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
