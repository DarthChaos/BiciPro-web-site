import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";

import Mision from "./Mision";

import logo from "../../logo.svg";

import "./Home.scss";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const NonProtected = () => {
  return (
    <>
      <AutoplaySlider
        bullets={false}
        fillParent
        play={true}
        cancelOnInteraction={false}
        interval={2000}>
        <div className='Slides Slide-1'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </div>
        <div className='Slides Slide-2'>
          <Mision />
        </div>
        <div className='Slides Slide-3'>2</div>
        <div className='Slides Slide-4'>3</div>
      </AutoplaySlider>
    </>
  );
};

export default NonProtected;
