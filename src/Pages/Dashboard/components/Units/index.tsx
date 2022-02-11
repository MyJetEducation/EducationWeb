import React, {useState} from 'react';

import cn from 'classnames'
import s from './style.module.scss';
import {Button} from "../../../../components/Button";
import {useNavigate} from "react-router-dom";

interface unitsProps {
  title?: string,
  unitList?: any,
  scoreList?: any[],
  urlRelocate: string,
  btnName: string,
  isShowActiveTask?: boolean,
  isSuccess: boolean
}

const Units: React.FC<unitsProps> = ({title, unitList, scoreList = [], urlRelocate, btnName, isShowActiveTask, isSuccess}) => {
  const [showUnit, setSetShowUnit] = useState(false);

  const navigate = useNavigate();

  const handleClickActive = () => {
    if (isShowActiveTask || isSuccess) {
      setSetShowUnit(!showUnit)
    }
  }

  const handleRelocateClick = () => {
    navigate(urlRelocate)
  }

  return (
    <div
      className={cn(s.wrap, {
        [s.showActive]: isShowActiveTask
      })}
    >
      <div
        onClick={handleClickActive}
        className={s.titleBlock}
      >
        <div className={cn(s.plus, {
          [s.active]: showUnit
        })}>
          <span/>
        </div>
        <h1 className={s.title}>
          {title}
        </h1>
      </div>
      {
        (isShowActiveTask || isSuccess) && (
          <>
            <div className={cn(s.tasksBlock, {
              [s.active]: showUnit,
            })}>
              {
                Object.values(unitList)?.map((item: any, index: number) => (
                  <div
                    className={s.unitItem}
                    key={index}
                  >
                    <p
                      className={cn(s.unitItemName, {
                        [s.unitItemNameDone]: scoreList[index]?.testScore === 100,
                        [s.unitItemNameNormal]: scoreList[index]?.testScore < 100,
                        [s.unitItemNameFail]: scoreList[index]?.testScore < 80,

                      })}
                    >
                      {item}
                    </p>
                    <p className={cn(s.unitItemName, {
                      [s.unitItemNameDone]: scoreList[index]?.testScore === 100,
                      [s.unitItemNameNormal]: scoreList[index]?.testScore < 100,
                      [s.unitItemNameFail]: scoreList[index]?.testScore < 80,
                    })}>
                      {
                        (index === 1 || index === 3 || index === 4) && (
                          scoreList[index]?.testScore !== undefined ? `${scoreList[index]?.testScore}%` : null
                        )
                      }
                    </p>
                  </div>
                ))
              }
            </div>
            {
              isShowActiveTask && (
                <Button
                  onClick={handleRelocateClick}
                  variant="bgBlue"
                  margin="0 auto"

                >
                  {btnName}
                </Button>
              )
            }

          </>
        )
      }

    </div>
  )
}

export default Units;