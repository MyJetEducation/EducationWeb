import React from 'react';
import {Button} from "../Button";
import s from "./style.module.scss";

export const OrContinueWith = () => {
  return (
    <>
      <p className={s.choice}>
        Or continue with
      </p>
      <div className={s.links}>
        <Button variant="outlined" color="black" size="large">Facebook</Button>
        <Button variant="outlined" color="black" size="large">Google</Button>
      </div>
    </>
  )
}