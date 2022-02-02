import React, {useEffect} from 'react';

import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

import play from './assets/play_btn.png';

import s from './style.module.scss'
import {setEndTimeAsync, setStartTimer} from "../../../../../../store/timerSlicer";
import {useDispatch} from "react-redux";

interface renderVideoProps {
  content?: any
}

const RenderVideo: React.FC<renderVideoProps> = ({content}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStartTimer());
    return () => {
      dispatch(setEndTimeAsync())
    }
  }, []);

  return (
    <div className={s.wrap}>
      <div
        className={s.video}
      >
        <img src={play} alt="play btn"/>
      </div>

      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>
  )
}

export default RenderVideo;