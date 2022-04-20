import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { ColorVarsEnum } from '../../enums/ColorVarsEnum';
import Page from '../../routing/Pages';

import IconCalculator from '../../assets/svg/tool/icon-calculator.svg';
import IconChecklist from '../../assets/svg/tool/icon-checklist.svg';
import IconRight from '../../assets/svg/icon-arrow-right.svg';

import SvgIcon from '../SvgIcon';
import { FlexContainer } from '../../styles/FlexContainer';

interface Props {
  name: string;
  id: string;
  type: 'calc' | 'check';
}

const ToolItemBtn = ({ name, id, type }: Props) => {
  const icon = type === 'calc' ? IconCalculator : IconChecklist;
  return (
    <ToolItemLink to={`${Page.INNER.TOOL}/${id}`}>
      <FlexContainer flex="1" alignItems="center" padding="0 12px 0 0">
        <FlexContainer marginRight="12px">
          <SvgIcon {...icon} />
        </FlexContainer>{' '}
        {name}
      </FlexContainer>

      <SvgIcon {...IconRight} />
    </ToolItemLink>
  );
};

export default ToolItemBtn;

const ToolItemLink = styled(Link)`
  background-color: var(${ColorVarsEnum.BG_block});
  color: var(${ColorVarsEnum.Primary});
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.4s ease;

  &:hover {
    opacity: 0.8;
    text-decoration: none;
    color: var(${ColorVarsEnum.Primary});
  }

  svg {
    fill: var(${ColorVarsEnum.Primary});
  }
`;
