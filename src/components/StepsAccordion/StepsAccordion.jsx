import React, { useState } from "react";
import stepsVideoIcon1 from "../../assets/stepsVideoIcon1.png";
import stepsVideoIcon2 from "../../assets/stepsVideoIcon2.png";
import "./accordion.css";

function StepsAccordion({ stepCount, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`steps_accordion ${isOpen ? "open" : ""}`}
      onClick={toggleAccordion}
    >
      <div
        className="steps_accordionHeader"
        style={{
          borderBottom: `${isOpen ? "none" : "1px solid lightgray"}`,
          borderTopRightRadius: `${isOpen ? "5px" : "3px"}`,
          borderTopLeftRadius: `${isOpen ? "5px" : "3px"}`,
          borderBottomLeftRadius: `${isOpen ? "none" : "3px"}`,
          borderBottomRightRadius: `${isOpen ? "none" : "3px"}`,
        }}
        // onClick={toggleAccordion}
      >
        <div>
          {isOpen ? (
            <img style={{ width: "40px" }} src={stepsVideoIcon2} alt="" />
          ) : (
            <img style={{ width: "40px" }} src={stepsVideoIcon1} alt="" />
          )}
        </div>
        <div>
          <span
            style={{
              fontStyle: "italic",
            }}
          >
            {stepCount}:
          </span>{" "}
          {title}
        </div>
      </div>
      {isOpen && <div className="steps_accordionContent">{children}</div>}
    </div>
  );
}

export default StepsAccordion;
