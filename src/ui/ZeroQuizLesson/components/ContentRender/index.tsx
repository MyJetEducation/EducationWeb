import React, {useMemo} from "react";
import TextQuizRender from "../TextQuizRender";
import {QUIZ_CONTENT} from "../../constans";

const ContentRender = () => {
  const id = 0
  const data = useMemo(() => QUIZ_CONTENT[id],[id]);
  console.log("####: data", data.type);

  switch (data.type) {
    case "text":
      return (
        <TextQuizRender
          data={data.questions}
        />
    )
    default:
      return <div/>
  }
}

export default React.memo(ContentRender);