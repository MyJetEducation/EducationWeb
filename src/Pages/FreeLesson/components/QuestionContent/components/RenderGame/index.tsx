import React, { useState }  from 'react';
import Board from './components/Board';

import icon1 from './assets/images/1.png'
import icon2 from './assets/images/2.png'
import icon3 from './assets/images/3.png'
import icon4 from './assets/images/4.png'
import icon5 from './assets/images/5.png'
import icon6 from './assets/images/6.png'

import s from './style.module.scss';

const cardIds = [
  {
    value: 1,
    src: icon1
  },
  {
    value: 2,
    src: icon2
  },
  {
    value: 3,
    src: icon3
  },
  {
    value: 4,
    src: icon4
  },
  {
    value: 5,
    src: icon5
  },
  {
    value: 6,
    src: icon6
  },
  {
    value: 7,
    src: icon1
  },
  {
    value: 8,
    src: icon2
  },
  {
    value: 9,
    src: icon3
  },
  {
    value: 10,
    src: icon4
  },
  {
    value: 11,
    src: icon5
  },
  {
    value: 12,
    src: icon6
  },
];
export function RenderGame() {

  const [moves, setMoves] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem('bestScore') || '0') || Number.MAX_SAFE_INTEGER
  )
  const finishGameCallback = () => {
    const newBestScore = moves < bestScore ? moves : bestScore
    setBestScore(newBestScore)
    localStorage.setItem('bestScore', '' + newBestScore)
  }

  return (
    <div className={s.wrap}>
      <Board
        setMoves={setMoves}
        finishGameCallback={finishGameCallback}
        cardIds={cardIds}
      />
    </div>
  )
}

