import React, {useEffect, useState} from 'react';
import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";
import {ARRAY_ANSWERS} from "../../../../constans";
import {checkAnswers, similarResult} from "../../../../../../utils";
import {useDispatch, useSelector} from "react-redux";
import {currentIdSelector, validChange} from "../../../../../../store/menuSlicer";
import {useParams} from "react-router-dom";
import {setDisabledBtn} from "../../../../../../store/testSlicer";
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";
import {setEndTimeAsync, setStartTimer, startTimeSelector} from "../../../../../../store/timerSlicer";


interface renderTestProps {
  content?: any,
}

const RenderTest: React.FC<renderTestProps> = ({content}) => {
  const {id} = useParams<"id">();
  const dispatch = useDispatch();
  const currentIndex = useSelector(currentIdSelector(id as string));
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const [answer, setAnswer] = useState({});
  
  console.log("####: answer", answer);

  useEffect(() => {
    dispatch(setStartTimer());
  }, []);

  const startTime = useSelector(startTimeSelector);

  useEffect(() => {
    if (showResult) {
      const result = similarResult(answer, ARRAY_ANSWERS)
      const percentAll = checkAnswers(result)
      const setResult = async () => {
        const endTime: any = new Date();
        console.log("####: configEndpoint.unit1Test", configEndpoint.unit1Test);
        const data = await req(configEndpoint.unit1Test, {
          "isRetry": true,
          "duration": endTime - startTime,
          "answers": answer
        })
        console.log("####: data", data);
      }
      setPercent(percentAll)
      dispatch(validChange(currentIndex));
      dispatch(setDisabledBtn(false))
      setResult();
    } else {
      dispatch(setDisabledBtn(true))
    }

  }, [showResult])

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
            />
          )
      }
    </>
  )
}

export default RenderTest;