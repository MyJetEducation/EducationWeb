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
  type?: string,
  onChangeCase?: any
}

const prepareState = (answers: any) => {
  return Object.entries(answers).map((item, index) => ({
    "number": index + 1,
    "value": item[1]
  }))
}

const prepareStateTrueFalse = (answers: any) => {
  return Object.values(answers).map((item, index) => ({
    "number": index + 1,
    "value": Boolean(item)
  }))
};

const generateUniqState = (prevState: any, name: any, value: any, type?: boolean) => {
  const copyState = {...prevState}
  if (copyState[name as keyof typeof copyState]) {
    const index = (copyState[name as keyof typeof copyState] as number[]).indexOf(Number(value));
    if (index !== -1) {
      (copyState[name as keyof typeof copyState] as number[]).splice(index, 1);
    } else {
      (copyState[name as keyof typeof copyState] as number[]) = Array.from(new Set([...(copyState[name as keyof typeof copyState] as number[]), (Number(value))]))
    }
  } else {
    (copyState[name as keyof typeof copyState] as number[]) = [Number(value)]
  }
  return copyState
}

const RadioBlock: React.FC<radioBlockProps> = (
  {
    content,
    onChangeCase,
    size,
    selectedAll,
    onChange,
    onChangeTrueFalse,
    type
  }) => {
  const location: any = useLocation();
  const [answers, setAnswers] = useState({});
  const [answersTrueFalse, setAnswersTrueFalse] = useState({});
  const [answersCase, setAnswersCase] = useState<number>();
  useEffect(() => {
    selectedAll && selectedAll(Object.keys(answers).length === content.length);
    onChangeCase && onChangeCase(answersCase)
    onChange && onChange(prepareState(answers));
    onChangeTrueFalse && onChangeTrueFalse(prepareStateTrueFalse(answersTrueFalse));
  }, [answers, answersTrueFalse, answersCase]);

  const handleChange = (e: any) => {
    setAnswersCase(Number(e.target.value));
    setAnswersTrueFalse((prevState) => {
      return {
        ...prevState,
        [e.target.name]: Number(e.target.value)
      };
    });
    setAnswers((prevState) => generateUniqState(prevState, e.target.name, e.target.value))
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