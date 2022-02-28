import React from 'react';

import s from './style.module.scss';
import ProgressLine from "./components/ProgressLine";
import ContentRender from "./components/ContentRender";

const ZeroQuizLesson = () => {
  return (
    <div className={s.wrapper}>
      <ProgressLine/>
      <h1 className={s.title}>
        Tricks and hacks how to deal with your budget
      </h1>
      <ContentRender/>
    </div>
  )
}

export default ZeroQuizLesson;