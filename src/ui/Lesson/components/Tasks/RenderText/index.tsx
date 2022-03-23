import React, {useEffect} from 'react';
import remarkGfm from "remark-gfm";
import ReactMarkdown from 'react-markdown'

import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {useLocation, useParams} from "react-router-dom";
import {getCleanTimeToken, getTimeTokenAsync} from "../../../../../store/timeTokenSlicer";
import {useDispatch} from "react-redux";
import {getStartedAsync} from "../../../../../store/startedSlicer";
import s from './style.module.scss';

interface renderTextQuestion {
  content?: any
}

export const RenderText: React.FC<renderTextQuestion> = ({content}) => {
  const {tutorial, unit, id} = useParams<"id" | "unit" | "tutorial">();
  const dispatch = useDispatch();
  const location: any = useLocation();
  const fetchResult = async () => {
    return await req(configEndpoint.unitText, {
      unit,
      tutorial,
      "isRetry": false,
      "timeToken": localStorage.getItem("tT")
    })

  }
  useEffect(() => {
    if (!location.state?.readonly) {
      dispatch(getTimeTokenAsync(tutorial, unit, id))
    }
    if (tutorial === "personal" && unit === "unit1" && id === "1" && !location.state?.readonly) {
      dispatch(getStartedAsync())
    }

  }, []);
  useEffect(() => {
    return () => {
      if (!location.state?.readonly) {
        fetchResult();
        localStorage.removeItem("tT")
        dispatch(getCleanTimeToken());
      }
    }
  }, [])

  return (
    <div className={s.wrap}>
      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>
  )
}
