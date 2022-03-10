import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import cn from 'classnames'
import {getStatsAsync, userTaskScoreSelector} from "../../../../store/statsBlock";
import s from './style.module.scss';

const StatsBlock = () => {
  const dispatch = useDispatch();
  const data = useSelector(userTaskScoreSelector);
  console.log("####: data", data);
  useEffect(() => {
    dispatch(getStatsAsync());
  }, []);

  return (
    <div className={s.wrap}>
      <h5 className={s.title}>Stats</h5>

      <div className={s.statsItems}>
        <div className={cn(s.item, s.testScore)}>
          <p>{`${data !== null ? data?.taskScore : 0}%`}</p>
          <p>Test score</p>
        </div>
        <div className={s.item}>
          <p>{data !== null ? data.tasks : 0}</p>
          <p>Task</p>
        </div>
        <div className={s.item}>
          <p>{data !== null ? data.habit.index : 0}</p>
          <p>Test score</p>
        </div>
        <div className={s.item}>
          <p>{data !== null ? data.skillProgress : 0}%</p>
          <p>Skill</p>
        </div>
      </div>
    </div>
  )
}

export default StatsBlock;