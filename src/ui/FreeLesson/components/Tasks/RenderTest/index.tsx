import React, {useState} from 'react';
import RadioBlock from "../../RadioBlock";

import s from './style.module.scss'

interface renderTestProps {
  content?: any,
  title?: any,
  clickNext: any,
  clickProgress: any
}

const RenderTest: React.FC<renderTestProps> = ({content, title, clickNext, clickProgress}) => {
  const [answers, setAnswers] = useState([]);
  const [show, setShow] = useState<boolean>(false);


  const handleClickNext = () => {
    clickNext && clickNext();
    clickProgress((prevState: any) => prevState + 1)
  }

  return (
    <div className={s.wrap}>
      {
        !show ? (
          <>
            <h1 className={s.title}>{title}</h1>
            <RadioBlock
              onChange={setAnswers}
              clickProgress={clickProgress}
              content={content}
            />
            {
              answers.length === 5 && (
                <button className={s.btn} onClick={() => setShow(true)}>Show Result</button>
              )
            }
          </>
        ) : (
          <>
            <p className={s.text}>
              Everyone needs support occasionally, and we all are curious to know how to become that person who has a lot of money and is well organized with finance governance.
            </p>
            <button onClick={handleClickNext} className={s.btn}>I want to know</button>
          </>

        )
      }

    </div>
  )
}

export default RenderTest;