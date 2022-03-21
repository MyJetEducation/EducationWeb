import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import RadioBlock from "../../RadioBlock";
import ProgressPage from "../../ProgressPage";

import {setDisabledBtn} from "../../../../../store/testSlicer";
import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {getCleanTimeToken, getTimeTokenAsync} from "../../../../../store/timeTokenSlicer";

interface renderTestTrueOrFalse {
  content: any
}

const RenderTestTrueOrFalse:React.FC<renderTestTrueOrFalse> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const location: any = useLocation();
  useEffect(() => {
    if (!location.state?.readonly || !location.state?.retry) {
      dispatch(getTimeTokenAsync(tutorial, unit, id))
    }
  }, []);

  useEffect(() => {
    if (showResult && !location.state?.readonly) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitTrueFalse, {
          unit,
          tutorial,
          "isRetry": location.state?.retry ? true: false,
          "timeToken": localStorage.getItem("tT"),
          "answers": answer.length !==0 && answer
        })
        dispatch(getCleanTimeToken())
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