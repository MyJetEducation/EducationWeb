import React, { useState }  from 'react';
import Board from './components/Board'

import s from './style.module.scss';

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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

