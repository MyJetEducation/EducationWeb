import React, {useEffect, useState} from 'react';
import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";
import {useDispatch, useSelector} from "react-redux";
import {currentIdSelector, validChange} from "../../../../../../store/menuSlicer";
import {useParams} from "react-router-dom";
import {setDisabledBtn} from "../../../../../../store/testSlicer";
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";


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

  const getTimeToken = async () => {
    const data = await req(configEndpoint.taskTime, {
      "tutorial": "1",
      "unit": 1,
      "task": 2
    })
    localStorage.setItem("timeToken", data.data)
  }

  useEffect(() => {
    getTimeToken()
    return () => {
      localStorage.removeItem("timeToken")
    }
  }, [])

  useEffect(() => {
    if (showResult) {
      const setResult = async () => {
        const data = await req(configEndpoint.unit1Test, {
          "isRetry": false,
          "timeToken": localStorage.getItem("timeToken"),
          "answers": answer
        })
        setPercent(await data.data.unit.testScore)
      }

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
              type={"radio"}
            />
          )
      }
    </>
  )
}

export default RenderTest;