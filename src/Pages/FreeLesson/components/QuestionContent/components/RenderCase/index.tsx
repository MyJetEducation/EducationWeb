import React from 'react';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import RadioBlock from "../../../RadioBlock";

import s from './style.module.scss';

interface renderCaseProps {
  content: any
}

const RenderCase:React.FC<renderCaseProps> = ({content}) => {
  return (
    <div className={s.wrap}>
      <ReactMarkdown
        className={s.text}
        children={content[0].html_text}
        remarkPlugins={[remarkGfm]}
      />

      {/*<RadioBlock content={content} size="small"/>*/}

    </div>

  )
}

export default RenderCase;