import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ButtonWithoutStyles } from '../styles/ButtonWithoutStyles';
import { FlexContainer } from '../styles/FlexContainer';
import { PrimaryTextParagraph, PrimaryTextSpan } from '../styles/TextsElements';
import { TitleH3 } from '../styles/Titles';

interface AccordionItemProps {
  title: string;
  description: string;
  isAccent?: boolean;
}

const AccordionItem = ({
  title,
  description,
  isAccent,
}: AccordionItemProps) => {
  const [on, toggle] = useState(false);

  const handleToggle = () => {
    toggle(!on);
  };

  return (
    <AccordionItemWrap width="100%" flexDirection="column" padding="20px 0">
      <AccordionButton onClick={handleToggle}>
        <FlexContainer flex="1" marginRight="12px">
          <TitleH3 color={isAccent ? '#374DFB' : '#000'} textAlign="left">
            {title}
          </TitleH3>
        </FlexContainer>
        <AccordionOpenBtn isOpen={on} isAccent={!!isAccent} />
      </AccordionButton>
      {on && (
        <PrimaryTextParagraph
          fontSize="18px"
          lineHeight="28px"
          fontWeight={500}
          color="#777C85"
        >
          {description || 'test'}
        </PrimaryTextParagraph>
      )}
    </AccordionItemWrap>
  );
};

export default AccordionItem;

const AccordionItemWrap = styled(FlexContainer)`
  border-bottom: 1px solid #e0e5eb;
`;

const AccordionButton = styled(ButtonWithoutStyles)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionOpenBtn = styled.div<{ isOpen: boolean; isAccent: boolean }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${(props) => (props.isAccent ? '#374DFB' : '#000')};
  box-sizing: border-box;
  background-color: ${(props) =>
    props.isOpen ? (props.isAccent ? '#374DFB' : '#000') : ''};
  transition: all 0.4s ease;
  &:before,
  &:after {
    content: '';
    display: block;
    width: 16px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2px;
    background-color: ${(props) =>
      props.isOpen ? '#fff' : props.isAccent ? '#374DFB' : '#000'};
  }
  &:after {
    transform: ${(props) =>
      `translate(-50%, -50%) ${!props.isOpen && 'rotate(90deg)'}`};
    transition: all 0.4s ease;
  }

  ${(props) => props.isOpen && css``}
`;
