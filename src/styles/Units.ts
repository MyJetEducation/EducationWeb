import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { FlexContainer } from './FlexContainer';

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

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #374dfb;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: transform 0.4s ease;
  }

  &:after {
    ${(props) =>
      !props.isOpen &&
      css`
        transform: translateY(-50%) rotate(90deg);
      `}
  }
`;

export const UnitsListWrapper = styled(FlexContainer)`
  transform: translateY(-32px);
  border-top: none;
`;

export const UnitListItem = styled(FlexContainer)<{
  isActive?: boolean;
  isFirstItem?: boolean;
}>`
  position: relative;
  &:not(&:last-of-type) {
    &:after {
      display: ${(props) => (props.isActive ? 'none' : 'block')};
      content: '';
      bottom: 0;
      left: 20px;
      width: calc(100% - 40px);
      height: 1px;
      background: #e0e5eb;
      position: absolute;
    }
  }

  ${(props) =>
    props.isActive &&
    css`
      border: 2px solid #374dfb;
      //box-shadow: 0 0 0 2px #374dfb;
      border-radius: 32px;
    `}

  ${(props) =>
    props.isActive &&
    props.isFirstItem &&
    css`
      padding-top: 44px;
      border-top: none;
      border-radius: 0 0 32px 32px;
      margin-top: -44px;
    `}
`;
