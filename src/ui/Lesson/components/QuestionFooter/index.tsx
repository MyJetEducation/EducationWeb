import React, {useMemo} from 'react';

import {Button} from "../../../components/Button";

import s from "./style.module.scss";

interface questionFooterProps {
  disabled?: boolean,
  onClickNext?: any,
  id?: any,
  index?: any,
  length?: any,
  btnName?: string,
  time?: any
}

export const QuestionFooter:React.FC<questionFooterProps> = ({ disabled, length, index, onClickNext, id, btnName = "NEXT", time}) => {
  const styleProgress = useMemo(() => ({width: `calc(100% / ${length} * ${index})`}), [index, length]);
  const handleClickNextQuestion = () => {
    onClickNext && onClickNext(id);
  }

  const handleSubmit = () => {

  }
  
  return (
      <div className={s.wrap}>
        <div className={s.progressLine}>
          <div className={s.line}/>
          <div
            className={s.progress}
            style={styleProgress}
          />
        </div>
        <div className={s.footer}>
          <div className={s.countLes}>
            <p>Lesson</p>
            <p>{id}</p>
            <p>{`/${length}`}</p>
          </div>
          <Button
            disabled={disabled}
            variant="bgBlue"
            onClick={handleClickNextQuestion}
          >
            {btnName}
          </Button>

          <div className={s.time}>
            {time}
          </div>
        </div>
      </div>
  )
}

