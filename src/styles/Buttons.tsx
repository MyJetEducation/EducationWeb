import styled from '@emotion/styled';
import { ButtonWithoutStyles } from './ButtonWithoutStyles';

interface PrimaryButtonProps {
  padding?: string;
  backgroundColor?: string;
  width?: string;
}

export const PrimaryButton = styled(ButtonWithoutStyles)<PrimaryButtonProps>`
  padding: ${props => props.padding || '12px 16px'};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor || '#000'};
  border-radius: 12px;
  transition: background-color 0.2s ease;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  &:hover {
    background-color: #161616;
  }

  &:focus {
    background-color: #313131;
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.04);
    & span {
      color: rgba(255, 255, 255, 0.4);
    }
    & svg {
      fill: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const SecondaryButton = styled(ButtonWithoutStyles)`
  padding: 4px 8px;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:focus {
    background-color: rgba(0, 0, 0, 0.24);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.24);
  }

  &:disabled {
    background-color: rgba(255, 255, 255, 0.04);
    & span {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;
