import React, {useMemo} from 'react';
import {LESSON_CONTENT} from "../../constans";
import {RenderText} from "../../../../FreeLesson/components/QuestionContent/components/RenderText";
import RenderTest from "../../../../FreeLesson/components/QuestionContent/components/RenderTest";
import RenderVideo from "../../../../FreeLesson/components/QuestionContent/components/RenderVideo";
import RenderCase from "../../../../FreeLesson/components/QuestionContent/components/RenderCase";
import RenderTestTrueOrFalse from "../../../../FreeLesson/components/QuestionContent/components/RenderTestTrueOrFalse";
import {RenderGame} from "../../../../FreeLesson/components/QuestionContent/components/RenderGame";
import req from "../../../../../utils/request";
import {configEndpoint} from "../../../../../config";

interface lessonContentProps {
  id: string | undefined,
  index: number,
  menu: any
}

const LessonContent: React.FC<lessonContentProps> = ({id , index, menu}) => {



  const dataQuest = useMemo(() => (
    LESSON_CONTENT[id as keyof typeof LESSON_CONTENT].description
  ),[id]);

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
        <RenderGame/>
      )
    default:
      return <div/>
  }
}

export default LessonContent;