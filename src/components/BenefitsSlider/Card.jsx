import React from "react";

function Card({ img }) {
  return (
    <div className="card flex justify-between m-2 p-10 bg-white rounded-md shadow items-center">
      <div className="card_info flex flex-col gap-5 w-1/3">
        <h6 className="italic text-5xl">Onboard without the risk.</h6>
        <ul>
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
            <p>We pick the best for you to select.</p>
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
          </li>
        </ul>
        <div className="flex items-center gap-2">
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

          <p className="italic">Learn More</p>
        </div>
      </div>
      <img className="h-[500px] object-contain" src={img} alt="" />
    </div>
  );
}

export default Card;
