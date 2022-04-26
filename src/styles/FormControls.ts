import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { ColorVarsEnum } from '../enums/ColorVarsEnum';

interface AuthFormProps {
  marginBottom?: string;
}
export const AuthForm = styled.form<AuthFormProps>`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-bottom: 24px;
  padding: 40px;
  margin-bottom: ${(props) => props.marginBottom};
  background-color: var(${ColorVarsEnum.BG_block});
  border-radius: 32px;
`;

export const InputCode = css`
  .input-code input {
    width: 60px;
    height: 72px;
    border-radius: 12px;
    border: ${`1px solid var(${ColorVarsEnum.InputBorder})`};
    background-color: ${`var(${ColorVarsEnum.BG_block})`};
    outline: none;
    appearance: textfield;
    margin: 0 10px;
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    color: ${`var(${ColorVarsEnum.Text})`};
    line-height: 1;
    text-transform: uppercase;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &::placeholder {
      color: ${`var(${ColorVarsEnum.Text_Secondary_Light})`};
    }
    &::selection {
      background-color: transparent;
    }
    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
  }
`;

export const CalculatorForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
