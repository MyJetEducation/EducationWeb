import React from 'react';
import play from './assets/play_btn.png';
import s from './style.module.scss';


const RenderVideo = ({clickNext, clickProgress}: any) => {

  const handleClickNext = () => {
    clickProgress && clickProgress((prevState: any) => prevState + 1)
    clickNext && clickNext()
  }

  return (
    <div className={s.wrap}>
      <div className={s.video}>
        <img src={play} alt="play btn"/>
      </div>
      <button onClick={handleClickNext} className={s.btn}>I want to know these tips</button>
    </div>
  )
}

export default RenderVideo;