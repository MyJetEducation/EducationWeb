import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import RadioBlock from "../../RadioBlock";
import ProgressPage from "../../ProgressPage";

import {setDisabledBtn} from "../../../../../store/testSlicer";
import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {useGetTimeToken} from "../../../../../services/useTimeToken";


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
  const location: any = useLocation();
  useGetTimeToken("1", numberUnit, Number(id))
  useEffect(() => {
    return () => {
      localStorage.removeItem("timeToken")
    }
  }, []);

  useEffect(() => {
    if (showResult && !location.state?.readonly) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitTrueFalse, {
          unit,
          "isRetry": location.state?.retry ? true: false,
          "timeToken": localStorage.getItem("timeToken"),
          "answers": answer
        })
        setPercent(data.data.unit.tasks[4].taskScore)
      }
      setResult()
      dispatch(setDisabledBtn(false))
    } else if (location.state?.readonly) {
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