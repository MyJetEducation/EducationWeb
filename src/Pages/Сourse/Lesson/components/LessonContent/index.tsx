import React, {useMemo} from 'react';
import {LESSON_CONTENT_UNIT_1} from "../../constans";
import {RenderText} from "../../../../FreeLesson/components/QuestionContent/components/RenderText";
import RenderTest from "../../../../FreeLesson/components/QuestionContent/components/RenderTest";
import RenderVideo from "../../../../FreeLesson/components/QuestionContent/components/RenderVideo";
import RenderCase from "../../../../FreeLesson/components/QuestionContent/components/RenderCase";
import RenderTestTrueOrFalse from "../../../../FreeLesson/components/QuestionContent/components/RenderTestTrueOrFalse";
import {RenderGame} from "../../../../FreeLesson/components/QuestionContent/components/RenderGame";

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