import React from 'react';

import s from './style.module.scss';

interface breadcrumbsProps {
  questionName?: any
}

const Breadcrumbs: React.FC<breadcrumbsProps> = ({questionName}) => {
  return (
    <div className={s.breadcrumbs}>
      <ul className={s.breadcrumbs__list}>
        <li className={s.breadcrumbs__item}>
          <div
            className={s.breadcrumbs__link}
          >
            {questionName.title}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Breadcrumbs;