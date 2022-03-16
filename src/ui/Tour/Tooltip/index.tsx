import React from "react";
import s from './style.module.scss'
import {useNavigate, useLocation} from "react-router-dom";

export const Tooltip = ({continuous, index, step, backProps, closeProps, primaryProps, tooltipProps, skip}: any) => {
  const location = useLocation();
  console.log("####: location", location);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/market")
  }

  return (
    <div {...tooltipProps} className={s.wrap}>
      {step.title && <h6>{step.title}</h6>}
      <h6>{step.content}</h6>
      <div>
        {skip && (
          <strong aria-label="skip" {...skip}>
            Skip
            <p id="skip"/>
          </strong>
        )}
        {index > 0 && (
          <button {...backProps} className={s.btn}>
            Back
          </button>
        )}
        {(continuous && index !== 5 || location.pathname === "/market" ) ? (
          <button {...primaryProps} className={s.btn}>
            <p id="next"/>
            Next
          </button>
        ) : (
          <button onClick={handleClick} className={s.btn}>
            Go to Market
          </button>
        )}
        {!continuous && (
          <button {...closeProps}>
            <p id="close"/>
          </button>
        )}
      </div>
    </div>
  )
};