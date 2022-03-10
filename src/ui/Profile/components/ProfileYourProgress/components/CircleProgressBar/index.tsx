import React from "react";
import cn from 'classnames';
import s from './style.module.scss'

const CircularProgress = ({ progressPercentage} : any) => {
  const radius = 38; // 50
  const stroke = 4;
  const normalizedRadius = radius - (stroke * 2);
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - progressPercentage / 100 * circumference;
  return (
    <div className={cn(s.relative, s.circularProgressSvgContainer)}>
      <p>{progressPercentage}%</p>
      <svg height={radius * 2} width={radius * 2} >
        <circle
          stroke="#f2f2f2"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#777C85"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{
            transition: "all 0.3s",
            strokeDashoffset,
            "backfaceVisibility": "hidden",
            "boxShadow": "0 0 1px rgba(255,255,255,0)"
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    </div>
  );
};



const CircleProgressBar = ({percent = 0}: any) => {
  return (
    <div className={s.wrap}>
      <div>
        <div className={s.circularProgressContainer}>
          {/*<p className={s.percent}>{percent}%</p>*/}
          <CircularProgress progressPercentage={percent} />
        </div>
      </div>
    </div>
  );
}

export default CircleProgressBar;

