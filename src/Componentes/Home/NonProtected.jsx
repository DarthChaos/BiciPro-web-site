import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import AwesomeSlider from "react-awesome-slider";

import Mision from "./Mision";
import Vision from "./Vision";

import logo from "../../logo.svg";

import "./Home.scss";
import "react-awesome-slider/dist/styles.css";
import Acerca from "./Acerca";
import CapturaPh from "./Principal";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const NonProtected = () => {
  return (
    <>
      <AutoplaySlider
        bullets={false}
        fillParent
        play={true}
        cancelOnInteraction={false}
        interval={100000}>
        <div className='Slides Slide-1'><CapturaPh/>
          
                     
          
          
        </div>
        <div>
          <Mision />
        </div>
        
        <div className='Slides Slide-3'><Vision /></div>
        <div className='Slides Slide-4'><Acerca/></div>
        
      </AutoplaySlider>
    </>
  );
};

export default NonProtected;
