import React, {useEffect, useState} from 'react';
import cn from 'classnames';

import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {AllReadyAccount} from "../components/AllReadyAccount";
import {OrContinueWith} from "../components/OrContinueWith";

import s from './style.module.scss';
import req from "../../services/request";
import {configEndpoint} from "../../config";

export const Register = () => {
  const [formFields, setFormFields] = useState<{
    userName: string, 
    password: string, 
    firstname: string, 
    lastname: string
  }>({
    userName: "", 
    password: "", 
    firstname: "", 
    lastname: ""
  });
  const [isEmail, setIsEmail] = useState(false);
  const [isLetters, setLetters] = useState(false);
  const [isNumbers, setNumbers] = useState(false);
  const [isCharacters, setCharacters] = useState(false);
  const [status, setStatus] = useState();

  useEffect(() =>{
    if (formFields.password.length >= 8 && formFields.password.length <= 31 ) {
      setCharacters(true);
    } else {
      setCharacters(false);
    }
    if ( /.*[A-Za-z].*/.test(formFields.password) && formFields.password.length > 0) {
      setLetters(true);
    } else {
      setLetters(false);
    }
    if ( /.*[0-9].*/.test(formFields.password) && formFields.password.length > 0) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }
    if ( formFields.userName.length >= 1) {
      setIsEmail(true)
    } else {
      setIsEmail(false)
    }

  }, [formFields.password, formFields.userName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fetchData = async () => {
      const data = await req(configEndpoint.createAccount, formFields);
      setStatus(data.status)
    }
    fetchData()
  }

  const handleChange = (event: any) => {
    setFormFields(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Create an account</h1>
      <p className={s.subTitle}>
        Простая обучающая программа по финансовым знаниям, инструментам и управления деньгами.
      </p>

      {
        status === 0 ? (
          <div>Подтверждение отправлено на почту</div>
        ) : (
          <form
            onChange={handleChange}
            onSubmit={handleSubmit}
            className={s.form}
          >
            <div className={s.nameBlock}>
              <Input
                type="text"
                size="small"
                name="firstname"
                placeHolder="First Name"
                value={formFields.firstname}
              />
              <Input
                type="text"
                size="small"
                name="lastname"
                placeHolder="Last Name"
                value={formFields.lastname}
              />
            </div>

            <Input
              type="email"
              placeHolder="Email address"
              name="userName"
              value={formFields.userName}
            />
            <Input
              type="password"
              placeHolder="Password"
              name="password"
              value={formFields.password}
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
        )
      }
    </div>
  )
}