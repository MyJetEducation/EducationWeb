import React from "react";

export default function Timer() {
  const [ seconds, setSeconds ] = React.useState(0);

  React.useEffect(() => {
    setTimeout(setSeconds, 1000, seconds + 1);
    return clearTimeout(seconds);
  }, [seconds]);
  return seconds
}