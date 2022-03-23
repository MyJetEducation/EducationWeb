import React, {useEffect, useState} from 'react';
import cn from 'classnames';

import {Button} from "../components/Button";
import {Input} from "../components/Input";
import {AllReadyAccount} from "../components/AllReadyAccount";
import {OrContinueWith} from "../components/OrContinueWith";

import req from "../../services/request";
import {configEndpoint} from "../../config";
import s from './style.module.scss';

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

  const [isValidFirstName, setValidFirstName] = useState(false);
  const [isValidLastName, setValidLastName] = useState(false);
  const [isValidEmail, setValidEmail] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isLatin, setLatin] = useState(false);
  const [isLetters, setLetters] = useState(false);
  const [isNumbers, setNumbers] = useState(false);
  const [isCharacters, setCharacters] = useState(false);
  const [status, setStatus] = useState();

  useEffect(() => {
    if (formFields.password.length >= 8 && formFields.password.length <= 31) {
      setCharacters(true);
    } else {
      setCharacters(false);
    }
    if (/.*[A-Za-z].*/.test(formFields.password) && formFields.password.length > 0) {
      setLetters(true);
    } else {
      setLetters(false);
    }
    if (/.*[0-9].*/.test(formFields.password) && formFields.password.length > 0) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }
    if (/[а-яё]/i.test(formFields.password)) {
      setLatin(true)
    } else {
      setLatin(false)

    }
    if (formFields.userName.length >= 1) {
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

  const handleBlurEmail = () => {
    if (/^([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$/.test(formFields.userName)) {
      setValidEmail(false)
    } else if (formFields.userName.length === 0) {
      setValidEmail(false)
    } else {
      setValidEmail(true)
    }
  }

  const handleBlurFirstName = () => {
    if (/^[\w\s',.\-].[^+#!@$%\/^&*()[\]{}=|\<>?;:\d]*$/.test(formFields.firstname)) {
      setValidFirstName(false)
    } else if (formFields.firstname.length === 0) {
      setValidFirstName(false)
    } else {
      setValidFirstName(true)
    }
  }
  const handleBlurLastName = () => {
    if (/^[\w\s',.\-].[^+#!@$%\/^&*()[\]{}=|\<>?;:\d]*$/.test(formFields.lastname)) {
      setValidLastName(false)
    } else if (formFields.lastname.length === 0) {
      setValidLastName(false)
    } else {
      setValidLastName(true)
    }
  }

  return (
    <div className={s.wrap}>
      {
        status === 0 ? (
          <div className={s.already}>
            <p className={s.verifyTitle}>
              Verify your email
            </p>
            <p className={s.verifyText}>
              {`We’ve sent an email to`} <span>{formFields.userName}</span> {`to verify your email address and activate your account. The link in email will expire in 24 hours`}
            </p>
            <p className={s.verifyRetry}>
              Can’t find email.<span>Resend verification email</span>
            </p>
          </div>
        ) : (
          <>
            <h1 className={s.title}>Create an account</h1>
            <p className={s.subTitle}>
              Простая обучающая программа по финансовым знаниям, инструментам и управления деньгами.
            </p>
            <form
              onChange={handleChange}
              onSubmit={handleSubmit}
              className={s.form}
            >
              <div className={s.nameBlock}>
                <Input
                  blur={handleBlurFirstName}
                  type="text"
                  size="small"
                  name="firstname"
                  isValidFirstName={isValidFirstName}
                  placeHolder="First Name"
                  value={formFields.firstname}
                />
                <Input
                  type="text"
                  blur={handleBlurLastName}
                  isValidLastName={isValidLastName}
                  size="small"
                  name="lastname"
                  placeHolder="Last Name"
                  value={formFields.lastname}
                />
              </div>

              <Input
                type="text"
                blur={handleBlurEmail}
                isValidEmail={isValidEmail}
                placeHolder="Email address"
                name="userName"
                value={formFields.userName}
              />
              <Input
                isLatin={isLatin}
                onChangeShowPass={setShowPass}
                type={showPass ? "text" : "password"}
                placeHolder="Password"
                name="password"
                value={formFields.password}
              />
              <p>
                {
                  status === -14 && (
                    <p className={s.status14}>User with this email address already exists</p>
                  )
                }
              </p>
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
                disabled={!isCharacters || !isLetters || !isNumbers || !isEmail || isLatin || isValidEmail || isValidFirstName || isValidLastName}
                variant="bgBlack"
                size="large"
              >
                Create an account
              </Button>
              <OrContinueWith/>
              <AllReadyAccount/>
            </form>
          </>
        )
      }
    </div>
  )
}