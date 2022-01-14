import React, {useEffect, useState} from 'react';
import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";
import {ARRAY_ANSWERS} from "../../../../constans";
import {checkAnswers, similarResult} from "../../../../../../utils";

interface renderTestProps {
  content?: any,
}

const RenderTest: React.FC<renderTestProps> = ({content}) => {
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const [answer, setAnswer] = useState({});

  console.log("####: answer", answer);

  useEffect(() => {
    if (showResult) {
      const result = similarResult(answer, ARRAY_ANSWERS)
      const percentAll = checkAnswers(result)

      setPercent(percentAll)
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