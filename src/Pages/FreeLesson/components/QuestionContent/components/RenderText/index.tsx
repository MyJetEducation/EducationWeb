import React, {useEffect} from 'react';
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'

import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";
import {useGetTimeToken} from "../../../../../Сourse/Lesson/utils/getTimeToken";
import {useParams} from "react-router-dom";
import s from './style.module.scss';

interface renderTextQuestion {
  content?: any
}

export const RenderText:React.FC<renderTextQuestion> = ({content}) => {
  const {id, unit} = useParams<"id" | "unit">();
  const numberUnit = Number(unit?.replace("unit", ""));
  useGetTimeToken("1", numberUnit, Number(id));

  const fetchResult = async () => {
    const data = await req(configEndpoint.unitText, {
      unit: unit,
      "isRetry": false,
      "timeToken": localStorage.getItem("timeToken")
    })
    return data
  }

  useEffect(() => {
    return () => {
      fetchResult()
      localStorage.removeItem("timeToken")
    }
  }, []);

  return (
    <div className={s.wrap}>
      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>

  )
}
