import React, { useState } from "react";

import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  map: {
    width: "50vw",
    height: "50vh",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const Maps = ({ google }) => {
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const classes = useStyles();

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onMapClick = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null); // {} ?
    }
  };

  return (
    <Map
      className={classes.map}
      item
      xs={12}
      google={google}
      onClick={onMapClick}
      zoom={14}
      initialCenter={{ lat: 4.747542, lng: -74.117077 }}>
      <Marker
        onClick={onMarkerClick}
        title={"Changing Colors Garage"}
        position={{ lat: 4.747542, lng: -74.117077 }}
        name={"Changing Colors Garage"}
      />
      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <Paper>
          <Typography variant='headline' component='h4'>
            Changing Colors Garage
          </Typography>
          <Typography component='p'>Parque: El Berlins</Typography>
        </Paper>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_giUMwi3fk0jSLK0zJLM0kVXgfP7SjGE",
})(Maps);
