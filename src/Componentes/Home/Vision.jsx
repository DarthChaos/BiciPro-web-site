import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'
import visionImagen from '../../assets/images/Vision.png'
import './Home.scss';
import clsx from 'clsx';
 
const useStyles = makeStyles(()=> ({
  root: {
    textAlign: "center",
  },
  tituloImagen:{
    backgroundImage: `url(${visionImagen})`
  
  },
  texto: {
  
    fontFamily: "inherit",
    fontSize: "30px",
    color: "black",
    margin: "40px 10%",
  }
}))

const Vision =  () => {
  const classes = useStyles()

  return (
      <div className={clsx('Slides Slide-3', classes.root)}>
        <img src ={visionImagen}/> 
        
        
        <Typography className = {classes.texto}>
        Queremos que nuestro aplicativo logré expandirse a nivel nacional; siendo utilizado por todos los bici-usuarios del país, protegiendo su seguridad y confianza,a su vez impulsando este transporte pro-ambiente. 
        </Typography> 
      </div>
  );
};

export default Vision;
