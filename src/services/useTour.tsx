import React, {ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import Joyride, {CallBackProps, STATUS, Step} from "react-joyride";
import {useNavigate} from "react-router-dom";
import {Tooltip} from "../ui/Tour/Tooltip";

export default function useTour(steps: Step[], localStorageKey: string | null): ReactNode {
  const [run, setRun] = useState(false);
  useEffect(function () {
    if (!localStorageKey) {
      setRun(true);
      return;
    }
    const tourViewed = localStorage.getItem(localStorageKey);
    if (tourViewed) {
      return;
    }
    localStorage.setItem(localStorageKey, "1");
    setRun(true);
  }, [localStorageKey])
  const navigate = useNavigate();
  const handleJoyRideCallBack = useCallback(function (data: CallBackProps) {
    const {status} = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (finishedStatuses.includes(status)) {
      navigate("/dashboard")
    }
  }, [])
  const tour = useMemo<ReactNode>(() => (
    <Joyride
      tooltipComponent={
        Tooltip
      }
      callback={handleJoyRideCallBack}
      continuous={true}
      run={run}
      scrollToFirstStep={true}
      showProgress={true}
      showSkipButton={true}
      steps={steps}
    />
  ), [steps, handleJoyRideCallBack, run]);
  return tour
}