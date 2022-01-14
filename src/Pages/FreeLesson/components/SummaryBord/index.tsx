import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ProgressMenu} from "../ProgressMenu";
import {QuestionFooter} from "../QuestionFooter";
import {Container} from "../../../../components/Container";
import Breadcrumbs from "../../../../components/Breadcrumbs";

import map from '../../../OnBoarding/assets/source_map.png';

import achiv from './assets/achiv.svg';

import s from './style.module.scss';

const SummaryBord = () => {

  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data: any = localStorage.getItem("key");
    if (!data) {
      navigate("/quest/lessons/1")
    } else {
      setMenu(JSON.parse(data))
    }

  }, []);


  const handleRegisterNavigate = () => {
    navigate('/register')
  }

  return (
    <Container>
      <Breadcrumbs questionName={menu}/>

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

          <div className={s.score}>
            <div className={s.testScore}>
              <div className={s.num}>
                90%
              </div>
              <div className={s.text}>
                Your Test score
              </div>
            </div>
            <div className={s.taskCompleted}>
              <div className={s.num}>
                {menu.length}
              </div>
              <div className={s.text}>
                Tasks completed
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
                  <img src={achiv} alt="achiv"/>
                </div>
                <p className={s.achivDescr}>
                  хороший старт
                </p>
              </div>
            </div>
          </div>

        </div>
        <ProgressMenu
          menu={menu}
          id={menu.length}
          index={menu.length}
          length={menu.length}
        />
      </div>

      <QuestionFooter
        btnName={"Create an account"}
        onClickNext={() => navigate("/register")}
        index={menu.length}
        id={menu.length}
        length={menu.length}
        time={"Completed"}
      />

    </Container>

  )
}

export default SummaryBord;