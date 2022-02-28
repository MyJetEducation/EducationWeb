import React, {useEffect, useState} from 'react';
import cn from 'classnames';

import s from './style.module.scss';
import {useLocation} from "react-router-dom";

interface radioBlockProps {
  content?: any,
  size?: "default" | "small",
  selectedAll?: any,
  onChange?: any,
  onChangeTrueFalse?: any,
  type?: string
}

const prepareState = (answers: any) => {
  return Object.entries(answers).map((item, index) => ({
    "number": index + 1,
    "value": item[1]
  }))
}
//:TODO доделать для записи true false
const prepareStateTrueFalse = (answers: any) => {
  return Object.values(answers).map((item, index) => ({
    "number": index + 1,
    "value": Boolean(item)
  }))
}

const RadioBlock: React.FC<radioBlockProps> = ({content, size, selectedAll, onChange, onChangeTrueFalse, type}) => {
  const location: any = useLocation();
  const [answers, setAnswers] = useState({});
  const [answersTrueFalse, setAnswersTrueFalse] = useState({});
  useEffect(() => {
    selectedAll && selectedAll(Object.keys(answers).length === content.length);
    onChange && onChange(prepareState(answers));
    onChangeTrueFalse && onChangeTrueFalse(prepareStateTrueFalse(answersTrueFalse));
  }, [answers]);

  const handleChange = (e: any) => {
    setAnswersTrueFalse((prevState) => {
      return {
        ...prevState,
        [e.target.name]: Number(e.target.value)
      }})
    setAnswers((prevState) => {
      const copyState = {...prevState}
      if (copyState[e.target.name as keyof typeof copyState]) {
        (copyState[e.target.name as keyof typeof copyState] as number[]).push(Number(e.target.value))
      } else {
        (copyState[e.target.name as keyof typeof copyState] as number[]) = [Number(e.target.value)]
      }
      return copyState
    })
  }
  return (
    <form
      onChange={handleChange}
      className={s.form}
    >
      {
        content && content.map((item: any) => (
          <div key={item.id} className={s.wrap}>
            <h1 className={s.titleAnswer}>{`${item.id}. ${item.title}`}</h1>
            <div className={s.inner}>
              {
                item.answer.map((item: any) => (
                  <div
                    key={item.id}
                    className={s.answerWrap}
                  >
                    <input
                      className={s.input}
                      value={item.value}
                      type={type}
                      name={item.name}
                      id={item.id}
                      disabled={location.state?.readonly}
                    />
                    <label
                      className={cn(s.label, {
                        [s.default]: size === "default",
                        [s.small]: size === "small"
                      })}
                      htmlFor={item.id}
                    >
                      {item.textAnswer}
                    </label>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </form>

  )
}

export default RadioBlock;