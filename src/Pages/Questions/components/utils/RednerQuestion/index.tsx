import React, {useState} from "react";

import RadioQuestion from "../../RadioQuestion";
import {CheckQuestion} from "../../CheckQuestion";
import {QUESTIONS} from "../../constans/QUESTIONS";
import {RangeQuestion} from "../../RangeQuestion";

const RenderQuestion = ({qNumber, onActive}: any) => {
  const [answer, setAnswer] = useState<Array<string | number>>([]);
  const handleQuestionChange = (number: any, value: any) => {
    console.log("####: number", number);
    setAnswer(prevState => {
      const copyState = [...prevState]
      if (copyState[number] || copyState[number] === "") {
        copyState[number] = value
      } else {
        copyState.push(value)
      }
      return copyState;
    })
  }

  const type = QUESTIONS[qNumber].answer.type;
  switch (type) {
    case "radio":
      return (
        <RadioQuestion
          key={qNumber}
          data={QUESTIONS[qNumber].answer.data}
          onChange={(val: any) => handleQuestionChange(qNumber, val)}
          onActive={onActive}
          additional={QUESTIONS[qNumber].answer.additional}
          defaultValue={(answer[qNumber] as string )}
        />
      )
    case "checkbox":
      return (
        <CheckQuestion
          key={qNumber}
          data={QUESTIONS[qNumber].answer.data}
          onChange={(val: any) => handleQuestionChange(qNumber, val)}
        />
      )
    case "range":
      return (
        <RangeQuestion
          defaultValue={(answer[qNumber] as number)}
          onChange={(val: any) => handleQuestionChange(qNumber, val)}
          onActive={onActive}
        />
      )
    default:
      return <div/>
  }
}


export default React.memo(RenderQuestion);