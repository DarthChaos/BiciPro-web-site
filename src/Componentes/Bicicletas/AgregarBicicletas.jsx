import React from "react";
import { Modal, Grid } from "@material-ui/core";

import bicycleAvatar from "../../assets/images/dummy_bicycle.png";

const AgregarBicicletas = (open, setOpen) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Grid container spacing={2}>
        <Grid container direction='column' justify='center'>
          <Grid item xs={12}>
            <img source={bicycleAvatar} />
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default { AgregarBicicletas };
