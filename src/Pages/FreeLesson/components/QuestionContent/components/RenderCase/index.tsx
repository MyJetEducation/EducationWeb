import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import RadioBlock from "../../../RadioBlock";
import {setDisabledBtn} from "../../../../../../store/testSlicer";

import s from './style.module.scss';

interface renderCaseProps {
  content: any
}

const RenderCase: React.FC<renderCaseProps> = ({content}) => {
  const [answer, setAnswer] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fn = ((obj: any) => {
      for ( let key in obj) {
        return dispatch(setDisabledBtn(false))
      }
      return  dispatch(setDisabledBtn(true))
    })
    fn(answer)
  }, [answer, dispatch])

  return (
    <div className={s.wrap}>
      <ReactMarkdown
        className={s.text}
        children={content[0].html_text}
        remarkPlugins={[remarkGfm]}
      />
      <RadioBlock
        onChange={setAnswer}
        content={content}
        size="small"
      />
    </div>

  )
}

export default RenderCase;