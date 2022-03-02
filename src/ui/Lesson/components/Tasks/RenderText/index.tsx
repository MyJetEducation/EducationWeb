import React, {useEffect} from 'react';
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'

import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {useGetTimeToken} from "../../../../../services/useTimeToken";
import {useLocation, useParams} from "react-router-dom";
import s from './style.module.scss';

interface renderTextQuestion {
  content?: any
}

export const RenderText: React.FC<renderTextQuestion> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const numberUnit = Number(unit?.replace("unit", ""));
  useGetTimeToken(String(tutorial), numberUnit, Number(id));
  const location: any = useLocation();
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
      if (!location.state?.readonly) {
        fetchResult()
      }

      localStorage.removeItem("timeToken")
    }
  }, []);

  return (
    <div className={s.wrap}>
      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>

  )
}
