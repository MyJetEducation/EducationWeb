import { endBatch } from 'mobx/dist/internal';
import React, { useEffect, useState } from 'react';
import { ColorVarsEnum } from '../enums/ColorVarsEnum';
import { PrimaryTextSpan } from '../styles/TextsElements';

interface Props {
  onEnd: () => void;
}
const ResendCountdown = ({ onEnd }: Props) => {
  const [count, setCount] = useState<number>(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count > 0) {
        setCount((prev) => prev - 1);
      } else {
        onEnd();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <PrimaryTextSpan
      fontSize="16px"
      fontWeight={400}
      color={`var(${ColorVarsEnum.Primary})`}
    >
      00:{count > 9 ? count : '0' + count}
    </PrimaryTextSpan>
  );
};

export default ResendCountdown;
