import React, {useState} from 'react';

import cn from 'classnames'
import s from './style.module.scss';
import {Button} from "../../../../components/Button";
import {useNavigate} from "react-router-dom";

import check from './assets/check.svg'
import norm from './assets/norm.svg'
import fail from './assets/fail.svg'

interface unitsProps {
  title?: string,
  unitList?: any,
  unitIcon?: any,
  scoreList?: any[],
  urlRelocate: string,
  btnName: string,
  isShowActiveTask?: boolean,
  isSuccess: boolean,
  unitScore: number
}

const Units: React.FC<unitsProps> = (
  {
    title,
    unitList,
    scoreList = [],
    urlRelocate,
    btnName,
    isShowActiveTask,
    isSuccess,
    unitScore,
    unitIcon
  }
) => {
  const [showUnit, setSetShowUnit] = useState(false);
  const navigate = useNavigate();

  const handleClickActive = () => {
    if (isShowActiveTask || isSuccess) {
      setSetShowUnit(!showUnit)
    }
  }

  const handleRelocateClick = () => {
    console.log("####: urlRelocate", urlRelocate);
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
        className={s.header}
      >
        {
          unitScore ? (
            <div className={s.checkIcon}>
              {unitScore >= 80 ? <img src={check} alt="icon"/> : (
                  <div className={cn(s.dropdownBtn, {
                    [s.active]: showUnit
                  })}>
                    <span/>
                  </div>
                )
              }
            </div>
          ) : (
            <div className={cn(s.dropdownBtn, {
              [s.active]: showUnit
            })}>
              <span/>
            </div>
          )
        }

        <div className={s.headerTitleBlock}>
          <h1 className={cn(s.headerTitle, {
            [s.itemDone]: unitScore ? unitScore <= 100 : null,
            [s.itemNormal]: unitScore ? unitScore < 80 : null,
            [s.itemFail]: unitScore ? unitScore < 60 : null
          })}>
            {title}
          </h1>
          <p className={cn(s.headerTitleScore, {
            [s.itemDone]: unitScore ? unitScore <= 100 : null,
            [s.itemNormal]: unitScore ? unitScore < 80 : null,
            [s.itemFail]: unitScore ? unitScore < 60 : null
          })}>
            {
              unitScore ? `${unitScore}%` : null
            }
          </p>
        </div>


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
                    <div className={s.unitItemNameBlock}>
                      {
                        scoreList[index]?.testScore >= 80 ? <img src={check} alt="done icon"/> :
                          scoreList[index]?.testScore >= 60 ? <img src={norm} alt="done icon"/> :
                            scoreList[index]?.testScore < 60 ? <img src={fail} alt="done icon"/> : (
                              <img src={unitIcon[index]} alt="unit icon"/>
                            )
                      }

                      <p
                        className={cn(s.unitItemName, {
                          [s.unitItemNameDone]: scoreList[index]?.testScore <= 100,
                          [s.unitItemNameNormal]: scoreList[index]?.testScore < 80,
                          [s.unitItemNameFail]: scoreList[index]?.testScore < 60,
                        })}
                      >
                        {item}
                      </p>
                    </div>
                    <div className={s.scoreBlock}>
                      {
                        (index === 1 || index === 3 || index === 4) && (
                          <>
                            {
                              scoreList[index]?.testScore < 100 && (
                                <Button
                                  size="reTry"
                                  variant="bgBlue"
                                  onClick={() => navigate(`/unit1/${index + 1}`)}
                                >
                                  Re-Try
                                </Button>
                              )
                            }

                            <p className={cn(s.unitItemNameScore, {
                              [s.unitItemNameDone]: scoreList[index]?.testScore <= 100,
                              [s.unitItemNameNormal]: scoreList[index]?.testScore < 80,
                              [s.unitItemNameFail]: scoreList[index]?.testScore < 60,
                            })}>
                              {scoreList[index]?.testScore !== undefined || null || undefined ? `${scoreList[index]?.testScore}%` : null}
                            </p>
                          </>
                        )
                      }

                    </div>

                  </div>
                ))
              }
            </div>
            {
              isShowActiveTask && (
                <Button
                  onClick={handleRelocateClick}
                  variant="bgBlue"
                  margin="25px auto 0"
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