import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import cn from 'classnames';

import {QuestionFooter} from "../QuestionFooter";
import {Container} from "../../Container";

import {progressMenuSelector} from "../../../store/progressMenuSlicer";
import req from "../../../utils/request";
import {configEndpoint} from "../../../config";

import map from './assets/source_map.png';
import achievementIcon from './assets/achiv.svg';

import s from './style.module.scss';

export const SummaryBord = () => {
  const menu = useSelector(progressMenuSelector);
  const navigate = useNavigate();

  const [result, setResult] = useState<any>({});

  const [isCaseTrue, setCaseTrue] = useState(false);

  const getResult = async () => {
    const data = await req(configEndpoint.unitSummary, {
      unit: 1
    })
    setResult(data)
  }
  useEffect(() => {
    getResult()
  }, [])

  useEffect(() => {
    if (result.data?.caseProgress === 100) {
      setCaseTrue(true)
    } else {
      setCaseTrue(false)
    }
  }, [isCaseTrue])

  // useEffect( () => {
  //   const getMenu = async () => {
  //     const data = await req(configEndpoint.getKeyValue, {
  //       "keys": [
  //         "progressMenuUnit1"
  //       ]
  //     });
  //     // console.log("####: data", data);
  //     if (!data) {
  //       navigate("/lessons/1")
  //     }
  //   }
  //   getMenu()
  // }, []);
  //
  // useEffect(() => {
  //   localStorage.setItem("key", JSON.stringify(menu));
  // }, [menu])

  return (
    <Container>
      <div className={s.content}>
        <div className={s.leftSide}>
          <h1 className={s.title}>
            Congratulations! <br/>
            You’ve finished your first unit
          </h1>
          <p className={s.descr}>
            We hope you enjoyed it, to continue learning create an account
          </p>
          <img src={map} alt="map"/>
          <div className={s.head}>
            <p className={s.plus}>+</p>
            <p className={s.achievementsText}>Summary</p>
            <div className={s.line}/>
          </div>
          <div className={s.score}>

            <div className={s.testScore}>
              <div className={s.num}>
                {`${result.data?.unit.testScore}%`}
              </div>
              <div className={s.text}>
                Your Test score
              </div>
            </div>
            <div className={s.testScore}>
              <div className={s.num}>
                {`${result.data?.trueFalseProgress}%`}
              </div>
              <div className={s.text}>
                True/False
              </div>
            </div>
            <div className={s.testScore}>
              <div className={cn(s.num, {
                [s.numBad]: isCaseTrue
              })}>
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8L9 15L22 2" stroke="#0BCA1E" strokeWidth="4"/>
                </svg>

              </div>
              <div className={cn(s.text, {
                [s.textBad]: isCaseTrue
              })}>
                Case
              </div>
            </div>
          </div>

          <div className={s.achievements}>
            <div className={s.head}>
              <p className={s.plus}>+</p>
              <p className={s.achievementsText}>New achievements</p>
              <div className={s.line}/>
            </div>
            <div className={s.achievementsList}>
              <div className={s.achievementsItem}>
                <div className={s.achiv}>
                  <img src={achievementIcon} alt="achievement"/>
                </div>
                <p className={s.achivDescr}>
                  хороший старт
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <QuestionFooter
        btnName={"Continue"}
        onClickNext={() => navigate("/dashboard")}
        index={menu.length}
        id={menu.length}
        length={menu.length}
        time={"Completed"}
      />

    </Container>

  )
}