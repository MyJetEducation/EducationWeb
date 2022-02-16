import React, {useEffect, useState} from 'react';
import RadioBlock from "../../../RadioBlock";
import ProgressPage from "../ProgressPage";
import {useDispatch, useSelector} from "react-redux";
import {currentIdSelector, validChange} from "../../../../../../store/menuSlicer";
import {useParams} from "react-router-dom";
import {setDisabledBtn} from "../../../../../../store/testSlicer";
import req from "../../../../../../utils/request";
import {configEndpoint} from "../../../../../../config";
import {useGetTimeToken} from "../../../../../Сourse/Lesson/utils/getTimeToken";


interface renderTestProps {
  content?: any,
}

const RenderTest: React.FC<renderTestProps> = ({content}) => {
  const {id, unit} = useParams<"id" | "unit">();
  const numberUnit = Number(unit?.replace("unit", ""));
  const dispatch = useDispatch();
  const currentIndex = useSelector(currentIdSelector(id as string));
  const [showResult, setShowResult] = useState(false);
  const [percent, setPercent] = useState(0);
  const [answer, setAnswer] = useState({});

  useGetTimeToken("1", numberUnit, Number(id))

  useEffect(() => {
    return () => {
      localStorage.removeItem("timeToken")
    }
  }, [])

  useEffect(() => {
    if (showResult) {
      const setResult = async () => {
        const data = await req(configEndpoint.unitTest, {
          unit: unit,
          "isRetry": false,
          "timeToken": localStorage.getItem("timeToken"),
          "answers": answer
        })
        console.log("####: data", data);
        setPercent(await data.data.unit.tasks[1].taskScore)
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
              type={"checkbox"}
            />
          )
      }
    </>
  )
}

export default RenderTest;