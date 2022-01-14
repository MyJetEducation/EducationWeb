import React, {useEffect, useState} from 'react';
import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";
import {ARRAY_ANSWERS} from "../../../../constans";

interface renderTestTrueOrFalse {
  content: any
}

const RenderTestTrueOrFalse:React.FC<renderTestTrueOrFalse> = ({content}) => {

  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const [answer, setAnswer] = useState({});


  const CheckAnswers = () => {
    const values = Object.values(ARRAY_ANSWERS);
    const length = values.length;
    const oneAnswer = 100 / length;
    const sumPercent = values.reduce((acc: any, item) => {
      if (item) {
        acc += oneAnswer
      }
      return acc;
    }, 0)
    setPercent(sumPercent)
    // console.log("####: percent", percent);
  }

  useEffect(() => {
    if (showResult) {
      setPercent(87)
      //TODO: запустить проверку ответов
    }
  }, [showResult])

  return (
    <div>
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