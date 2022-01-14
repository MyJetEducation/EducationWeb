import React, {useEffect, useState} from 'react';
import {Input} from "../../../components/Inputs/InputEmailOrPass";

import s from './style.module.scss'
import {Button} from "../../../components/Button";
import {AllReadyAccount} from "../../../components/AllReadyAccount";

export const ForgotPassWord = () => {
  const [inputValue, setInputValue] = useState('');
  const [isValue, setValue] = useState(true);

  useEffect(() => {
    if ( inputValue.length >= 1) {
      setValue(false);
    } else {
      setValue(true);
    };
  }, [inputValue]);

  return (
    <div className={s.wrap}>
      <h3 className={s.title}>
        Forgot password
      </h3>
      <form className={s.form}>
        <Input
          type="email"
          placeHolder="Email address"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        />
      </form>
      <Button
        disabled={isValue}
        size="large"
      >
        Send reset link
      </Button>
      <AllReadyAccount/>
    </div>
  )
}
