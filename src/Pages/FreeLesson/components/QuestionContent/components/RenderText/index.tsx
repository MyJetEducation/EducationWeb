import React, {useEffect, useState} from 'react';
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'

import s from './style.module.scss';
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";

interface renderTextQuestion {
  content?: any
}

export const RenderText:React.FC<renderTextQuestion> = ({content}) => {

  const getTimeToken = async () => {
    const data = await req(configEndpoint.taskTime, {
      "tutorial": "1",
      "unit": 1,
      "task": 1
    })
    localStorage.setItem("timeToken", data.data)
  }
  const fetchResult = async () => {
    const data = await req(configEndpoint.unit1Text, {
      "isRetry": false,
      "timeToken": localStorage.getItem("timeToken")
    })
    return data
  }

  useEffect(() => {
    getTimeToken()
    return () => {
      fetchResult()
      localStorage.removeItem("timeToken")
    }
  }, [])

  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(setStartTimer());
  //   return () => {
  //     dispatch(setEndTimeAsync())
  //   }
  // }, []);

  return (
    <div className={s.wrap}>
      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>

  )
}
