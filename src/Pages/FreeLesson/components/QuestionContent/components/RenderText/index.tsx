import React, {useEffect, useState} from 'react';
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'

import s from './style.module.scss';
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";
import Timer from "../../../../../Сourse/Lesson/components/Timer";
import useTimer from "../../../../../Сourse/Lesson/components/Timer";
import {useDispatch} from "react-redux";
import {progressMenuAsync} from "../../../../../../store/progressMenuSlicer";
import {setEndTimeAsync, setStartTimer} from "../../../../../../store/timerSlicer";

interface renderTextQuestion {
  content?: any
}

export const RenderText:React.FC<renderTextQuestion> = ({content}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStartTimer());
    return () => {
      dispatch(setEndTimeAsync())
    }
  }, []);

  return (
    <div className={s.wrap}>
      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>

  )
}
