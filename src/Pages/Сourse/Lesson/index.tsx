import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Container} from "../../../components/Container";

import {
  currentIdSelector,
  progressMenuAsync,
  progressMenuSelector,
  setProgressMenuAsync
} from "../../../store/progressMenuSlicer";

import {useNavigate, useParams} from "react-router-dom";
import {
  LESSON_CONTENT_UNIT_1,
  LESSON_CONTENT_UNIT_2,
  LESSON_CONTENT_UNIT_3,
  LESSON_CONTENT_UNIT_4,
  LESSON_CONTENT_UNIT_5
} from "./constans";
import {testSelector} from "../../../store/testSlicer";
import LessonContent from "./components/LessonContent";
import {ProgressMenu} from "../../../components/ProgressMenu";
import {QuestionFooter} from "../../FreeLesson/components/QuestionFooter";
import {useLocationCheck} from "../../../hooks/useLocationCheck";

import s from './style.module.scss';

export const Lesson = () => {
  const dispatch = useDispatch();
  const {id, unit} = useParams<"id" | "unit">();
  const number = unit?.replace("unit", "");
  const navigate = useNavigate();
  const menu = useSelector(progressMenuSelector);
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
  const currentIndex = useSelector(currentIdSelector(id as string))
  const disabled = useSelector(testSelector);

  const nextQuestion = useMemo(() => {
    const index = currentIndex + 1;
    if (index !>= menu.data.length) {
      // setDisabled(true)
    } else {
      return menu.data[index].id
    }
  }, [menu, currentIndex]);

  useEffect(() => {
    dispatch(progressMenuAsync(unit))
  }, [])

  const handleClickNextQuestion = () => {
    dispatch(setProgressMenuAsync(currentIndex, unit))
    if (currentIndex === menu.data.length - 1) {
      navigate("/summary");
    } else {
      navigate(`/${unit}/${nextQuestion}`);
    }
  }

  useLocationCheck(menu.data, id, unit, "summary");

  return (
    <Container>
      <div className={s.wrap}>
        <div className={s.inner}>
          <h1 className={s.title}>
            {Object.keys(data).length > 0 ? (data?.title as string) : "Not found"}
          </h1>
          <LessonContent
            data={data.description}
          />
        </div>

        <ProgressMenu
          id={id}
          length={menu.data.length}
          index={currentIndex}
          menu={menu.data}
        />
      </div>
      <QuestionFooter
        disabled={disabled}
        onClickNext={handleClickNextQuestion}
        length={menu.data.length}
        index={currentIndex}
        id={id}
      />
    </Container>
  )
}
