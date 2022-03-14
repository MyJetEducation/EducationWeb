import React from 'react';

import s from './style.module.scss'
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

const FreeStart = () => {
  const navigate = useNavigate();
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Onboarding & world intro</h2>
      <p className={s.text}>
        Без знаний мир вокруг кажется темным. Но узнавая что-то новое, обучаясь чему-то новому, мы изменяем мир вокруг нас, он начинает играть новыми красками. Он изменяется буквально на глазах.
        Посмотрите, как это работает.
      </p>
      <Button onClick={() => navigate("/free/1")}>
        Start free Unit
      </Button>
    </div>
  )
}

export default FreeStart;