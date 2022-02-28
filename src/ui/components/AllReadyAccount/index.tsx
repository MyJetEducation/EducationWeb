import {Link} from "react-router-dom";
import React from "react";
import s from "./style.module.scss";

export const AllReadyAccount = () => {
  return (
    <p className={s.allReady}>
      Already have an account?
      <Link
        className={s.link}
        to={"/login"}
      >
        Log in
      </Link>
    </p>
  )
}