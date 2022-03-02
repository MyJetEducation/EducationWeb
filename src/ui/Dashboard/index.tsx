import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../components/Container";
import {TutorialBlock} from "./components/TutorialBlock";
import StatsBlock from "./components/StatsBlock";
import {dataTutorialsSelector, getTutorialsAsync} from "../../store/tutorialsSlicer";

import map from './assets/map.png';

import s from './style.module.scss';
import req from "../../services/request";
import {configEndpoint} from "../../config";

const LOADING_BLOCKS = [
  {
    title: "1. Personal Finance"
  },
  {
    title: "2. Personal Finance"
  },
  {
    title: "3. Personal Finance"
  },
  {
    title: "4. Personal Finance"
  },
  {
    title: "5. Personal Finance"
  },
  {
    title: "6. Personal Finance"
  },
  {
    title: "7. Personal Finance"
  },
  {
    title: "8. Personal Finance"
  },
  {
    title: "9. Personal Finance"
  },
]

interface dashboardProps {
  name?: string,
  tutorialName?: string
}

export const DashBoard: React.FC<dashboardProps> = ({name = "Anton", tutorialName = "personal"}) => {
  const tutorials = useSelector(dataTutorialsSelector);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");

  const getUserName = async () => {
    const data = await req(configEndpoint.getUserInfo, {})
    setUserName(data.data.firstName)
  }

  useEffect(() => {
    dispatch(getTutorialsAsync())
    getUserName()
  }, []);
  return (
    <div className={s.wrap}>
      <Container>
        <h1 className={s.title}>
          {`Welcome, ${userName}`}
        </h1>
        <p className={s.subtitle}>
          Now, you are ready to start you course
        </p>
        <div className={s.inner}>
          {
            (tutorials === undefined || tutorials === null) ? (
              <>
                <div className={s.leftSide}>
                  <img className={s.maps} src={map} alt="map"/>
                  <ul className={s.loadingList}>
                    {
                      LOADING_BLOCKS.map((item, index) => (
                        <li key={index} className={s.loadingBlock}>
                          {item.title}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={s.rightSide}>
                  <StatsBlock/>
                </div>
              </>
            ) : (
              <>
                <div className={s.leftSide}>
                  <img className={s.map} src={map} alt="map"/>
                  {
                    tutorials.map((item: any, index: number) => (
                      <TutorialBlock
                        key={index}
                        tutorialName={item.tutorial}
                        index={index}
                        show={item.show}
                      />
                    ))
                  }
                </div>
                <div className={s.rightSide}>
                  <StatsBlock/>
                </div>
              </>
            )
          }
        </div>
      </Container>
    </div>
  )
}
