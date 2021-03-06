import styled from '@emotion/styled';
import { FlexContainer } from './FlexContainer';

export enum ProgressBarTypesEnum {
  DEFAULT = 'default',
  ACCENT = 'accent',
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface ProgressBarProps {
  progress: number;
  type: ProgressBarTypesEnum;
}

const ProgressColorByType = {
  [ProgressBarTypesEnum.DEFAULT]: '#fff',
  [ProgressBarTypesEnum.ACCENT]: '#0BCA1E',
  [ProgressBarTypesEnum.PRIMARY]: '#000',
  [ProgressBarTypesEnum.ERROR]: '#F50537',
};

export const ProgressBar = styled(FlexContainer)<ProgressBarProps>`
  width: 100%;
  height: 4px;
  background-color: ${(props) =>
    props.type !== ProgressBarTypesEnum.DEFAULT
      ? '#E0E5EB'
      : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 10px;
  position: relative;

  &:after {
    content: '';
    display: block;
    height: 8px;
    width: ${(props) => `${props.progress}%`};
    border-radius: 10px;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${(props) =>
      props.type
        ? ProgressColorByType[props.type]
        : ProgressColorByType.default};
  }
`;
