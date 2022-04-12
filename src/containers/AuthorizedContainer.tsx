import React, {FC} from 'react';
import {FlexContainer} from '../styles/FlexContainer';
import {observer} from 'mobx-react-lite';
import Onboarding from "../components/Onboarding/Onboarding";

interface Props {
}

const AuthorizedContainer: FC<Props> = observer((props) => {
  const {children} = props;

  return <FlexContainer flex="1"><Onboarding/>{children}</FlexContainer>;
});
export default AuthorizedContainer;
