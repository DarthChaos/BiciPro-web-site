import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'
import acercaImagen from '../../assets/images/Acerca.png'
import './Home.scss';
import clsx from 'clsx';
 
const useStyles = makeStyles(()=> ({
  root: {
    textAlign: "center",
  },
  tituloImagen:{
    backgroundImage: `url(${acercaImagen})`
  
  },
  texto: {
  
    fontFamily: "inherit",
    fontSize: "28px",
    color: "black",
    margin: "40px 10%",
  }
}))

const Acerca =  () => {
  const classes = useStyles()

  return (
      <div className={clsx('Slides Slide-4', classes.root)}>
        <img src ={acercaImagen}/> 
        
        
        <Typography className = {classes.texto}>
        Aquí encontrarás un equipo que busca acompañarte en tu día a día. Preocupados por tu seguridad, por tu identificación y satisfacción; todo al alcance de una cuenta.  ¡Mientras te movilizas en tú bici!
        </Typography> 
      </div>
  );
};

export default Acerca;
