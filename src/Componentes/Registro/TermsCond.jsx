import React, { useState } from "react";
import {
  Typography,
  Grid,
  ButtonBase,
  FormControlLabel,
  Link,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";
import { Edit as EditIcon } from "@material-ui/icons/";
import { DropzoneDialog } from "material-ui-dropzone";

import {
  CustomTypographyTitle,
  CustomCheckBox,
} from "../CustomComponents/CustomComponents";
import { TermsCondStyles as useStyles } from "./customStyles";

export default function Review() {
  const classes = useStyles();

  const [openDropzone, setOpenDropzone] = useState(false);
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <CustomTypographyTitle align='center' variant='h6' gutterBottom>
        Para finalizar...
      </CustomTypographyTitle>
      <div className={classes.profileDiv}>
        <ButtonBase
          focusRipple
          className={classes.buttonImage}
          focusVisibleClassName={classes.focusVisible}
          onClick={() => setOpenDropzone(true)}>
          <span className={classes.imageSrc} />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <span
              variant='subtitle1'
              color='inherit'
              className={classes.imageTitle}>
              <EditIcon />
              <span className={classes.imageMarked} />
            </span>
          </span>
        </ButtonBase>
        <Typography className={classes.profileImageLabel}>
          Foto de Perfil
        </Typography>
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
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <CustomCheckBox
                value='remember'
                checked={checked}
                onChange={handleCheck}
              />
            }
            label='Terminos y Condiciones'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={openModal}
            onClose={() => setOpenModal(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}>
            <Fade in={openModal}>
              <div className={classes.paper}>
                <h2 id='transition-modal-title'>Terminos y Condiciones</h2>
                <p id='transition-modal-description'>
                  En el futuro, aqui estaran los terminos y condiciones
                </p>
              </div>
            </Fade>
          </Modal>
          <Typography className={classes.checkboxLabelWarning}>
            Si no las ha leido, haga{" "}
            <Link
              href='#nothing'
              className={classes.modalLink}
              onClick={() => setOpenModal(true)}>
              click aqui
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
