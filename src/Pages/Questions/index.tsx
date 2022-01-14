import React, {useState, useMemo } from "react";

import RenderQuestion from "./components/utils/RednerQuestion";
import {Button} from "../../components/Button";
import {QUESTIONS} from "./components/constans/QUESTIONS";

import arrowBtn from '../../components/Button/assets/arrowLeft.svg'

import s from './style.module.scss';

export const Questions = () => {
  const [qNumber, setQNumber] = useState<number>(0);
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const handleNextQuestion = () => {
    setQNumber(prevState => prevState + 1);
  }

  const handlePrevQuestion = () => {
    if (qNumber > 0) {
      setQNumber(prevState => prevState - 1);
    }
  }

  const progressBarLineStyle = useMemo(() => ({
    width: `calc( (100% / ${QUESTIONS.length}) * ${qNumber + 1})`
  }), [qNumber])

  return (
    <div className={s.wrap}>
      <div className={s.progressBar}>
        <div className={s.inner}>
          <span>{qNumber + 1} из {QUESTIONS.length}</span>
          <span>Демографический профиль</span>
          <span>≈ 17 минут</span>
        </div>
        <div className={s.progress}>
          <div className={s.line}/>
          <span className={s.progressLine} style={progressBarLineStyle}/>
        </div>

      </div>
      <div className={s.questionsContent}>
        <h3 className={s.title}>
          {
            `${qNumber + 1}. `
          }
          {
            QUESTIONS[qNumber].title
          }
        </h3>

        <RenderQuestion qNumber={qNumber} onActive={setDisabled}/>

        <div className={s.buttons}>
          <Button
            variant="outlined"
            size="small"
            onClick={handlePrevQuestion}
            disabled={qNumber === 0}
          >
            <img style={{margin: "0 auto"}} src={arrowBtn} alt=""/>
          </Button>
          {
            (QUESTIONS.length - 1) <= qNumber ? (
              <Button>Over</Button>
            ) : (
              <Button
                disabled={!isDisabled}
                onClick={handleNextQuestion}
              >
                Следующий вопрос
              </Button>
            )
          }
        </div>


      </div>

    </div>
  )
}