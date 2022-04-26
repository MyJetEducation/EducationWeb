import styled from '@emotion/styled';
import React from 'react';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextSpan } from '../styles/TextsElements';

interface Props {
  label?: string;
  margin?: string;
}

const Divider = ({ label = '', margin = '' }: Props) => {
  return (
    <DividerLine
      width="100%"
      position="relative"
      minHeight="1px"
      justifyContent="center"
      margin={margin}
    >
      {label && (
        <FlexContainer backgroundColor="#fff" padding="0 24px" zIndex="1">
          <PrimaryTextSpan color="#777C85" fontSize="12px" fontWeight={400}>
            {label}
          </PrimaryTextSpan>
        </FlexContainer>
      )}
    </DividerLine>
  );
};

export default Divider;

const DividerLine = styled(FlexContainer)`
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background: #e0e5eb;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 0;
  }
`;
