import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import cn from 'classnames'
import {getFetchProgressDashboardAsync, userTaskScoreSelector} from "../../../../store/allProgressDashboard";
import s from './style.module.scss';

const StatsBlock = () => {
  
  const dispatch = useDispatch();
  const data = useSelector(userTaskScoreSelector);
  useEffect(() => {
    dispatch(getFetchProgressDashboardAsync());
  }, [])
  
  return (
    <div className={s.wrap}>
      <h5 className={s.title}>Stats</h5>
      <div className={s.statsItems}>

        <div
          className={cn(s.item, s.testScore)}
        >
          <p>
            {
              data !== null ? (
                data?.taskScore
              ) : 0
            }
          </p>
          <p>Test score</p>
        </div>

        <div
          className={s.item}

        >
          <p>{`${10}`}</p>
          <p>Tasks</p>
        </div>

        <div
          className={s.item}

        >
          <p>{1}</p>
          <p>Habbit</p>
        </div>

        <div
          className={s.item}

        >
          <p>{1}</p>
          <p>Skill</p>
        </div>

      </div>
    </div>
  )
}

export default StatsBlock;