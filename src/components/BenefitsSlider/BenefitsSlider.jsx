import React from "react";
import Card from "./Card";

import riskSlideImg from "./assets/riskSlide.png";
import openBookSlideImg from "./assets/openBookSlide.png";
import stayInLoopSlideImg from "./assets/stayInLoopSlide.png";
import Slider from "react-slick";

function BenefitsSlider() {
  return (
    <div className="relative">
      <Slider>
        <Card img={riskSlideImg} />
        <Card img={openBookSlideImg} />
        <Card img={stayInLoopSlideImg} />
      </Slider>
    </div>
  );
}

export default BenefitsSlider;
