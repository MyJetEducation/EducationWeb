import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";

import {ARRAY_ANSWERS2} from "../../../../constans";

import {checkAnswers, similarResult} from "../../../../../../utils";

import {setDisabledBtn} from "../../../../../../store/testSlicer";
import {currentIdSelector, validChange} from "../../../../../../store/menuSlicer";
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";
import {useGetTimeToken} from "../../../../../Сourse/Lesson/utils/getTimeToken";


interface   renderTestTrueOrFalse {
  content: any
}

const RenderTestTrueOrFalse:React.FC<renderTestTrueOrFalse> = ({content}) => {
  const {id, unit} = useParams<"id" | "unit">();
  const numberUnit = Number(unit?.replace("unit", ""))
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const currentIndex = useSelector(currentIdSelector(id as string));
  useGetTimeToken("1", numberUnit, Number(id))
  
  useEffect(() => {
    return () => {
      localStorage.removeItem("timeToken")
    }
  }, [])

  useEffect(() => {
    if (showResult) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitTrueFalse, {
          unit,
          "isRetry": false,
          "timeToken": localStorage.getItem("timeToken"),
          "answers": answer
        })
        setPercent(data.data.unit.testScore)
      }
      setResult()
      dispatch(validChange(currentIndex));
      dispatch(setDisabledBtn(false))

    } else {
      dispatch(setDisabledBtn(true))
    }
  }, [showResult])

  return (
    <div style={{display: "flex", maxWidth: "620px", width: "100%", justifyContent: "center"}}>
      {
        showResult ? (
          <ProgressPage percent={percent}/> ) : (
          <RadioBlock
            size="small"
            selectedAll={(val: boolean) => setShowResult(val)}
            content={content}
            onChangeTrueFalse={setAnswer}
            type={"radio"}
          />

        )
      }
    </div>
  )
}

export default RenderTestTrueOrFalse;