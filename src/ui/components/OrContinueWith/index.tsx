import React from 'react';
import {Button} from "../Button";
import s from "./style.module.scss";

export const OrContinueWith = () => {
  const handleClick = (e: any) => {
    e.preventDefault();
  }
  return (
    <>
      <p className={s.choice}>
        Or continue with
      </p>
      <div className={s.links}>
        <Button
          margin={"0 auto 24px"}
          variant="outlined"
          color="black"
          size="large"
          onClick={handleClick}
        >
          Facebook
        </Button>
        <Button
          margin={"0 auto 24px"}
          variant="outlined"
          color="black"
          size="large"
          onClick={handleClick}
        >
          Google
        </Button>
      </div>
    </>
  )
}