import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAuth} from "../../services/auth";

import {Link, useNavigate} from "react-router-dom";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {OrContinueWith} from "../components/OrContinueWith";
import {AllReadyAccount} from "../components/AllReadyAccount";

import {
  getFetchUserAsync,
  userIsLoadingSelector,
  userRefreshTokenSelector,
  userTokenSelector
} from "../../store/userSlicer";

import s from "./style.module.scss";

export const Auth = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState<{userName: string, password: string}>({userName: "", password: ""});
  const isLoading = useSelector(userIsLoadingSelector);
  const token = useSelector(userTokenSelector);
  const refreshToken = useSelector(userRefreshTokenSelector);
  const auth = useAuth();
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(getFetchUserAsync(formFields, () => {
      navigate("/dashboard")
    }))
  }
  const handleChange = (event: any) => {
    setFormFields(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  };

  useEffect(() => {
    if (token !== undefined) {
      auth.signIn(token as string, () => {
        navigate('/dashboard');
      })
      auth.signInRefresh(refreshToken as string)
    }
  }, [token, refreshToken])

  useEffect(() => {
    if (formFields.userName.length >= 1 && formFields.password.length >= 1) {
      setDisabled(false)
    }
  }, [formFields.userName, formFields.password])

  return (
    <div className={s.wrap}>
      <h3 className={s.title}>Log In</h3>
      <form
        onChange={handleChange}
        className={s.form}
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          placeHolder="Email address"
          name="userName"
          value={formFields.userName}
          disabled={isLoading}
        />
        <Input
          type="password"
          placeHolder="Password"
          name="password"
          value={formFields.password}
          disabled={isLoading}
        />
        <Link
          to="/forgot"
          className={s.forgotLink}
        >
          Forgot password?
        </Link>
        <Button
          disabled={isDisabled}
          margin={"0 auto 24px"}
          size="large"
        >
          Login
        </Button>
        <OrContinueWith/>
        <AllReadyAccount/>
      </form>
    </div>
  )
}