import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'
import misionImagen from '../../assets/images/misionLetra.png'
import './Home.scss';
import clsx from 'clsx';
 
const useStyles = makeStyles(()=> ({
  root: {
    textAlign: "center",
  },
  tituloImagen:{
    backgroundImage: `url(${misionImagen})`
  },
  texto: {
    fontFamily: "inherit",
    fontSize: "30px",
    color: "black",
    margin: "32px 10%",
  }
}))

const Mision =  () => {
  const classes = useStyles()

  return (
      <div className={clsx('Slides Slide-2', classes.root)}>
        <img src ={misionImagen}/> 
        <Typography className = {classes.texto}>
          Buscamos llevar bienestar y seguridad a los biciusarios por medio de nuestros
          servicios; donde ellos siempre estarán conectados con nuestra ciudad, solo al alcance de sus manos
        </Typography> 
      </div>
  );
};

export default Mision;
