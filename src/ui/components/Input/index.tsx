import React, {useEffect, useState} from "react";

import cn from "classnames";
import s from "./style.module.scss";

interface inputProps {
  type?: string,
  size?: "small" | "default",
  placeHolder?: string,
  value: string,
  disabled?: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeShowPass?: any,
  name?: string,
  isLatin?: any,
  blur?: any,
  blurEmail?: any,
  isValidEmail?: boolean,
  isValidFirstName?: boolean
  isValidLastName?: boolean
}

export const Input: React.FC<inputProps> = (
  {
    type,
    size = "default",
    placeHolder,
    value,
    onChange,
    disabled,
    name,
    onChangeShowPass,
    isLatin,
    isValidEmail,
    isValidFirstName,
    isValidLastName,
    blur
  }) => {
  const [isValid, setValid] = useState(false);
  useEffect(() => {
    if (value.length >= 1) {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  }

  const handleClickShowPassword = () => {
    onChangeShowPass && onChangeShowPass((prevState: any) => !prevState)
  }


  const handleBlur = () => {
    blur && blur()
  }
  return (
    <div className={s.wrap}>
      {
        isLatin && <p className={s.invalidPass} style={{color: "red"}}>password only latin</p>
      }
      {
        isValidEmail && <p className={s.invalidEmail}>Invalid email address</p>
      }
      {
        isValidFirstName && <p className={s.invalidName}>Invalid first name</p>
      }
      {
        isValidLastName && <p className={s.invalidName}>Invalid last name</p>
      }
      <input

        className={cn(s.input, {
          [s.valid]: isValid,
          [s.default]: size === "default",
          [s.small]: size === "small",
          [s.latin]: isLatin,
          [s.validEmail]: isValidEmail,
          [s.validFirstName]: isValidFirstName,
          [s.validLastName]: isValidLastName,
        })}
        onBlur={handleBlur}
        value={value}
        name={name}
        onChange={handleChange}
        type={type}
        disabled={disabled}
      />
      <div className={s.img} onClick={handleClickShowPassword}>
        {(name === "password" && type === "password") && (
          <svg className={s.iconShow} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.0874 11.3066C20.2582 11.5924 20.3764 11.8296 20.4487 12C20.3764 12.1704 20.2582 12.4076 20.0874 12.6934C19.7312 13.2896 19.1836 14.0348 18.4477 14.7591C16.9785 16.2054 14.8366 17.5 12 17.5C9.16344 17.5 7.0215 16.2054 5.55228 14.7591C4.81643 14.0348 4.26883 13.2896 3.91262 12.6934C3.74181 12.4076 3.62356 12.1704 3.55131 12C3.62356 11.8296 3.74181 11.5924 3.91262 11.3066C4.26883 10.7104 4.81643 9.9652 5.55228 9.24085C7.0215 7.79458 9.16344 6.5 12 6.5C14.8366 6.5 16.9785 7.79458 18.4477 9.24085C19.1836 9.9652 19.7312 10.7104 20.0874 11.3066Z"
              stroke="#A8B0BA" strokeWidth="3"/>
            <circle r="3" transform="matrix(1 0 0 -1 12 12)" fill="#A8B0BA"/>
          </svg>
        )}
        {(name === "password" && type === "text") && (
          <svg className={s.iconText} width="24" height="24" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 13.25H13.25V15.75H11.25V13.25Z" fill="#A8B0BA"/>
            <path d="M2.25 11.25L4.25 9.25L5.75 10.75L3.75 12.75L2.25 11.25Z" fill="#A8B0BA"/>
            <path d="M6.25004 14.25L7.25012 12.25L9.50136 12.8612L8.24997 15.25L6.25004 14.25Z" fill="#A8B0BA"/>
            <path d="M18.25 14.25L17.2499 12.25L14.9986 12.8612L16.25 15.25L18.25 14.25Z" fill="#A8B0BA"/>
            <path d="M21.75 11.25L19.75 9.25L18.25 10.75L20.25 12.75L21.75 11.25Z" fill="#A8B0BA"/>
            <path
              d="M2.25 8.25C3.182 10.5117 6.08647 14.25 11.9829 14.25C17.8793 14.25 20.7838 10.5117 21.7158 8.25H18.3045C17.3263 9.62403 15.3718 11.25 11.9829 11.25C8.59401 11.25 6.63943 9.62403 5.66123 8.25H2.25Z"
              fill="#A8B0BA"/>
          </svg>
        )}
      </div>
      <span className={s.placeholder}>{placeHolder}</span>
    </div>
  )
}