import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import cn from 'classnames';

import {useAuth} from "../../services/auth";
import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {AllReadyAccount} from "../components/AllReadyAccount";
import {OrContinueWith} from "../components/OrContinueWith";

import s from './style.module.scss';
import {useRegistration} from "../../application/Registration";

export const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {registration} = useRegistration();
  const [email, setEmail] = useState<Email>('');
  const [password, setPassword] = useState<Password>('');
  const [firstName, setFirstName] = useState<FirstName>('');
  const [lastName, setLastName] = useState<LastName>('');
  const [isEmail, setIsEmail] = useState(false);
  const [isLetters, setLetters] = useState(false);
  const [isNumbers, setNumbers] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCharacters, setCharacters] = useState(false);

  useEffect(() => {
    if ( auth.user ) {
      navigate("/dashboard");
    }
  },);

  useEffect(() =>{
    if (password.length >= 8 && password.length <= 31 ) {
      setCharacters(true);
    } else {
      setCharacters(false);
    }
    if ( /.*[A-Za-z].*/.test(password) && password.length > 0) {
      setLetters(true);
    } else {
      setLetters(false);
    }
    if ( /.*[0-9].*/.test(password) && password.length > 0) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }
    if ( email.length >= 1) {
      setIsEmail(true)
    } else {
      setIsEmail(false)
    }

  }, [password, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true)
    e.preventDefault();
    await registration(email, password, firstName, lastName);
    setLoading(false)
  }

  return (
    <div className={s.wrap}>
      {
        isLoading && (
          <div>Идет загрузка</div>
        )
      }
      <h1 className={s.title}>Create an account</h1>
      <p className={s.subTitle}>
        Простая обучающая программа по финансовым знаниям, инструментам и управления деньгами.
      </p>

      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.nameBlock}>
          <Input
            type="text"
            size="small"
            placeHolder="First Name"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            size="small"
            placeHolder="Last Name"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </div>

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
        <ul className={s.checking}>
          <li className={cn(s.checking__item, {[s.active]: isCharacters})}>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L10 0L5 5L2 2L0 4L5 9L12 2Z" fill="#374DFB"/>
            </svg>
            <p className={cn(s.line, {[s.active]: isCharacters})}>
              be between 8 to 31 characters
            </p>
          </li>
          <li className={cn(s.checking__item, {[s.active]: isLetters})}>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L10 0L5 5L2 2L0 4L5 9L12 2Z" fill="#374DFB"/>
            </svg>
            <p className={cn(s.line, {[s.active]: isLetters})}>
              contain at least one letter (a-z)
            </p>
          </li>
          <li className={cn(s.checking__item, {[s.active]: isNumbers})}>
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L10 0L5 5L2 2L0 4L5 9L12 2Z" fill="#374DFB"/>
            </svg>
            <p className={cn(s.line, {[s.active]: isNumbers})}>
              contain at least one number (0-9)
            </p>
          </li>
        </ul>

        <Button
          margin={"0 auto 24px"}
          disabled={!isCharacters || !isLetters || !isNumbers || !isEmail}
          variant="bgBlack"
          size="large"
        >
          Create an account
        </Button>
        <OrContinueWith/>
        <AllReadyAccount/>
      </form>
    </div>
  )
}