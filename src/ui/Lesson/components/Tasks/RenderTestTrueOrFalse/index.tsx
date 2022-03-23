import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import RadioBlock from "../../RadioBlock";
import ProgressPage from "../../ProgressPage";

import {setDisabledBtn} from "../../../../../store/testSlicer";
import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {getCleanTimeToken, getTimeTokenAsync} from "../../../../../store/timeTokenSlicer";
import {Button} from "../../../../components/Button";

interface renderTestTrueOrFalse {
  content: any
}

const RenderTestTrueOrFalse:React.FC<renderTestTrueOrFalse> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const [isShowSubmitButton, setShowSubmitButton] = useState(false);
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const location: any = useLocation();
  useEffect(() => {
    if (!location.state?.readonly) {
      dispatch(getTimeTokenAsync(tutorial, unit, id))
    } else {
      dispatch(setDisabledBtn(false))
    }
  }, [location.state?.readonly])

  useEffect(() => {
    if (!showResult) {
      dispatch(setDisabledBtn(true))
    } else {
      dispatch(setDisabledBtn(false))
    }
  }, [showResult]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("tT")
      dispatch(getCleanTimeToken());
    }
  }, [])

  const handleClickShowResult = () => {
    if (!location.state?.readonly) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitTrueFalse, {
          unit,
          tutorial,
          "isRetry": location.state?.retry ? true: false,
          "timeToken": localStorage.getItem("tT"),
          "answers": answer
        })
        setShowResult(true)
        setPercent(data.data.unit.tasks[4].taskScore);
        dispatch(setDisabledBtn(false))
      }
      setResult()
    }
  }

  return (
    <div>
      {
        showResult ? (
          <ProgressPage percent={percent}/> ) : (
            <>
              <RadioBlock
                size="small"
                selectedAll={(val: boolean) => setShowSubmitButton(val)}
                content={content}
                onChangeTrueFalse={setAnswer}
                type={"radio"}
              />
              <Button
                onClick={handleClickShowResult}
                variant="bgBlue"
                disabled={!isShowSubmitButton}
              >
                Submit
              </Button>
            </>
        )
      }
    </div>
  )
}

export default RenderTestTrueOrFalse;