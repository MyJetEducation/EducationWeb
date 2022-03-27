import styled from '@emotion/styled';
import React, { ChangeEvent, forwardRef, useState } from 'react';
import { ButtonWithoutStyles } from '../../styles/ButtonWithoutStyles';
import { FlexContainer } from '../../styles/FlexContainer';
import { PrimaryTextSpan } from '../../styles/TextsElements';
import SvgIcon from '../SvgIcon';
import IconShowPass from '../../assets/svg/icon-eye.svg';
import IconHidePass from '../../assets/svg/icon-close-eye.svg';

interface Props {
  labelText: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  type?: string;
  hasError?: boolean;
  autoComplete?: string;
  errorText?: string;
}

const LabelInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    labelText,
    id,
    name,
    onChange,
    onBlur,
    value,
    type,
    hasError,
    autoComplete,
    errorText,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPass = () => {
    setShowPassword(!showPassword);
  };
  const IconShowPassBtn = showPassword ? IconHidePass : IconShowPass;
  return (
    <FlexContainer marginBottom="24px" flexDirection="column" width="100%">
      <LabelWrapper htmlFor={id}>
        <Input
          id={id}
          ref={ref}
          type={
            type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : type || 'text'
          }
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
          hasError={hasError}
          autoComplete={autoComplete}
        ></Input>
        <Label>{labelText}</Label>

        {type === 'password' && (
          <ShowPassBtn onClick={handleClickShowPass} type="button">
            <SvgIcon
              {...IconShowPassBtn}
              fillColor="#A8B0BA"
              hoverFillColor="#777C85"
            />
          </ShowPassBtn>
        )}
      </LabelWrapper>
      {hasError && <ErropPopup>{errorText}</ErropPopup>}
    </FlexContainer>
  );
});

export default LabelInput;

const ShowPassBtn = styled(ButtonWithoutStyles)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  right: 16px;
  top: 14px;
`;

const ErropPopup = styled.span`
  color: #f50537;
  font-size: 12px;
  font-weight: 400;
  padding: 4px 0;
`;

const LabelWrapper = styled.label`
  display: flex;
  position: relative;
  margin: 0;
`;

const Input = styled.input<{ hasError?: boolean }>`
  outline: none;
  border: 0;
  box-shadow: 0 0 0 1px
    ${(props) => (props.hasError ? '#F50537 !important' : '#E0E5EB')};
  background-color: transparent;
  width: 100%;
  caret-color: #374dfb;
  padding: 12px 16px 12px;
  color: #000;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 12px;
  transition: box-shadow 0.3s ease;

  /* & + span {
    color: ${(props) => (props.hasError ? '#F50537 !important' : '#a8b0ba')};
  } */

  &:hover {
    box-shadow: 0 0 0 1px #c0cbda;
    & + span {
      color: #a8b0ba;
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px #374dfb;
    & + span {
      transform: translateY(-30px);
      font-weight: 400;
      font-size: 12px;
    }
  }

  &:valid {
    & + span {
      transform: translateY(-30px);
      font-weight: 400;
      font-size: 12px;
    }
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:valid,
  &:-webkit-autofill:active {
    transition: border 0.2s ease, background-color 50000s ease-in-out 0s;
    font-size: 16px;
    -webkit-text-fill-color: #000 !important;
    & + span {
      transform: translateY(-30px);
      font-weight: 400;
      font-size: 12px;
    }
  }
`;

const Label = styled(PrimaryTextSpan)`
  position: absolute;
  bottom: 10px;
  left: 8px;
  padding: 0 8px;
  transform: translateY(-4px);
  transition: transform 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  font-size: 16px;
  font-weight: 500;
  color: #a8b0ba;
  background-color: #fff;
`;
