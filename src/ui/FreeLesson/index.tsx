import React, {useEffect, useMemo, useState} from 'react';

import {Container} from "../components/Container";

import {useNavigate, useParams} from "react-router-dom";
import {FREE_LESSON} from "./constans";
import Content from "./components/Content";

import s from './style.module.scss';

const FreeLesson = () => {
  const {id} = useParams<"id">();
  const navigate = useNavigate();
  const data: any = useMemo(() => FREE_LESSON[id as keyof typeof FREE_LESSON], [id]);
  const [counter, setCounter] = useState<any>(() => {
    return localStorage.getItem("fr") ? Number(localStorage.getItem("fr")) : 0
  });

  useEffect(() => {
    localStorage.setItem("fr", counter)
    progressLine(id)
  }, [counter, id])
  console.log("####: counter", counter);

  const nextQuestion = useMemo(() => {
    return Number(id) + 1
  }, [id]);

  const handleClickNextQuestion = () => {
    if (Number(id) !== 6) {
      navigate(`/free/${nextQuestion}`);
    } else {
      navigate(`/register`);
    }
  }
  
  const progressLine = (id: string | undefined) => {
    switch (id) {
      case "1":
        return localStorage.setItem("fr", JSON.stringify(0))
      case "2":
        return localStorage.setItem("fr", JSON.stringify(6))
      case "3":
        return localStorage.setItem("fr", JSON.stringify(11))
      case "4":
        return localStorage.setItem("fr", JSON.stringify(12))
      case "5":
        return localStorage.setItem("fr", JSON.stringify(18))
      case "6":
        return localStorage.setItem("fr", JSON.stringify(21))
    }
  }

  const styleLine = useMemo(() => ({
    width: `calc(100% / ${22} * ${counter})`
  }), [counter, id])

  return (
    <Container>
      <div className={s.wrap}>
        <div className={s.progress}>
          <h6 className={s.title}>Progress </h6>
          <div className={s.line}>
            <div style={styleLine} className={s.progressLine}/>
          </div>
        </div>
        <Content
          clickProgress={setCounter}
          clickNext={handleClickNextQuestion}
          data={data}
        />
      </div>
    </Container>
  )
}

export default FreeLesson