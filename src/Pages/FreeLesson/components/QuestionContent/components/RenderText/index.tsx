import React from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

import s from './style.module.scss';

interface renderTextQuestion {
  content?: any
}



export const RenderText:React.FC<renderTextQuestion> = ({content}) => {
  return (
    <div className={s.wrap}>
      <ReactMarkdown className={s.text} children={content[0].html_text} remarkPlugins={[remarkGfm]}/>
    </div>

  )
}
