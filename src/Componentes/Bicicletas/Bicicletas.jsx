import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core/";

import {
  CustomTypographyTitle,
  CustomSubmitButton,
} from "../CustomComponents/CustomComponents";
import AgregarBicicletas from "./AgregarBicicletas";
import { bicicletasStyles as useStyles } from "./customStyles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Bicicletas() {
  const [modalSignIn, setModalSignIn] = useState(false);
  const [open, setOpen] = useState(false);

  const { url } = useRouteMatch();
  const classes = useStyles();

  const handleAddButton = () => {
    setModalSignIn(true);
    setOpen(true);
  };

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth='sm'>
          <CustomTypographyTitle
            component='h1'
            variant='h2'
            align='center'
            gutterBottom>
            Tus Bicicletas
          </CustomTypographyTitle>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <CustomSubmitButton
                  variant='contained'
                  onClick={handleAddButton}>
                  Añadir Bicicleta
                </CustomSubmitButton>
              </Grid>
              <Grid item>
                <Button className={classes.quitButton} variant='outlined'>
                  Quitar Bicicleta
                </Button>
              </Grid>
            </Grid>
          </div>
          {/* <AgregarBicicletas open={open} setOpen={setOpen} /> */}
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image='https://source.unsplash.com/random'
                  title='Image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {card}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.actionButton} size='small'>
                    Ver Datos
                  </Button>
                  <Button
                    component={Link}
                    to={`${url}/${card}`}
                    className={classes.actionButton}
                    size='small'>
                    Editar Datos
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
