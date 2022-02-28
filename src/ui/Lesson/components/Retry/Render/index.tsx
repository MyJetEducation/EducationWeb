import React from 'react';
import RetryTest from "../Test";

const RenderTry = ({data}: any) => {
  console.log("####: data", data);
  const type = "";
  switch (type) {
    case "":
      return <RetryTest/>
  }
}

export default RenderTry;