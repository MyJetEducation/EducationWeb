import React, {useMemo, useState} from 'react';
import ProgressPage from "../../ProgressPage";
import RadioBlock from "../../RadioBlock";

const RetryTest = ({data}: any) => {
  const [answer, setAnswer] = useState();
  const [percent, setPercent] = useState();
  const [showResult, setShowResult] = useState(false);
  console.log("####: data", data);
  return (
    <div>
      <h1>sdfsdf</h1>
      {/*{*/}
      {/*  showResult ? (*/}
      {/*      <ProgressPage*/}
      {/*        percent={percent}*/}
      {/*      />*/}
      {/*    )*/}
      {/*    : (*/}
      {/*      <RadioBlock*/}
      {/*        selectedAll={(val: boolean) => setShowResult(val)}*/}
      {/*        content={data}*/}
      {/*        onChange={setAnswer}*/}
      {/*        type={"checkbox"}*/}
      {/*      />*/}
      {/*    )*/}
      {/*}*/}
    </div>
  )
}

export default RetryTest;