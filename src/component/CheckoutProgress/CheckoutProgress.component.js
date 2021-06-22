import React from "react";

import "./CheckoutProgress.style";

const CheckoutProgress = ({ step }) => {
  console.log(step);
  return (
    <div className="container">
      <div id="step-1" className="progress-bar completed">
        <span />
        <p>{step !== "shipping" ? <i>&#10004;</i> : "1"}</p>
      </div>
      <div
        id="step-2"
        className={
          step !== "shipping" ? "progress-bar completed" : "progress-bar"
        }
      >
        <span />
        <p>{step !== "success" ? "2" : <i>&#10004;</i>}</p>
      </div>
      <div
        id="step-3"
        className={
          step === "success" ? "progress-bar completed" : "progress-bar"
        }
      >
        <span />
      </div>
    </div>
  );
};

export default CheckoutProgress;
