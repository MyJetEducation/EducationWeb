import React, {useEffect} from 'react';

import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

import play from './assets/play_btn.png';

import s from './style.module.scss'
import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {useLocation, useParams} from "react-router-dom";
import {useGetTimeToken} from "../../../../../services/useTimeToken";

interface renderVideoProps {
  content?: any
}

const RenderVideo: React.FC<renderVideoProps> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const numberUnit = Number(unit?.replace("unit", ""));
  const location: any = useLocation();
  useGetTimeToken(String(tutorial), numberUnit, Number(id))

  const fetchResult = async () => {
    const data = await req(configEndpoint.unitVideo, {
      unit,
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
  }, [])

  return (
    <div className={s.wrap}>
      <div className={s.video}>
        <img src={play} alt="play btn"/>
      </div>
      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>
  )
}

export default RenderVideo;