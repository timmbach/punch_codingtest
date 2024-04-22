import React, { useState } from "react";
import Card from "./Card";

import riskSlideImg from "./assets/riskSlide.png";
import openBookSlideImg from "./assets/openBookSlide.png";
import stayInLoopSlideImg from "./assets/stayInLoopSlide.png";
import Slider from "react-slick";

function BenefitsSlider() {
  const [progress, setProgress] = useState(0);
  const [slideToShow, setSlideToShow] = useState(1.2);

  const slidesData = [
    {
      slideTitle: "Why choose Zwilt?",
      slideContent: [
        "We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.",
      ],
    },
    {
      slideTitle: "Onboard without the risk.",
      slideContent: [
        "We pick the best for you to select",
        "Thousands of vetted candidates in dozens of categories.",
        "Risk-free resource swapping for the best fit.",
      ],
      slideImage: riskSlideImg,
    },
    {
      slideTitle: "An open book.",
      slideContent: [
        "Easy and transparent one-to-one chat with candidates.",
        "Simple and convenient payment methods.",
        "Review past ratings.",
      ],
      slideImage: openBookSlideImg,
    },
    {
      slideTitle: "Stay in the loop.",
      slideContent: [
        "Track your staff activity down to every minute with screenshots.",
        "Comprehensive timesheet data to process payments.",
        "Create projects to organize and assign tasks more effectively.",
      ],
      slideImage: stayInLoopSlideImg,
    },
  ];

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    afterChange: (current) => {
      setProgress(
        (100 / (slidesData.length - slideToShow + 1)) * (current + 1)
      );
      console.log(progress);
    },
  };

  return (
    <div className="relative flex flex-col justify-between">
      <Slider {...settings}>
        {/* <Card img={riskSlideImg} />
        <Card img={openBookSlideImg} />
        <Card img={stayInLoopSlideImg} /> */}

        {slidesData.map((slide, index) => (
          <Card key={index} slideData={slide} />
        ))}
      </Slider>
      <div className="h-[7px] relative bg-[#d7d9ec] w-[50%] max-w-[550px] mx-auto border mt-8 shadow shadow-slate-400 rounded">
        <div
          className="bg-[#202229] h-[7px] absolute transition-all rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default BenefitsSlider;
