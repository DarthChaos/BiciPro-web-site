import React from 'react';
import { Typography, makeStyles } from '@material-ui/core'
import CapturaPhImagen from '../../assets/images/CapturaPh.png'
import './Home.scss';
import clsx from 'clsx';
 
const useStyles = makeStyles(()=> ({
  root: {
    textAlign: "center",
  },
  tituloImagen:{
    backgroundImage: `url(${CapturaPhImagen})`
    
    
  },
  texto: {
  
    fontFamily: "inherit",
    fontSize: "30px",
    color: "black",
    margin: "40px 10%",
  }
}))

const CapturaPh =  () => {
  const classes = useStyles()

  return (
      <div className={clsx('Slides Slide-1', classes.root)}>
        <img src ={CapturaPhImagen}/> 
        
        
        </div>
  );
};

export default CapturaPh;
