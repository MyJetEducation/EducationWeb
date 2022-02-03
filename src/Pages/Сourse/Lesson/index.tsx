import React, {useEffect, useMemo, useState,} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Container} from "../../../components/Container";

import {
  currentIdSelector,
  progressMenuAsync,
  progressMenuSelector,
  setProgressMenuAsync
} from "../../../store/progressMenuSlicer";

import {useNavigate, useParams} from "react-router-dom";
import {LESSON_CONTENT} from "./constans";
import {testSelector} from "../../../store/testSlicer";
import s from './style.module.scss'
import LessonContent from "./components/LessonContent";
import {ProgressMenu} from "../../../components/ProgressMenu";
import {QuestionFooter} from "../../FreeLesson/components/QuestionFooter";
import {useLocationCheck} from "../../../hooks/useLocationCheck";

export const Lesson = () => {
  const dispatch = useDispatch();
  const {id} = useParams<"id">();
  const navigate = useNavigate();

  const menu = useSelector(progressMenuSelector);
  const data = useMemo(() => LESSON_CONTENT[id as keyof typeof LESSON_CONTENT], [id]);
  const currentIndex = useSelector(currentIdSelector(id as string))
  const disabled = useSelector(testSelector);



  useEffect(() => {
    if (menu.length > 0) {
      const valid = menu.reduce((acc: any, item: any, index: any) => {
        if (item.valid === true) {
          acc = index
        }
        return acc
      }, -1);

      if (valid !== -1 && menu.length - 1 !== valid) {
        navigate(`/lesson/${menu[valid + 1].id}`)
      } else if (menu.length - 1 === valid) {
        navigate("/summary")
      } else {
        navigate(`/lesson/${menu[0].id}`)
      }
    }
  }, [id, navigate]);

  const nextQuestion = useMemo(() => {
    const index = currentIndex + 1;
    if (index >= menu.data.length) {
      // setDisabled(true)
    } else {
      return menu.data[index].id
    }
  }, [menu, currentIndex]);

  useEffect(() => {
    dispatch(progressMenuAsync())
  }, [])

  const handleClickNextQuestion = () => {
    dispatch(setProgressMenuAsync(currentIndex))
    if (currentIndex === menu.data.length - 1) {
      navigate("/summary");
    } else {
      navigate(`/lesson/${nextQuestion}`);
    }
  }

  useLocationCheck(menu.data, id, "lesson", "summary");

  return (
    <Container>
      <div className={s.wrap}>
        <div className={s.inner}>
          <h1 className={s.title}>{data.title}</h1>
          <LessonContent
            id={id}
            index={currentIndex}
            menu={menu.data}
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
