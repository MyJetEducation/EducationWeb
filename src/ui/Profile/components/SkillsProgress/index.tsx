import React, {useEffect} from 'react';

import s from './style.module.scss'
import CircleProgressBar from "../ProfileYourProgress/components/CircleProgressBar";
import {useDispatch, useSelector} from "react-redux";
import {userProgressAsync, userTaskScoreSelector} from "../../../../store/userProgressSlicer";
import {SKILL_LIST} from "../../../Lesson/constans";

const SkillsProgress = () => {
  const dispatch = useDispatch();

  const data = useSelector(userTaskScoreSelector);
  console.log("####: data", data);
  useEffect(() => {
    dispatch(userProgressAsync())
  }, []);
  return (
    <div className={s.wrap}>
      <h6 className={s.title}>
        Skills Progress
      </h6>
      <div className={s.list}>
        {
          data !== null && (
            <>
              <div className={s.item}>
                <p>
                  {SKILL_LIST[0].title}
                </p>
                <CircleProgressBar percent={data.skill.concentration}/>
              </div>
              <div className={s.item}>
                <p>
                  {SKILL_LIST[1].title}
                </p>
                <CircleProgressBar percent={data.skill.perseverance}/>
              </div>
              <div className={s.item}>
                <p>
                  {SKILL_LIST[2].title}
                </p>
                <CircleProgressBar percent={data.skill.thoughtfulness}/>
              </div>
              <div className={s.item}>
                <p>
                  {SKILL_LIST[3].title}
                </p>
                <CircleProgressBar percent={data.skill.memory}/>
              </div>
              <div className={s.item}>
                <p>
                  {SKILL_LIST[4].title}
                </p>
                <CircleProgressBar percent={data.skill.adaptability}/>
              </div>
              <div className={s.item}>
                <p>
                  {SKILL_LIST[5].title}
                </p>
                <CircleProgressBar percent={data.skill.activity}/>
              </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default SkillsProgress;