import React from 'react';

import sourceMap from './assets/source_map.png';

import s from './style.module.scss'
import {Button} from "../../components/Button";
import {useNavigate} from "react-router-dom";

const FreeLesson = () => {

  const navigate = useNavigate();

  const handleClickStartFreeLesson = () => {
    navigate('/quest/lessons/1')
  }

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>
        Onboarding & world intro
      </h1>
      <h6 className={s.subTitle}>
        How it works description.
        World intro
      </h6>
      <img src={sourceMap} alt="source map"/>
      <Button onClick={handleClickStartFreeLesson}>
        Start free Unit 1
      </Button>
    </div>
  )
}

export default FreeLesson;