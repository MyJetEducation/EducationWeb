import React, {useEffect, useState} from 'react';
import RadioBlock from "../../RadioBlock";
import ProgressPage from "../../ProgressPage";
import {useDispatch} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {setDisabledBtn} from "../../../../../store/testSlicer";
import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {getCleanTimeToken, getTimeTokenAsync} from "../../../../../store/timeTokenSlicer";
import {Button} from "../../../../components/Button";

interface renderTestProps {
  content?: any,
}

const RenderTest: React.FC<renderTestProps> = ({content}) => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const dispatch = useDispatch();
  const [showResult, setShowResult] = useState(false);
  const [isShowSubmitButton, setShowSubmitButton] = useState(false);
  const [percent, setPercent] = useState(0);
  const [answer, setAnswer] = useState([]);
  const location: any = useLocation();

  useEffect(() => {
    if (!showResult) {
      dispatch(setDisabledBtn(true))
    } else {
      dispatch(setDisabledBtn(false))
    }
  }, [showResult]);

  useEffect(() => {
    if (!location.state?.readonly) {
      dispatch(getTimeTokenAsync(tutorial, unit, id))
    }
   if (location.state?.readonly) {
     dispatch(setDisabledBtn(false))
   }
  }, [])

  const handleClickShowResult = () => {
    if (!location.state?.readonly) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitTest, {
          unit,
          tutorial: tutorial,
          "isRetry": location.state?.retry ? true : false,
          "timeToken": localStorage.getItem("tT"),
          "answers": answer
        })
        setShowResult(true);
        setPercent(data.data.unit.tasks[1].taskScore);
        dispatch(setDisabledBtn(false))
      }
      setResult();
    }
  }

  useEffect(() => {
    return () => {
      localStorage.removeItem("tT")
      dispatch(getCleanTimeToken());
    }
  }, [])

  return (
    <>
      {
        showResult ? (
            <ProgressPage
              percent={percent}
            />
          )
          : (
            <>
              <RadioBlock
                selectedAll={(val: boolean) => setShowSubmitButton(val)}
                content={content}
                onChange={setAnswer}
                type={"checkbox"}
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
    </>
  )
}

export default RenderTest;