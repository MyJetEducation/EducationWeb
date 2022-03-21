import React, {useEffect} from 'react';
import StatsBlock from "../StatsBlock";
import YourProgress from "../YourProgress";
import {useDispatch, useSelector} from "react-redux";
import {getStatsAsync, userTaskScoreSelector} from "../../../../store/statsBlock";

const StatsComponent = () => {
  const dispatch = useDispatch()
  const data = useSelector(userTaskScoreSelector);
  useEffect(() => {
    dispatch(getStatsAsync());
  }, []);
  return data === null ? <div>...Loading</div> : (
    <>
      <StatsBlock
        data={data}
      />
      <YourProgress
        data={data}
      />
    </>
  )
}

export default StatsComponent;