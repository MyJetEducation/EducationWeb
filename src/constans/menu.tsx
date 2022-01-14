import React from "react";

const Test:React.FC<{title: string}> = ({title}) => {
  return (
    <div>{title}</div>
  )
}

export const MENU = [
  {
    title: "Home",
    path: "/",
    element: <Test title={"Home"}/>,
    children: [
      {
        title: "Free Unit 1",
        path: "free-unit-1",
        element: <Test title={"Question"}/>,
        children: [
          {
            title: "Les 1",
            path: "lesson-1",
            element: <Test title={"Les1"}/>
          },
          {
            title: "Les 2",
            path: "lesson-2",
            element: <Test title={"Les2"}/>
          },
          {
            title: "Les 3",
            path: "lesson-3",
            element: <Test title={"Les3"}/>
          }
        ]
      }
    ]
  }
]