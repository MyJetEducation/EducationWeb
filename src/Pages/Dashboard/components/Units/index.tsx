import React, {useState} from 'react';

import cn from 'classnames'
import s from './style.module.scss';
import {Button} from "../../../../components/Button";
import {useNavigate} from "react-router-dom";

interface unitsProps {
  title?: string,
  unitList?: string[],
  scoreList?: any[],
  urlRelocate: string,
  btnName: string
}

const Units: React.FC<unitsProps> = ({title, unitList, scoreList = [], urlRelocate, btnName}) => {
  const [isActive, setActive] = useState(false);
  const [isShowActiveTask, setShowActiveTask] = useState(false);

  const navigate = useNavigate();

  const handleClickActive = () => {
    if (isShowActiveTask) {
      setActive(!isActive)
    }
  }

  const handleRelocateClick = () => {
    navigate(urlRelocate)
  }

  const handleClickChoose = () => {
    setShowActiveTask(!isShowActiveTask)
  }

  return (
    <div
      onClick={handleClickChoose}
      className={cn(s.wrap, {
      [s.showActive]: isShowActiveTask
    })}
    >
      <div
        onClick={handleClickActive}
        className={s.titleBlock}
      >
        <div className={cn(s.plus, {
          [s.active]: isActive
        })}>
          <span/>
        </div>
        <h1 className={s.title}>
          {title}
        </h1>
      </div>
      {
        isShowActiveTask && (
          <>
            <div className={cn(s.tasksBlock, {
              [s.active]: isActive,
            })}>
              {
                unitList?.map((item, index) => (
                  <div
                    className={s.unitItem}
                    key={index}
                  >
                    {item} - {scoreList[index]?.testScore}
                  </div>
                ))
              }
            </div>
            <Button
              onClick={handleRelocateClick}
              variant="bgBlue"
              margin="0 auto"

            >
              {btnName}
            </Button>
          </>
        )
      }

    </div>
  )
}

export default Units;