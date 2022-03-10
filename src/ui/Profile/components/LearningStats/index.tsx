import React, {useEffect} from 'react';

import s from './style.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {userProgressAsync, userTaskScoreSelector} from "../../../../store/userProgressSlicer";

const LearningStats = () => {
  const dispatch = useDispatch();

  const data = useSelector(userTaskScoreSelector)
  useEffect(() => {
    dispatch(userProgressAsync())
  }, []);

  return (
    <div className={s.wrap}>
      <h6 className={s.title}>
        Learning stats
      </h6>
      <div className={s.list}>
        <div className={s.item}>
          {
            data !== null ? (
              <p>{`${data.taskScore}%`}</p>
            ) : (
              <p>0%</p>
            )
          }
          <p>Test score</p>
        </div>
        <div className={s.item}>
          {
            data !== null ? (
              <p>
                {`${data.tutorialsPassed}`}<span>/9</span>
              </p>
            ) : (
              <p>0<span>/9</span></p>
            )
          }
          <p>Tutorials passed</p>
        </div>
        <div className={s.item}>
          {
            data !== null ? (
              <p>
                {`${data.tasksPassed}`}<span>/270</span>
              </p>
            ) : (
              <p>
                0<span>/270</span>
              </p>
            )
          }
          <p>Tasks</p>
        </div>
        <div className={s.item}>
          {
            data !== null ? (
              data.spentHours === 0 ? (
                <p>
                  {`${data.spentMinutes}`}
                </p>
              ) : (
                <p>
                  {`${data.spentHours}`}
                </p>
              )
            ) : (
              <p>0</p>
            )
          }
          <p>
            {
              data !== null && data.spentHours === 0 ? "Minutes" : "Hours"
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default LearningStats;