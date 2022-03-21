import React, {useEffect, useState} from 'react';
import RadioBlock from "../../RadioBlock";
import ProgressPage from "../../ProgressPage";
import {useDispatch} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {setDisabledBtn} from "../../../../../store/testSlicer";
import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {getCleanTimeToken, getTimeTokenAsync} from "../../../../../store/timeTokenSlicer";

interface renderTestProps {
  content?: any,
}

const RenderTest: React.FC<renderTestProps> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const dispatch = useDispatch();
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const [answer, setAnswer] = useState([]);
  const location: any = useLocation();

  useEffect(() => {
    if (showResult && !location.state?.readonly) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitTest, {
          unit,
          tutorial: tutorial,
          "isRetry": location.state?.retry ? true : false,
          "timeToken": localStorage.getItem("tT"),
          "answers": answer
        })
        dispatch(getCleanTimeToken())
        setPercent(await data.data.unit.tasks[1].taskScore)
      }
      dispatch(setDisabledBtn(false))
      setResult();
    } else if (location.state?.readonly) {
      dispatch(setDisabledBtn(false))
    } else {
      dispatch(setDisabledBtn(true))
    }

  }, [showResult])

  useEffect(() => {
    if (!location.state?.retry || !location.state?.readonly) {
      dispatch(getTimeTokenAsync(tutorial, unit, id))
    }

  }, []);

  return (
    <>
      {
        showResult ? (
            <ProgressPage
              percent={percent}
            />
          )
          : (
            <RadioBlock
              selectedAll={(val: boolean) => setShowResult(val)}
              content={content}
              onChange={setAnswer}
              type={"checkbox"}
            />
          )
      }
    </>
  )
}

export default RenderTest;