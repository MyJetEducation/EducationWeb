import React from "react";

import s from './style.module.scss'

export const Container:React.FC<any> = ({children}) => {
  return (
    <div className={s.wrap}>
      {children}
    </div>
  )
}