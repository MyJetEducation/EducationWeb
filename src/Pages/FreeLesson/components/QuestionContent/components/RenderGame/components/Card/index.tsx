import React from 'react';

import cn from 'classnames'
import s from './style.module.scss';


type CardProps = {
  image: any,
  onClick: (id: number) => void,
  id: number,
  isInactive: boolean,
  isFlipped: boolean,
  isDisabled: boolean
}

function Card(props: CardProps) {

  const backSide = '/images/backside.png'

  const handleClick = () => {
    !props.isFlipped && !props.isDisabled && props.onClick(props.id);
  };

  return (
    <div
      className={cn(s.card, {
        [s.isFlipped]: props.isFlipped,
        [s.isInactive]: props.isInactive
      })}
      onClick={handleClick}
    >
      <div className={s.cardFace}/>
      <div className={cn(s.cardFace, s.cardBackFace)}>
        <img src={props.image} alt="card" />
      </div>
    </div>
  )
}

export default Card
