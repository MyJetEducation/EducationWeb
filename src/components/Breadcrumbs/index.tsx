import React, {useState} from 'react';

import s from './style.module.scss';

interface breadcrumbsProps {
  questionName?: any
}

const Breadcrumbs: React.FC<breadcrumbsProps> = ({questionName}) => {
  const [items, setItems] = useState(questionName);
  return (
    <div className={s.breadcrumbs}>
      <ul className={s.breadcrumbs__list}>


        <li className={s.breadcrumbs__item}>
          <div
            // to={item.to}
            className={s.breadcrumbs__link}
          >
            {items.title}
          </div>
        </li>

      </ul>
    </div>
  )
}

export default Breadcrumbs;