import React, {useMemo} from 'react';
import {
  LESSON_CONTENT_UNIT_1,
  LESSON_CONTENT_UNIT_2,
  LESSON_CONTENT_UNIT_3,
  LESSON_CONTENT_UNIT_4, LESSON_CONTENT_UNIT_5
} from "../../constans";
import {useParams} from "react-router-dom";
import RenderTry from "./Render";
import RetryTest from "./Test";

const Retry = () => {
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const data: any = useMemo(() => {
    switch (unit) {
      case "unit1":
        return LESSON_CONTENT_UNIT_1[id as keyof typeof LESSON_CONTENT_UNIT_1]
      case "unit2":
        return LESSON_CONTENT_UNIT_2[id as keyof typeof LESSON_CONTENT_UNIT_2]
      case "unit3":
        return LESSON_CONTENT_UNIT_3[id as keyof typeof LESSON_CONTENT_UNIT_3]
      case "unit4":
        return LESSON_CONTENT_UNIT_4[id as keyof typeof LESSON_CONTENT_UNIT_4]
      case "unit5":
        return LESSON_CONTENT_UNIT_5[id as keyof typeof LESSON_CONTENT_UNIT_5]
      default:
        return {}
    }
  }, [id]);
  return (
    <RetryTest
      data={data}
    />
  )
}

export default Retry;