import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Board from './components/Board';
import FinishGame from "./components/FinishGame";

import req from "../../../../../services/request";
import {configEndpoint} from "../../../../../config";
import {setDisabledBtn} from "../../../../../store/testSlicer";
import {getCleanTimeToken, getTimeTokenAsync, timeTokenSelector} from "../../../../../store/timeTokenSlicer";

import icon1 from './assets/images/1.png';
import icon2 from './assets/images/2.png';
import icon3 from './assets/images/3.png';
import icon4 from './assets/images/4.png';
import icon5 from './assets/images/5.png';
import icon6 from './assets/images/6.png';

import s from './style.module.scss';

const cardIds = [
  {
    value: 1,
    src: icon1
  },
  {
    value: 2,
    src: icon2
  },
  {
    value: 3,
    src: icon3
  },
  {
    value: 4,
    src: icon4
  },
  {
    value: 5,
    src: icon5
  },
  {
    value: 6,
    src: icon6
  },
  {
    value: 7,
    src: icon1
  },
  {
    value: 8,
    src: icon2
  },
  {
    value: 9,
    src: icon3
  },
  {
    value: 10,
    src: icon4
  },
  {
    value: 11,
    src: icon5
  },
  {
    value: 12,
    src: icon6
  },
];

export const RenderGame = () => {
  const [isTry, setTry] = useState<number>(() => {
    return localStorage.getItem("value") ? Number(localStorage.getItem("value")) : 0;
  });
  //:TODO создать редакс для отправки возможных попыток в key-value, в случае если юзер захочет поиграть еще то count попыток обнуляется
  const {id, unit, tutorial} = useParams<"id" | "unit" | "tutorial">();
  const location: any = useLocation();
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch();
  const fetchResult = async () => {
    const data = await req(configEndpoint.unitGame, {
      unit,
      tutorial,
      "isRetry": location.state?.retry ? true : false,
      "timeToken": localStorage.getItem("tT"),
      "passed": localStorage.getItem("value") === "1" ? true : false
    })
    return data
  }
  useEffect(() => {
    dispatch(setDisabledBtn(true))
    if (showResult) {
      dispatch(setDisabledBtn(false))
    }
  }, [showResult])

  useEffect(() => {
    dispatch(getTimeTokenAsync(tutorial, unit, id))
    return () => {
      fetchResult()
      localStorage.removeItem("value")
      localStorage.removeItem("tT")
    }
  }, [])

  const handleFinish = (val: boolean) => {
    if (val) {
      setTry(prevState => prevState + 1);
    }
  }

  const handleReload = () => {
    setShowResult(false)
  }

  useEffect(() => {
    localStorage.setItem("value", String(isTry));
  }, [isTry])

  return (
    <div className={s.wrap}>
      {
        showResult ? (
          <FinishGame
            onReload={handleReload}
            count={isTry}
          />
        ) : (
          <Board
            onFinish={handleFinish}
            onChange={setShowResult}
            cardIds={cardIds}
          />
        )
      }

    </div>
  )
}
