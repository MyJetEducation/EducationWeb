import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userProgressAsync, userTaskScoreSelector} from "../../../../store/userProgressSlicer";
import CircleProgressBar from "./components/CircleProgressBar";
import {HABIT_LIST, KNOWLEDGE_LIST, SKILL_LIST} from "../../../Lesson/constans";
import s from './style.module.scss'

const ProfileYourProgress = () => {
  const dispatch = useDispatch();

  const data = useSelector(userTaskScoreSelector);
  console.log("####: data", data);
  useEffect(() => {
    dispatch(userProgressAsync())
  }, []);
  return (
    <div className={s.wrap}>
      <h6 className={s.title}>
        Your Progress
      </h6>
      {
        data === null ? <div>...Loading</div> : (
          <div className={s.list}>
            <div className={s.item}>
              <div className={s.info}>
                <p>{data.habit.index}<span>/9</span></p>
                <p>Habits</p>
              </div>
              <div className={s.progress}>
                <CircleProgressBar percent={data.habit.progress}/>
                <p className={s.descr}>
                  {
                    HABIT_LIST[data.habit.index].title
                  }
                </p>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.info}>
                <p>{data.skill.total}%</p>
                <p>Skill</p>
              </div>
              <div className={s.progress}>
                <CircleProgressBar percent={data.skill.total}/>

              </div>
            </div>
            <div className={s.item}>
              <div className={s.info}>
                <p>{data.knowledge.index}<span>/9</span></p>
                <p>Knowledge</p>
              </div>
              <div className={s.progress}>
                <CircleProgressBar percent={data.knowledge.progress}/>
                <p className={s.descr}>
                  {
                    KNOWLEDGE_LIST[data.knowledge.index].title
                  }
                </p>
              </div>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default ProfileYourProgress;