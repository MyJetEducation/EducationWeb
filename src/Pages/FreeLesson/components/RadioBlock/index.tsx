import React, {useEffect, useState} from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface radioBlockProps {
  content?: any,
  size?: "default" | "small",
  selectedAll?: any,
  onChange?: any,
}

const prepareState = (answers: any) => {
  return Object.entries(answers).map((item, index) => ({
    "number": index,
    "value": [
      item[1]
    ]
  }))
}

const RadioBlock: React.FC<radioBlockProps> = ({content, size, selectedAll, onChange}) => {
  console.log("####: content", content);

  const [answers, setAnswers] = useState({});

  useEffect(() => {
    selectedAll && selectedAll(Object.keys(answers).length === content.length);
    onChange && onChange(prepareState(answers))
  }, [answers])



  const handleChange = (e: any) => {
    setAnswers((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <form
      onChange={handleChange}
      className={s.form}
    >
      {
        content.map((item: any) => (
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
                      type="radio"
                      name={item.name}
                      id={item.id}
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