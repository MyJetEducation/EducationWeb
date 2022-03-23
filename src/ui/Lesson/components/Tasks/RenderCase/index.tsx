import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useLocation, useParams} from "react-router-dom";

import RadioBlock from "../../RadioBlock";
import {setDisabledBtn} from "../../../../../store/testSlicer";
import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {getCleanTimeToken, getTimeTokenAsync} from "../../../../../store/timeTokenSlicer";

import s from './style.module.scss';

interface renderCaseProps {
  content: any
}

const RenderCase: React.FC<renderCaseProps> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const location: any = useLocation();
  const [answer, setAnswer] = useState<number>();
  const [showResult, setShowResult] = useState<boolean>(false);
  const dispatch = useDispatch();
  const fetchResult = async () => {
    const data = await req(configEndpoint.unitCase, {
      unit,
      tutorial,
      "isRetry": location.state?.retry ? true : false,
      "timeToken": localStorage.getItem("tT"),
      "value": answer
    })
    dispatch(getCleanTimeToken())
    return data
  }

  useEffect(() => {
    if (!location.state?.readonly) {
      dispatch(getTimeTokenAsync(tutorial, unit, id))
    } else {
      dispatch(setDisabledBtn(false))
    }
    return () => {
      localStorage.removeItem("tT")
      dispatch(getCleanTimeToken());
    }
  }, []);

  useEffect(() => {
    if ( answer !== undefined) {
      setShowResult(true)
      fetchResult()
      dispatch(setDisabledBtn(false))
    } else {
      setShowResult(false)
      dispatch(setDisabledBtn(true))
    }
  }, [answer])

  return (
    <div className={s.wrap}>
      {
        !showResult ? (
          <>
            <ReactMarkdown
              className={s.text}
              children={content[0].html_text}
              remarkPlugins={[remarkGfm]}
            />
            <RadioBlock
              onChangeCase={setAnswer}
              content={content}
              size="small"
              type={"radio"}
            />
          </>
        ) : (
          <ReactMarkdown
            className={s.text}
            children={content[0].before_text}
            remarkPlugins={[remarkGfm]}
          />
        )
      }
    </div>

  )
}

export default RenderCase;