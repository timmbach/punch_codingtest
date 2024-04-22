import React from "react";

function Card({ slideData }) {
  return (
    <div className="card flex justify-between m-2 p-10 bg-white rounded-md shadow items-center">
      <div className="card_info flex flex-col gap-5 w-full">
        <h6 className="italic text-5xl">{slideData.slideTitle}</h6>
        <ul>
          {slideData.slideContent.map((listItem, index) => (
            <li key={index} className="flex items-baseline gap-2">
              {slideData.slideTitle !== "Why choose Zwilt?" && (
                <svg
                  width="18"
                  height="7"
                  viewBox="0 0 18 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="18"
                    height="7"
                    rx="3.5"
                    fill={` ${
                      slideData.slideTitle === "Onboard without the risk."
                        ? "#50589F"
                        : slideData.slideTitle === "An open book."
                        ? "#FFBE2E"
                        : slideData.slideTitle === "Stay in the loop." &&
                          "#C7F4C2"
                    } `}
                  />
                </svg>
              )}
              <p>{listItem}</p>
            </li>
          ))}
          {/* <li className="flex items-center gap-2">
            <svg
              width="18"
              height="7"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="7" rx="3.5" fill="#50589F" />
            </svg>
            <p>Thousands of vetted candidates in dozens of categories.</p>
          </li>
          <li className="flex items-center gap-2">
            <svg
              width="18"
              height="7"
              viewBox="0 0 18 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="18" height="7" rx="3.5" fill="#50589F" />
            </svg>
            <p>Risk-free resource swapping for the best fit.</p>
          </li> */}
        </ul>
        <div className="flex items-center gap-2 cursor-pointer">
          <svg
            width="50"
            height="50"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="74" height="74" rx="30" fill="#202229" />
            <path
              d="M38.3588 36.5C38.3588 40.036 35.3683 42.9024 31.6794 42.9024C27.9905 42.9024 25 40.036 25 36.5C25 32.964 27.9905 30.0976 31.6794 30.0976C35.3683 30.0976 38.3588 32.964 38.3588 36.5Z"
              fill="#EDEFFF"
            />
            <path
              d="M36.6412 44L36.6412 29L50 36.5L36.6412 44Z"
              fill="#EDEFFF"
            />
          </svg>

          <p className="italic text-slate-600 hover:text-black hover:ml-[2px]">
            Learn More
          </p>
        </div>
      </div>

      {slideData.slideImage && (
        <img
          className="h-[500px] object-contain"
          src={slideData.slideImage}
          alt=""
        />
      )}
    </div>
  );
}

export default Card;
