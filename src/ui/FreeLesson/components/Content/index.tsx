import React from 'react';
import {RenderText} from "../Tasks/RenderText";
import RenderTest from "../Tasks/RenderTest";
import RenderVideo from "../Tasks/RenderVideo";
import RenderCase from "../Tasks/RenderCase";
import RenderTestTrueOrFalse from "../Tasks/RenderTestTrueOrFalse";
import {RenderGame} from "../Tasks/RenderGame";

interface lessonContentProps {
  data: any,
  clickNext: any,
  clickProgress: any
}

const Content: React.FC<lessonContentProps> = ({data, clickNext, clickProgress}) => {
  switch (data.description.type) {
    case "text":
      return (
        <RenderText
          clickNext={clickNext}
          clickProgress={clickProgress}
          title={data.title}
          content={data.description.data}
        />
      )
    case "test":
      return (
        <RenderTest
          title={data.title}
          clickNext={clickNext}
          clickProgress={clickProgress}
          content={data.description.data}
        />
      )
    case "video":
      return (
        <RenderVideo
          clickProgress={clickProgress}
          clickNext={clickNext}
        />
      )
    case "case":
      return (
        <RenderCase
          clickNext={clickNext}
          clickProgress={clickProgress}
          content={data.description.data}
        />
      )
    case "testTrueOrFalse":
      return (
        <RenderTestTrueOrFalse
          title={data.title}
          clickNext={clickNext}
          clickProgress={clickProgress}
          content={data.description.data}
        />
      )
    case "game":
      return (
        <RenderGame
          clickProgress={clickProgress}
          clickNext={clickNext}
        />
      )
    default:
      return <div/>
  }
}

export default Content;