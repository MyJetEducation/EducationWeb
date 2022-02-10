import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/Container";
import {TutorialBlock} from "./components/TutorialBlock";
import StatsBlock from "./components/StatsBlock";
import map from './assets/map.png';
import {dataDashboardSelector, getDashboardAsync, isLoadingDashboardSelector} from "../../store/dashboardSlicer";
import s from './style.module.scss'
import req from "../../utils/request";
import {configEndpoint} from "../../config";

interface dashboardProps {
  name?: string
}

export const DashBoard: React.FC<dashboardProps> = ({name = "Anton"}) => {
  const data = useSelector(dataDashboardSelector);
  const isLoading = useSelector(isLoadingDashboardSelector);
  const dispatch = useDispatch();


  const fetchKeyValueMenu = async () => {
    const data = await req(configEndpoint.allKeysKeyValue, {});
    console.log("####: data", data);
  }

  useEffect(() => {
    fetchKeyValueMenu()
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
            data === null || undefined && isLoading ? (
              <div>...Loading</div>
            ) : (
              <>
                <div className={s.leftSide}>
                  <img className={s.map} src={map} alt="map"/>
                  <TutorialBlock
                    units={data?.units}
                  />
                </div>
                <div className={s.rightSide}>
                  <StatsBlock
                    testScore={data.units[0].testScore}
                    tasks={data.units[0].tasks.length}
                    skill={data.totalProgress.skill.index}
                    habit={data.totalProgress.habit.index}
                  />
                </div>
              </>
            )
          }
        </div>

      </Container>
    </div>
  )
}
