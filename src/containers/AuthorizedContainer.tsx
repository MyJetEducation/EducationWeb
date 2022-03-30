import React, { FC } from 'react';
import { FlexContainer } from '../styles/FlexContainer';
import { observer } from 'mobx-react-lite';

interface Props {}

const AuthorizedContainer: FC<Props> = observer((props) => {
  const { children } = props;

  return <FlexContainer flex="1">{children}</FlexContainer>;
});
export default AuthorizedContainer;
