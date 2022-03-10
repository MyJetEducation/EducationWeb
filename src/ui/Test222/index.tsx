import React, {useState} from 'react';

const CONTENT = [
  {
    title: "1"
  },
  {
    title: "2"
  },
  {
    title: "3"
  }

]

const Test222 = () => {
  const [content, setContent] = useState(0);
  return (
    <div>
      <div>
        <div>
          {
            CONTENT[content].title
          }
        </div>

      </div>
      <div>
        <div style={{color: content === 0 ? "red" : "black"}} onClick={() => setContent(0)}>tab 1</div>
        <div style={{color: content === 1 ? "red" : "black"}} onClick={() => setContent(1)}>tab 2</div>
        <div style={{color: content === 2 ? "red" : "black"}} onClick={() => setContent(2)}>tab 3</div>
      </div>
    </div>
  )
}

export default Test222;