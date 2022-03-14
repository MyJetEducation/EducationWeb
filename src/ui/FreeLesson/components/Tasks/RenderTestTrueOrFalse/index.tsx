import React, {useState} from 'react';

import RadioBlock from "../../RadioBlock";

import s from './style.module.scss'

interface   renderTestTrueOrFalse {
  content: any,
  title: any,
  clickNext: any,
  clickProgress: any
}

const RenderTestTrueOrFalse:React.FC<renderTestTrueOrFalse> = ({content, title, clickNext, clickProgress}) => {
  const [answer, setAnswer] = useState([]);
  const [show, setShow] = useState(false);

  const handleShowClick = () => {
    setShow(true)
    clickProgress((prevState: any) => prevState + 1)
  }

  const handleClick = () => {
    clickNext && clickNext()
    clickProgress((prevState: any) => prevState + 1)
  }

  return (
    <div className={s.wrap}>
      {
        !show ? (
          <>
            <h2 className={s.title}>{title}</h2>
            <RadioBlock
              clickProgress={clickProgress}
              onChange={setAnswer}
              content={content}
            />
            {
              answer.length === 5 && (
                <button
                  onClick={handleShowClick}
                  className={s.btn}
                >
                  Show result
                </button>
              )
            }

          </>
        ) : (
          <>
            <p className={s.text}>
              It's great that you shared your thoughts on these issues. It looks like you are definitely ready to learn all the financial secrets and tips
            </p>
            <button className={s.btn} onClick={handleClick}>
              Next
            </button>
          </>

        )
      }
    </div>
  )
}

export default RenderTestTrueOrFalse;