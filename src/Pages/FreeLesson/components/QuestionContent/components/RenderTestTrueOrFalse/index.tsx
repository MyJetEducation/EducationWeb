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


interface   renderTestTrueOrFalse {
  content: any
}

const RenderTestTrueOrFalse:React.FC<renderTestTrueOrFalse> = ({content}) => {
  const {id} = useParams<"id">();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const currentIndex = useSelector(currentIdSelector(id as string));

  const getTimeToken = async () => {
    const data = await req(configEndpoint.taskTime, {
      "tutorial": "1",
      "unit": 1,
      "task": 4
    })
    localStorage.setItem("timeToken", data.data)
  }
  console.log("####: answer", answer);
  useEffect(() => {
    getTimeToken()
    return () => {
      localStorage.removeItem("timeToken")
    }
  }, [])

  useEffect(() => {
    if (showResult) {
      const setResult = async () => {
        const data = await req(configEndpoint.unit1TrueFalse, {
          "isRetry": false,
          "timeToken": localStorage.getItem("timeToken"),
          "answers": answer
        })
        console.log("####: data", data);
        setPercent(await data.data.unit.testScore)
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