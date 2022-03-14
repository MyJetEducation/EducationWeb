import React, {useState} from 'react';
import cn from 'classnames';
import s from './style.module.scss';

export const RenderText = ({content, title, clickNext, clickProgress}: any) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const handleClickNextQuestion = () => {
    clickNext && clickNext()
    clickProgress((prevState: any) => prevState + 1)
  }

  const handleShowClick = (index: number) => {
    if (index === 1) {
      setShow2(true)
      setShow1(false)
      clickProgress((prevState: any) => prevState + 1)
    } else if ( index === 2) {
      setShow3(true)
      setShow2(false)
      clickProgress((prevState: any) => prevState + 1)
    } else if ( index === 3) {
      setShow4(true)
      setShow3(false)
      clickProgress((prevState: any) => prevState + 1)
    } else if (index === 4) {
      setShow5(true)
      setShow4(false)
      clickProgress((prevState: any) => prevState + 1)
    }
  }

  const handleStart = () => {
    setShow(true)
    setShow1(true)
    clickProgress((prevState: any) => prevState + 1)
  }
  
  return (
    <div className={s.wrap}>

      <h1 className={s.title}>{title}</h1>

      <div className={cn(s.startTitle, {
        [s.active]: show
      })}>
        <p>
          {content[0].html_text_title}
        </p>
        <button onClick={handleStart} className={s.btn}>I want to know</button>
      </div>
      
      

      <div className={s.list}>
        {
          content.map((item: any, index: number) => {
            if (index !== 0 && index !== 5) {
              return (
                <div
                  className={cn(s.inner, {
                    [s.active1]: index === 1 && show1,
                    [s.active2]: index === 2 && show2,
                    [s.active3]: index === 3 && show3,
                    [s.active4]: index === 4 && show4,
                    [s.active5]: index === 5 && show5,
                  })}
                  key={index}
                >
                  <div
                    className={s.item}
                  >
                    <p key={index}>
                      {item.html_text}
                    </p>
                  </div>
                  <button onClick={() => handleShowClick(index)} className={s.itemBtn}>Ok</button>
                </div>
              )
            } else if (index === 5) {
              return (
                <div
                  className={cn(s.inner, {
                    [s.active5]: index === 5 && show5,
                  })}
                  key={index}
                >
                  <div
                    className={s.item}
                  >
                    <p key={index}>
                      {item.html_text}
                    </p>
                  </div>
                </div>
              )
            }

          })
        }
      </div>
      {
        show5 && (
          <button className={s.nextButton} onClick={handleClickNextQuestion}>
            NEXT
          </button>
        )
      }

    </div>  
  )
}
