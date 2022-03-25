import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { FlexContainer } from '../styles/FlexContainer';
import styled from '@emotion/styled';
import { useStores } from '../hooks/useStores';
import { useTranslation } from 'react-i18next';

interface Props {}

const SignFlowLayout: FC<Props> = (props) => {
  const { children } = props;
  const { mainAppStore } = useStores();
  const { t } = useTranslation();

  return <FlexContainer>{children}</FlexContainer>;
};

export default SignFlowLayout;
