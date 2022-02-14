import React from "react";

import cn from 'classnames';
import s from './style.module.scss';

interface buttonProps {
  variant?: "bgBlack" | "bgBlue" | "bgGrey" | "outlined",
  size?: "reTry" | "small" | "little" | "middle" | "large",
  color?: "white" | "black",
  margin?: string,
  disabled?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<buttonProps> = (
  {
    variant = "bgBlack",
    size = "middle",
    color = "white",
    children,
    disabled = false,
    margin,
    onClick
  }
) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  }


  return (
    <button
      disabled={disabled}
      style={{margin: `${margin}`}}
      className={cn(s.btn, {
        [s.bgBlack]: variant === "bgBlack",
        [s.bgBlue]: variant === "bgBlue",
        [s.bgGrey]: variant === "bgGrey",
        [s.outlined]: variant === "outlined",
        [s.reTry]: size === "reTry",
        [s.small]: size === "small",
        [s.little]: size === "little",
        [s.middle]: size === "middle",
        [s.large]: size === "large",
        [s.white]: color === "white",
        [s.black]: color === "black"
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}