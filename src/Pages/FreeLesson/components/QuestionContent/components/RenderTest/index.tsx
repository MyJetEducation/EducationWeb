import React, {useEffect, useState} from 'react';
import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";
import {ARRAY_ANSWERS} from "../../../../constans";
import {checkAnswers, similarResult} from "../../../../../../utils";
import {useDispatch, useSelector} from "react-redux";
import {currentIdSelector, validChange} from "../../../../../../store/menuSlicer";
import {useParams} from "react-router-dom";
import {setDisabledBtn} from "../../../../../../store/testSlicer";


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

  console.log("####: answerTest", answer);

  useEffect(() => {
    if (showResult) {
      const result = similarResult(answer, ARRAY_ANSWERS)
      const percentAll = checkAnswers(result)
      setPercent(percentAll)
      dispatch(validChange(currentIndex));
      dispatch(setDisabledBtn(false))

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