import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import RadioBlock from "../../RadioBlock";
import {setDisabledBtn} from "../../../../../store/testSlicer";

import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {useLocation, useParams} from "react-router-dom";
import {useGetTimeToken} from "../../../../../services/useTimeToken";
import s from './style.module.scss';

interface renderCaseProps {
  content: any
}

const RenderCase: React.FC<renderCaseProps> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const numberUnit = Number(unit?.replace("unit", ""));
  const location: any = useLocation();
  const [answer, setAnswer] = useState<any[]>([]);
  const [isValidAnswer, setValidAnswer] = useState(false)
  const dispatch = useDispatch();

  useGetTimeToken(String(tutorial), numberUnit, Number(id))

  useEffect(() => {
    return () => {
      localStorage.removeItem("timeToken")
    }
  }, [])

  useEffect(() => {
    if (isValidAnswer && !location.state?.readonly && !location.state?.retry) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitCase, {
          unit,
          tutorial,
          "isRetry": location.state?.retry ? true : false,
          "timeToken": localStorage.getItem("timeToken"),
          "value": answer[0].value[0]
        })
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
      return !location.state?.readonly ? dispatch(setDisabledBtn(true)) : dispatch(setDisabledBtn(false))
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