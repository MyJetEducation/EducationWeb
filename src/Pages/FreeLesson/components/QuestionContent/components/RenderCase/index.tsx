import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import RadioBlock from "../../../RadioBlock";
import {setDisabledBtn} from "../../../../../../store/testSlicer";

import s from './style.module.scss';
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";

interface renderCaseProps {
  content: any
}

const RenderCase: React.FC<renderCaseProps> = ({content}) => {
  const [answer, setAnswer] = useState<any[]>([]);
  const [isValidAnswer, setValidAnswer] = useState(false)
  const dispatch = useDispatch();

  const getTimeToken = async () => {
    const data = await req(configEndpoint.taskTime, {
      "tutorial": "1",
      "unit": 1,
      "task": 3
    })
    localStorage.setItem("timeToken", data.data)
  }

  useEffect(() => {
    getTimeToken()
    return () => {
      localStorage.removeItem("timeToken")
    }
  }, [])

  //:TODO после ответа отправляется timeToken, но пользователь еще не нажал на кнопку Next
  // и при выборе ответа не хаватет answer
  useEffect(() => {
    if (isValidAnswer) {
      console.log("####: answer", answer[0].value[0]);
      const setResult = async () => {
        const data = await req(configEndpoint.unit1Case, {
          "isRetry": false,
          "timeToken": localStorage.getItem("timeToken"),
          "value": answer[0].value[0]
        })
        console.log("####: data", await data);
        return data
      }
      setResult()
    }
  }, [isValidAnswer])

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
        selectedAll={(val: boolean) => setValidAnswer(val)}
        content={content}
        size="small"
        type={"radio"}
      />
    </div>

  )
}

export default RenderCase;