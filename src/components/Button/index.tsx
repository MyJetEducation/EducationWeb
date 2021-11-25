import React from "react";

import cn from 'classnames';
import s from './style.module.scss';

interface buttonProps {
  variant?: "contained" | "outlined",
  size?: "small" | "middle" | "large",
  color?: "white" | "black",
  disabled?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button:React.FC<buttonProps> = ({ variant = "contained", size = "middle", color = "white", children, disabled = false, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
  }
  return (
    <button
      disabled={disabled}
      className={cn(s.btn, {
        [s.contained]: variant === "contained",
        [s.outlined]: variant === "outlined",
        [s.small]: size === "small",
        [s.middle]: size === "middle",
        [s.large]: size === "large",
        [s.white]: color === "white",
        [s.black]: color === "black",
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}