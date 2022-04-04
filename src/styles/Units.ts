import { css } from '@emotion/core';
import styled from '@emotion/styled';

interface UnitListMArkerProps {
  isOpen: boolean;
  marginRight?: string;
}
export const UnitListMArker = styled.span<UnitListMArkerProps>`
  display: flex;
  width: 10px;
  height: 10px;
  position: relative;
  margin-right: ${(props) => props.marginRight || '12px'};

  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #374DFB;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: transform 0.4s ease;
  }

  &:after {
    ${props => !props.isOpen && css`
      transform: translateY(-50%) rotate(90deg);
    `}
  }
`;
