import React, {useState} from 'react';
import mas1 from './assets/images/mascot-1.png';
import mas2 from './assets/images/mascot-2.png';
import cn from 'classnames'
import s from './style.module.scss';

export const RenderGame = ({clickNext, clickProgress}: any) => {
  const [variant, setVariant] = useState(false);
  const [btn, setBtn] = useState(false);
  const [show, setShow] = useState(false);
  const handleChange = (e: any) => {

    if (e.target.id === "color") {
      setBtn(true)
      setVariant(true)
    } else {
      setVariant(false)
    }
  }

  const handleClick = () => {
    setShow(true)
    clickProgress && clickProgress((prevState: any) => prevState + 1)
  }

  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        <div className={s.say}>
          {
            !show ? (
              <>
                <p>
                  “I will help you to learn all the tips, choose a special for me”
                </p>
                <div className={s.colors}>
                  <div className={s.inputWrap}>
                    <input onChange={handleChange} type="radio" name="color" id="color" className={cn(s.variant, s.pink)}/>
                    <label htmlFor="color" className={cn(s.label, s.pink)}/>
                  </div>
                  <div className={s.inputWrap}>
                    <input onChange={handleChange} type="radio" name="color" id="color2" className={cn(s.variant, s.purple)}/>
                    <label htmlFor="color2" className={cn(s.label, s.purple)}/>
                  </div>
                </div>
                <button onClick={handleClick} disabled={!btn} className={s.btn}>
                  Ok
                </button>
              </>
            ) : (
              <p>
                “Great choice! This is my favorite color! Let’s go learn!”
              </p>
            )
          }

        </div>
        {
          variant ? (
            <img className={s.mascot} src={mas1} alt="mascot"/>
          ) : (
            <img className={s.mascot} src={mas2} alt="mascot"/>
          )
        }

      </div>
      {
        show && (
          <button onClick={clickNext} className={s.goRegister}>
            Go Register
          </button>
        )
      }

    </div>
  )
}

