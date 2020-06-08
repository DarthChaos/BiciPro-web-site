import React, { useState } from "react";
import {
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Modal,
  CardMedia,
} from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
import clsx from "clsx";

import avatar from "../../assets/images/dummy_profile.png";

import {
  CustomCard,
  CustomTypographyTitle,
  CustomSubmitButton,
  CustomBackButton,
} from "../CustomComponents/CustomComponents";

import { perfilStyles as useStyles } from "./customStyles";

const FotoArea = () => {
  const classes = useStyles();
  const [avatarImage, setAvatarImage] = useState(avatar);
  const [avatarModal, setAvatarModal] = useState(false);
  const [openDropzone, setOpenDropzone] = useState(false);

  return (
    <>
      <CustomCard>
        <CardHeader
          className={classes.header}
          avatar={
            <IconButton
              className={classes.avatarButton}
              onClick={() => setAvatarModal(true)}>
              <Avatar alt='John Doe' src={avatarImage} />
            </IconButton>
          }
        />
        <CardContent className={classes.content}>
          <CustomTypographyTitle variant='h6' className={classes.text}>
            Estandar
          </CustomTypographyTitle>
          <CustomTypographyTitle variant='h5' className={classes.text}>
            Nombre
          </CustomTypographyTitle>
          <Typography className={clsx(classes.text, classes.description)}>
            Descripcion del usuario
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <CustomSubmitButton>Convertirse en VIP</CustomSubmitButton>
        </CardActions>
      </CustomCard>
      <Modal open={avatarModal} onClose={() => setAvatarModal(false)}>
        <CustomCard className={classes.modalCard}>
          <CardHeader title='Foto de Perfil' />
          <CardMedia className={classes.image} image={avatar} />
          <CardActions className={classes.modalActions}>
            <CustomBackButton onClick={() => setAvatarModal(false)}>
              Cancelar
            </CustomBackButton>
            <CustomSubmitButton
              className={classes.root}
              onClick={() => setOpenDropzone(true)}>
              Actualizar Foto
            </CustomSubmitButton>
          </CardActions>
        </CustomCard>
      </Modal>
      <DropzoneDialog
        acceptedFiles={["image/*"]}
        filesLimit={1}
        cancelButtonText={"Cancelar"}
        submitButtonText={"Guardar"}
        maxFileSize={50000}
        open={openDropzone}
        onClose={() => setOpenDropzone(false)}
        onSave={(files) => {
          console.log("Files:", files);
          setOpenDropzone(false);
        }}
        showPreviews
        showFileNamesInPreview
      />
    </>
  );
};

export default FotoArea;
