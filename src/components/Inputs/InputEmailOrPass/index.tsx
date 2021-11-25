import React, {useEffect, useState} from "react";

import cn from "classnames";

import s from "./style.module.scss";

interface inputProps {
  type: string,
  placeHolder: string,
  value: string,
  disabled?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input:React.FC<inputProps> = ({ type, placeHolder,value, onChange, disabled}) => {
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    if ( value.length >= 1) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  }

  return (
    <div className={s.wrap}>
      <input
        className={cn(s.input, {[s.valid]: isValid})}
        value={value}
        onChange={handleChange}
        type={type}
        disabled={disabled}
      />
      <span className={s.placeholder}>{placeHolder}</span>
    </div>
  )
}