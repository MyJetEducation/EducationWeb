import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";

import {ARRAY_ANSWERS2} from "../../../../constans";

import {checkAnswers, similarResult} from "../../../../../../utils";

import {setDisabledBtn} from "../../../../../../store/testSlicer";
import {currentIdSelector, validChange} from "../../../../../../store/menuSlicer";
import {setStartTimer} from "../../../../../../store/timerSlicer";


interface   renderTestTrueOrFalse {
  content: any
}

const RenderTestTrueOrFalse:React.FC<renderTestTrueOrFalse> = ({content}) => {
  const {id} = useParams<"id">();
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const currentIndex = useSelector(currentIdSelector(id as string));

  useEffect(() => {
    dispatch(setStartTimer());
  }, []);

  useEffect(() => {
    if (showResult) {
      const result = similarResult(answer, ARRAY_ANSWERS2)
      const percentAll = checkAnswers(result)
      setPercent(percentAll)
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
            onChange={setAnswer}
          />

        )
      }
    </div>
  )
}

export default RenderTestTrueOrFalse;