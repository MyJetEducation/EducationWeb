import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Button} from "../../../components/Button";
import {Input} from "../../../components/Inputs/InputEmailOrPass";
import {AllReadyAccount} from "../../../components/AllReadyAccount";
import {OrContinueWith} from "../../../components/OrContinueWith";

import {setToken} from "../../../store/userSlicer";

import {configEndpoint} from "../../../config";
import {useAuth} from "../../../hooks/auth";
import req from "../../../utils/request";

import s from "./style.module.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const getAuth = async () => {
      const data = await req(configEndpoint.authLogin, {userName: email, password})
      setLoading(false);
      dispatch(setToken(data.data.token));
      auth.signIn(data.data.token, () => {
        navigate('/');
      })
    }
    setLoading(true);
    getAuth();
  }

  useEffect(() => {
    if ( auth.user ) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if ( email.length >= 1 && password.length >= 1) {
      setDisabled(false)
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  return (
    <>
      {
        isLoading && (
          <div className={s.loadingWrap}>
            <h1 className={s.loadingTitle}>Loading...</h1>
          </div>
        )
      }
      <div className={s.wrap}>
        <h3 className={s.title}>Log In</h3>
        <form className={s.form} onSubmit={handleSubmit}>
          <Input
            type="email"
            placeHolder="Email address"
            value={email}
            disabled={isLoading}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeHolder="Password"
            value={password}
            disabled={isLoading}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Link
            to="/forgot"
            className={s.forgotLink}
          >
            Forgot password?
          </Link>
          <Button
            margin={"0 auto 24px"}
            disabled={isDisabled || isLoading}
            size="large"
          >
            Login
          </Button>
          <OrContinueWith/>
          <AllReadyAccount/>
        </form>
      </div>
    </>
  )
}