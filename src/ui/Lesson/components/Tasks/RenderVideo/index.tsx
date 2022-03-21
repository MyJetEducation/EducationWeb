import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {getCleanTimeToken, getTimeTokenAsync} from "../../../../../store/timeTokenSlicer";

import play from './assets/play_btn.png';
import s from './style.module.scss'

interface renderVideoProps {
  content?: any
}

const RenderVideo: React.FC<renderVideoProps> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const location: any = useLocation();
  const dispatch = useDispatch();

  const fetchResult = async () => {
    const data = await req(configEndpoint.unitVideo, {
      unit,
      tutorial,
      "isRetry": false,
      "timeToken": localStorage.getItem("tT")
    })
    dispatch(getCleanTimeToken())
    return data
  }

  useEffect(() => {
    if (!location.state?.readonly) {
      dispatch(getTimeTokenAsync(tutorial, unit, id))
    }
    return () => {
      if (!location.state?.readonly) {
        fetchResult()
      }
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