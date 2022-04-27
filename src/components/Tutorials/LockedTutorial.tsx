import React from 'react';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';

interface Props {
  title: string;
  number: number;
}
const LockedTutorial = ({ title, number }: Props) => {
  return (
    <FlexContainer
      width="100%"
      marginBottom="24px"
      backgroundColor="#E0E5EB"
      borderRadius="32px"
      padding="36px 32px"
    >
      <PrimaryTextSpan
        color="#000"
        fontWeight={500}
        lineHeight="26px"
        fontSize="20px"
      >
        {`${number}. ${title}`}
      </PrimaryTextSpan>
    </FlexContainer>
  );
};

export default LockedTutorial;
