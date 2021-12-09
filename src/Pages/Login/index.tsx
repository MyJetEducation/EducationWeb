import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {Button} from "../../components/Button";
import {Input} from "../../components/Inputs/InputEmailOrPass";
import {AllReadyAccount} from "../../components/AllReadyAccount";
import {OrContinueWith} from "../../components/OrContinueWith";

import {useAuth} from "../../hooks/auth";

import s from "./style.module.scss";

export const Login = () => {

  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(true);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const getAuth = async () => {
      const res = await fetch("https://education.dfnt.work/api/auth/v1/login", {
        method: "POST",
        body: JSON.stringify({"userName": email, "password": password}),
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json();
      console.log("####: data", data.data.token);
      setLoading(false);

      auth.signIn(data.data.token, () => {
        navigate('/start');
      })
    }
    setLoading(true);


    getAuth();
  }

  useEffect(() => {
    if ( auth.user ) {
      navigate("/start");
    }
  },[]);

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