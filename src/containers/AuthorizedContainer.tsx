import React, { FC, useEffect } from 'react';
import { FlexContainer, FlexContainerProps } from '../styles/FlexContainer';
import { observer, Observer } from 'mobx-react-lite';

interface Props {}

const AuthorizedContainer: FC<Props> = observer((props) => {
  const { children } = props;

  return <FlexContainer>{children}</FlexContainer>;
});
export default AuthorizedContainer;
