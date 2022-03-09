import React, {useMemo} from 'react';
import cn from "classnames";

import check from "./assets/check.png";

import s from "./style.module.scss";

interface progressMenuProps {
  id?: any,
  index?: any,
  length?: any,
  menu?: any
}

export const ProgressMenu:React.FC<progressMenuProps> = ({id, index, length, menu}) => {
  const styleProgressLine = useMemo(() => ({
    width: `calc(100% / ${length} * ${index})`}
  ),[length, index]);
  return (
    <>
      <div className={s.wrap}>
        <div className={s.progress}>
          <div className={s.progress__inner}>
            <p className={s.progress__title}>Progress</p>
            <div className={s.progress__num}>
              <p>{id}</p>
              <p>{`/${length}`}</p>
            </div>
          </div>
          <div className={s.progress__line}>
            <div className={s.progress__line_all}/>
            <div
              className={s.progress__line_stat}
              style={styleProgressLine}
            />
          </div>
        </div>
        {
          menu.map((item: any) => (
            <div
              key={item.id}
              className={cn(s.progressItem, {
                [s.active]: item.id === id
              })}
            >
              {!item.valid ? <img src={item.icon} alt="icon"/> : <img src={check} alt="icon"/>}
              <div className={s.info}>
                <p>{item.type}</p>
                <p>{item.title}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}