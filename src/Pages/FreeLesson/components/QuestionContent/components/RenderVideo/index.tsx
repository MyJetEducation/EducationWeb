import React, {useEffect} from 'react';

import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

import play from './assets/play_btn.png';

import s from './style.module.scss'
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";

interface renderVideoProps {
  content?: any
}

const RenderVideo: React.FC<renderVideoProps> = ({content}) => {

  const getTimeToken = async () => {
    const data = await req(configEndpoint.taskTime, {
      "tutorial": "1",
      "unit": 1,
      "task": 3
    })
    localStorage.setItem("timeToken", data.data);
  }

  const fetchResult = async () => {
    const data = await req(configEndpoint.unit1Video, {
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