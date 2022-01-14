import React, {useMemo} from 'react';
import {ARRAY_2} from "../../constans";
import {RenderText} from "./components/RenderText";
import {RenderGame} from "./components/RenderGame";
import RenderTest from "./components/RenderTest";
import RenderVideo from "./components/RenderVideo";
import RenderCase from "./components/RenderCase";
import RenderTestTrueOrFalse from "./components/RenderTestTrueOrFalse";

const QuestionContent = ({ id }: any) => {
  const dataQuest = useMemo(() => ARRAY_2[id as keyof typeof ARRAY_2].description, [id])
  switch (dataQuest.type) {
    case "text":
      return (
        <RenderText
          content={dataQuest.data}
        />
      )
    case "test":
      return (
        <RenderTest
          content={dataQuest.data}
        />
      )
    case "video":
      return (
        <RenderVideo
          content={dataQuest.data}
        />
      )
    case "case":
      return (
        <RenderCase
          content={dataQuest.data}
        />
      )
    case "testTrueOrFalse":
      return (
        <RenderTestTrueOrFalse
          content={dataQuest.data}
        />
      )
    case "game":
      return (
        <RenderGame

        />
      )
    default:
      return <div/>
  }
}

export default React.memo(QuestionContent);