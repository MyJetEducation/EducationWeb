import React, {useMemo, useState} from 'react';

import cn from 'classnames';
import s from './style.module.scss';

interface textQuizRenderProps {
  data: any
}

const TextQuizRender: React.FC<textQuizRenderProps> = ({ data }) => {
  const [items, setItems] = useState(data);
  const currentIndex = useMemo(() => data.findIndex((item: any) => item?.id !== data.id), [data.id])
  console.log("####: currentIndex", currentIndex);

  const nextItem = useMemo(() => {
    return data[currentIndex].id
  }, [currentIndex, data.id])
  
  console.log("####: nextItem", nextItem);
  
  const handleChangeShow = () => {

    setItems((prevState: any) => {
      const copyState = [...prevState]
      copyState[nextItem].show = true
      return copyState
    })

  }
  
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>
        There are 5 important highlights about finance in 2022:
      </h1>
      <ul className={s.list}>
        {
          items.map((item: any) => (
            <li
              key={item.id}
              className={cn(s.item, {
                [s.show]: item.show === false
              })}
            >
              <p>{item.text}</p>
              <button
                onClick={handleChangeShow}
              >
                more
              </button>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default TextQuizRender;