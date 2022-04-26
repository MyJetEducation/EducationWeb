import { Observer, observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { FlexContainer } from '../styles/FlexContainer';

interface Props {}

const PublicContainer: FC<Props> = observer((props) => {
  const { children } = props;

  return <FlexContainer flex="1">{children}</FlexContainer>;
});

export default PublicContainer;
