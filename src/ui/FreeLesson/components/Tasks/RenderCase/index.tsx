import React, {useState} from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import RadioBlock from "../../RadioBlock";
import s from './style.module.scss';

interface renderCaseProps {
  content: any,
  clickNext: any,
  clickProgress: any
}

const RenderCase: React.FC<renderCaseProps> = ({content, clickNext, clickProgress}) => {
  const [answer, setAnswer] = useState([]);

  const handleClickNext = () => {
    clickProgress((prevState: any) => prevState + 1)
    clickNext && clickNext()
  }

  return (
    <div className={s.wrap}>
      {
        answer.length === 0 ? (
          <>
            <p className={s.text}>
              Imagine that now you have all your debts and loans paid off. You have a consistent flow of income. You are able to provide financial help to your family while having options for investing. You have everything you dreamed of.
            </p>
            <RadioBlock
              onChange={setAnswer}
              clickProgress={clickProgress}
              content={content}
            />
          </>
        ) : (
          <>
            <p className={s.text}>
              This path requires knowledge and regular contribution. You will always have a bunch of questions through your money tour. No worries! You could always get our unique list of tips for everyday usage and feel so much relief in any situation. We provide 45 Steps and 45 chances to overcome your challenges and turn your life into the one you've always dreamed of.
            </p>
            <button onClick={handleClickNext} className={s.btn}>I want to get a unique list of tips for everyday life</button>
          </>

        )
      }

    </div>

  )
}

export default RenderCase;