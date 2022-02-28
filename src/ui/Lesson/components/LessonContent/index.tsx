import React from 'react';
import {RenderText} from "../Tasks/RenderText";
import RenderTest from "../Tasks/RenderTest";
import RenderVideo from "../Tasks/RenderVideo";
import RenderCase from "../Tasks/RenderCase";
import RenderTestTrueOrFalse from "../Tasks/RenderTestTrueOrFalse";
import {RenderGame} from "../Tasks/RenderGame";

interface lessonContentProps {
  id?: string | undefined,
  data: any
}

const LessonContent: React.FC<lessonContentProps> = ({data}) => {

  switch (data.type) {
    case "text":
      return (
        <RenderText
          content={data.data}
        />
      )
    case "test":
      return (
        <RenderTest
          content={data.data}
        />
      )
    case "video":
      return (
        <RenderVideo
          content={data.data}
        />
      )
    case "case":
      return (
        <RenderCase
          content={data.data}
        />
      )
    case "testTrueOrFalse":
      return (
        <RenderTestTrueOrFalse
          content={data.data}
        />
      )
    case "game":
      return (
        <RenderGame/>
      )
    default:
      return <div/>
  }
}

export default LessonContent;