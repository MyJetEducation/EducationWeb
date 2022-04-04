import styled from '@emotion/styled';
import { FlexContainer } from './FlexContainer';

export const LoaderWrap = styled(FlexContainer)`
  background-color: rgba(255, 255, 255);
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(12px);
  }
`;
