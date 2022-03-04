import React, {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Container} from "../components/Container";

import {
  currentIdSelector,
  progressMenuAsync,
  progressMenuSelector,
  setProgressMenuAsync
} from "../../store/progressMenuSlicer";

import {useNavigate, useParams} from "react-router-dom";
import {
  TUT_1_LESSON_CONTENT_UNIT_1,
  TUT_1_LESSON_CONTENT_UNIT_2,
  TUT_1_LESSON_CONTENT_UNIT_3,
  TUT_1_LESSON_CONTENT_UNIT_4,
  TUT_1_LESSON_CONTENT_UNIT_5
} from "./constans";
import {testSelector} from "../../store/testSlicer";
import LessonContent from "./components/LessonContent";
import {ProgressMenu} from "./components/ProgressMenu";
import {QuestionFooter} from "./components/QuestionFooter";
import {useLocationCheck} from "../../services/useLocationCheck";

import s from './style.module.scss';

export const Lesson = () => {
  const dispatch = useDispatch();
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const navigate = useNavigate();
  const menu = useSelector(progressMenuSelector);
  const data: any = useMemo(() => {
    switch (unit) {
      case "unit1":
        return TUT_1_LESSON_CONTENT_UNIT_1[id as keyof typeof TUT_1_LESSON_CONTENT_UNIT_1]
      case "unit2":
        return TUT_1_LESSON_CONTENT_UNIT_2[id as keyof typeof TUT_1_LESSON_CONTENT_UNIT_2]
      case "unit3":
        return TUT_1_LESSON_CONTENT_UNIT_3[id as keyof typeof TUT_1_LESSON_CONTENT_UNIT_3]
      case "unit4":
        return TUT_1_LESSON_CONTENT_UNIT_4[id as keyof typeof TUT_1_LESSON_CONTENT_UNIT_4]
      case "unit5":
        return TUT_1_LESSON_CONTENT_UNIT_5[id as keyof typeof TUT_1_LESSON_CONTENT_UNIT_5]
      default:
        return {}
    }
  }, [unit, id]);
  const allData: any = useMemo(() => {
    switch (tutorial) {
      case "PersonalFinance":
        return data;
      case "BehavioralFinance":
        return data
    }
  }, [tutorial]);

  const currentIndex = useSelector(currentIdSelector(id as string))
  const disabled = useSelector(testSelector);

  const nextQuestion = useMemo(() => {
    const index = currentIndex + 1;
    if (index !>= menu.data.length) {

    } else {
      return menu.data[index].id
    }
  }, [menu, currentIndex]);

  useEffect(() => {
    dispatch(progressMenuAsync(unit, tutorial))
  }, [])

  const retry = useLocationCheck(menu.data, tutorial as string, id, unit, `${unit}/${id}/summary`);

  const handleClickNextQuestion = () => {
    dispatch(setProgressMenuAsync(currentIndex, tutorial, unit));
    if (retry) {
      navigate("/dashboard", {state: null})
    } else {
      if (currentIndex === menu.data.length - 1) {
        navigate(`/${tutorial}/${unit}/${id}/summary`);
      } else {
        navigate(`/${tutorial}/${unit}/${nextQuestion}`);
      }
    }
  }
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
        btnName={(retry || retry) ? "Go Back" : "NextTask"}
        length={menu.data.length}
        index={currentIndex}
        id={id}
      />
    </Container>
  )
}
