import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import cn from 'classnames';
import s from './style.module.scss';

interface radioBlockProps {
  content?: any,
  onChange?: any,
  selectedAll?: any,
  clickProgress?: any
}

const prepareState = (answers: any) => {
  return Object.values(answers).map((item, index) => ({
    "number": index + 1,
    "value": Boolean(item)
  }))
}

const RadioBlock: React.FC<radioBlockProps> = ({content, selectedAll, onChange, clickProgress}) => {
  const [answers, setAnswers] = useState({});
  useEffect(() => {
    onChange && onChange(prepareState(answers));
    selectedAll && selectedAll(Object.keys(answers).length === content.length);
  }, [answers]);

  const [show1, setShow1] = useState<boolean>(true);
  const [show2, setShow2] = useState<boolean>(false);
  const [show3, setShow3] = useState<boolean>(false);
  const [show4, setShow4] = useState<boolean>(false);
  const [show5, setShow5] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setAnswers((prevState) => {
      return {
        ...prevState,
        [e.target.name]: Number(e.target.value)
      }
    })
  }

  const handleClick = (index: number) => {
    if (index === 0) {
      setShow2(true)
      setShow1(false)
      clickProgress((prevState: any) => prevState + 1)
    } else if (index === 1) {
      setShow3(true)
      setShow2(false)
      clickProgress((prevState: any) => prevState + 1)
    }else if (index === 2) {
      setShow4(true)
      setShow3(false)
      clickProgress((prevState: any) => prevState + 1)
    }else if (index === 3) {
      setShow5(true)
      setShow4(false)
      clickProgress((prevState: any) => prevState + 1)
    }else if (index === 4) {
      clickProgress((prevState: any) => prevState + 1)
    }
  }

  return (
    <form onChange={handleChange} className={s.form}>
      {
        content && content.map((item: any, index: number) => (
          <div
            key={item.id}
            className={cn(s.wrap, {
              [s.show1]: index === 0 && show1,
              [s.show2]: index === 1 && show2,
              [s.show3]: index === 2 && show3,
              [s.show4]: index === 3 && show4,
              [s.show5]: index === 4 && show5,
            })}>
            <p className={s.titleAnswer}>{item.title}</p>
            <div className={s.inner}>
              {
                item.answer.map((item: any) => (
                  <div
                    key={item.id}
                    className={cn(s.answerWrap, {})}
                  >
                    <input
                      className={s.input}
                      value={item.value}
                      type="radio"
                      name={item.name}
                      id={item.id}
                    />
                    <label
                      onClick={() => handleClick(index)}
                      className={s.label}
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