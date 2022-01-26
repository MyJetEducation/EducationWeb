import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import {Container} from "../../components/Container";
import DisciplineBlock from "./components/DisciplineBlock";
import StatsBlock from "./components/StatsBlock";

import {userRefreshTokenSelector, userTokenSelector} from "../../store/userSlicer";

import map from './assets/map.png';

import s from './style.module.scss'
import {dataDashboardSelector, getDashboardAsync, isLoadingDashboardSelector} from "../../store/dashboardSlicer";

interface dashboardProps {
  name?: string
}

export const DashBoard:React.FC<dashboardProps> = ({ name = "Anton"}) => {

  //example redux token
  // const token = useSelector(userTokenSelector);

  // const data = useSelector(dataDashboardSelector);

  const isLoading = useSelector(isLoadingDashboardSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardAsync());
  }, [])

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
        {
          isLoading ? (
            <div>...Loading</div>
          ) : (
            <>
              <div className={s.leftSide}>
                <img className={s.map} src={map} alt="map"/>
                <DisciplineBlock/>
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
