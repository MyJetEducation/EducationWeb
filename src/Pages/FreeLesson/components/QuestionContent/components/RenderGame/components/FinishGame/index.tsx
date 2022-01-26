import React, {useEffect, useState} from 'react';

import s from './style.module.scss'
import {Button} from "../../../../../../../../components/Button";

const FinishGame: React.FC<{count: number, onReload: () => void}> = ({ count, onReload}) => {
  const [disabled, setDisabled] = useState(false);

  const handleResetGame = () => {
    onReload && onReload();
  }

  useEffect(() => {
    if ( count === 3) {
      setDisabled(true)
    }
  }, [count])

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>
        Congratulations!
      </h1>
      <p className={s.description}>
        You can try playing the game again
      </p>
      <Button
        onClick={handleResetGame}
        disabled={disabled}
        variant="bgBlue"
        size="large"
      >
        {
          `${count}/3 Play Again`
        }
      </Button>
    </div>
  )
}

export default FinishGame;