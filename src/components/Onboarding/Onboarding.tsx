import React, {useEffect, useState} from "react";
import Modal from "../Modal";
import {FlexContainer} from "../../styles/FlexContainer";
import ObHint from "./ObHint";
import {useStores} from "../../hooks/useStores";
import {observer} from "mobx-react-lite";
import OnboardingTurData from "../../constants/Data/OnboardingTurData";

const Onboarding = observer(() => {
  const [active, setActive] = useState(1);
  const {mainAppStore} = useStores();
  if (!mainAppStore.isOnboarding) {
    return null
  }

  const handleClickNextStep = () => {
    const currentIndex = OnboardingTurData.findIndex((el) => el.id === active) + 1;
    if (OnboardingTurData.length !== currentIndex) {
      setActive(active + 1);
    }
  }

  return (
    <Modal>
      <FlexContainer
        position="fixed"
        zIndex="8"
        width="100%"
        height="100%"
        top="0"
        left="0"
        backgroundColor="rgba(241, 244, 248, 0.5)"
      >
        <ObHint text={"sdfsdf"} onClickNext={handleClickNextStep}/>
      </FlexContainer>
    </Modal>
  )
})

export default Onboarding;