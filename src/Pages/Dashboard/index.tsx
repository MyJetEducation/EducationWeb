import React from 'react';

import {Container} from "../../components/Container";
import DisciplineBlock from "./components/DisciplineBlock";
import StatsBlock from "./components/StatsBlock";

import map from './assets/map.png';

import s from './style.module.scss'

interface dashboardProps {
  name?: string
}

export const DashBoard:React.FC<dashboardProps> = ({ name = "Anton"}) => {
  return (
    <div className={s.wrap}>

      <Container>
        <h1 className={s.title}>
          {`Welcome, ${name}`}
        </h1>
        <p className={s.subtitle}>
          Now, you are ready to start you course
        </p>


      <div className={s.inner}>

        <div className={s.leftSide}>
          <img className={s.map} src={map} alt="map"/>
          <DisciplineBlock/>
        </div>
        <div className={s.rightSide}>
          <StatsBlock/>
        </div>
      </div>

      </Container>
    </div>
  )
}
