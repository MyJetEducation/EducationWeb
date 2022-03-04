import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import cn from 'classnames';

import {QuestionFooter} from "../QuestionFooter";
import {Container} from "../../../components/Container";

import {progressMenuSelector} from "../../../../store/progressMenuSlicer";
import req from "../../../../services/request";
import {configEndpoint} from "../../../../config";

import map from './assets/source_map.png';
import achievementIcon from './assets/achiv.svg';

import s from './style.module.scss';

export const SummaryBord = () => {
  const {unit, tutorial} = useParams<"unit" | "tutorial">();
  const unitNumber = unit?.replace("unit", "");
  const menu = useSelector(progressMenuSelector);
  const navigate = useNavigate();

  const [result, setResult] = useState<any>({});

  const getResult = async () => {
    const data = await req(configEndpoint.unitSummary, {
      unit: unitNumber,
      tutorial
    })
    setResult(data)

  }
  useEffect(() => {
    getResult()
  }, [])
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
                {result !== undefined || null ? `${result.data?.test}%` : null}
              </div>
              <div className={s.text}>
                Your Test score
              </div>
            </div>
            <div className={s.testScore}>
              <div className={s.num}>
                {`${result.data?.trueFalse}%`}
              </div>
              <div className={s.text}>
                True/False
              </div>
            </div>
            <div className={s.testScore}>
              <div className={s.num}>
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8L9 15L22 2" stroke="#0BCA1E" strokeWidth="4"/>
                </svg>

              </div>
              <div className={s.text}>
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