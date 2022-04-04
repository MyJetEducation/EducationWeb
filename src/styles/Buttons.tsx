import styled from '@emotion/styled';
import { ButtonWithoutStyles } from './ButtonWithoutStyles';
import IconBtnArrow from "../assets/images/icon-btn-arrow.png";
interface PrimaryButtonProps {
  padding?: string;
  backgroundColor?: string;
  width?: string;
}

export const PrimaryButton = styled(ButtonWithoutStyles)<PrimaryButtonProps>`
  padding: ${(props) => props.padding || '12px 16px'};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor || '#000'};
  border-radius: 12px;
  transition: background-color 0.2s ease;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  &:hover {
    background-color: #161616;
  }

  &:active {
    background-color: #313131;
  }

  &:disabled {
    background-color: #777c85;
    & span {
      color: #fff;
    }
    & svg {
      fill: #fff;
    }
  }
`;

interface SecondaryButtonProps {
  padding?: string;
  borderColor?: string;
  width?: string;
  marginBottom?: string;
}

export const SecondaryButton = styled(ButtonWithoutStyles)<SecondaryButtonProps>`
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding || '12px 16px'};
  width: ${(props) => props.width};
  border: 2px solid ${(props) => props.borderColor || '#000'};
  border-radius: 12px;
  transition: background-color 0.2s ease;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  &:hover {
    border-color: #000;
    background-color: #000;
    color: #fff;
  }

  &:active {
    border-color: #2b2b2b;
    background-color: #2b2b2b;
    color: #fff;
  }

  &:disabled {
    border-color: #c0c4c9;
    & span {
      color: #c0c4c9;
    }
  }
`;

interface AccentButtonProps {
  padding?: string;
  borderColor?: string;
  width?: string;
  marginBottom?: string;
}

export const AccentButton = styled(ButtonWithoutStyles)<AccentButtonProps>`
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding || '12px 16px'};
  min-width: ${(props) => props.width};
  background: ${(props) => props.borderColor || '#374DFB'};
  border-radius: 12px;
  transition: background-color 0.2s ease;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  background-image: ${`url(${IconBtnArrow})`};
  background-repeat: no-repeat;
  background-position: 96% center;
  background-size: 16px;

  &:hover {
    background-color: #4357f4;
    color: #fff;
  }

  &:active {
    background-color: #283ff0;
    color: #fff;
  }

  &:disabled {
    border-color: #c0c4c9;
    & span {
      color: #c0c4c9;
    }
  }
`;

interface TextAccentButtonProps {
  fontSize?: string;
}
export const TextAccentButton = styled(ButtonWithoutStyles)<TextAccentButtonProps>`
  color: #374DFB;
  font-weight: 400;
  font-size: ${props => props.fontSize || '12px'};
  text-decoration: none;
  transition: all 0.4s ease;

  &:hover {
    text-decoration: none;
    color: #374DFB;
  }
`;