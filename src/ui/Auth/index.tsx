import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useAuth} from "../../services/auth";

import {Link, useNavigate} from "react-router-dom";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {OrContinueWith} from "../components/OrContinueWith";

import {
  getFetchUserAsync, resetUser, userErrorSelector,
  userIsLoadingSelector,
  userRefreshTokenSelector,
  userTokenSelector
} from "../../store/userSlicer";

import s from "./style.module.scss";

export const Auth = () => {
  const [showPass, setShowPass] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState<{userName: string, password: string}>({userName: "", password: ""});
  const isLoading = useSelector(userIsLoadingSelector);
  const token = useSelector(userTokenSelector);
  const error = useSelector(userErrorSelector);
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

  }, [formFields.userName, formFields.password]);

  const handleBlurEmail = () => {
    if (/^([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$/.test(formFields.userName)) {
      setInvalidEmail(false)
    } else if (formFields.userName.length === 0) {
      setInvalidEmail(false)
    } else {
      setInvalidEmail(true)
    }
  }

  useEffect(() => {
    if (error) {
      setInvalidUser(true)
    }
  }, [error, invalidUser])


  useEffect(() => {
    dispatch(resetUser())
  }, [])

  const handleLocate = () => {
    window.location.reload()
  }

  return (
    <div className={s.wrap}>
      <h3 className={s.title}>Log In</h3>
      {
        !invalidUser ? (
          <form
            className={s.form}
            onChange={handleChange}
          >
            <Input
              type="text"
              blur={handleBlurEmail}
              isValidEmail={invalidEmail}
              placeHolder="Email address"
              name="userName"
              value={formFields.userName}
              disabled={isLoading}
            />
            <Input
              onChangeShowPass={setShowPass}
              type={showPass ? "text" : "password"}
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
              onClick={handleSubmit}
              disabled={isDisabled || invalidEmail}
              margin={"0 auto 24px"}
              size="large"
            >
              Login
            </Button>
            <OrContinueWith/>
          </form>
        ) : (
          <div className={s.errorMessage}>
            <p className={s.text}>
              Email or password not found. <span className={s.link} onClick={handleLocate}>Try again</span> or go to the <Link className={s.link} to={"/register"}>registration</Link>
            </p>
          </div>
        )
      }
    </div>
  )
}