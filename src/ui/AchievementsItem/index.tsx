import React from 'react';

import cn from "classnames";
import s from './style.module.scss';

interface achievementsItemProps {
  type?: string,
  icon?: any,
  name?: string,
  nameSize: "small" | "normal" | "big"
}

const AchievementsItem: React.FC<achievementsItemProps> = ({type, icon, name, nameSize}) => {
  return (
    <div className={s.achievementsItem}>
      <div className={cn(s.item, {
        [s.standard]: type === "standard",
        [s.rare]: type === "rare",
        [s.superRare]: type === "superRare",
        [s.ultraRare]: type === "ultraRare",
        [s.unique]: type === "unique"
      })}>
        <img className={s.icon} src={icon} alt={name}/>
      </div>
      <p className={cn(s.name, {
        [s.small]: nameSize === "small",
        [s.normal]: nameSize === "normal",
        [s.big]: nameSize === "big",
      })}>
        {name}
      </p>
    </div>
  )
}

export default AchievementsItem;