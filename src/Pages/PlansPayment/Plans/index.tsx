import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {Button} from "../../../components/Button";

import cn from 'classnames';

import s from './style.module.scss';

const Plans = () => {
  const [activePartner, setActivePartner] = useState(false);
  const [activeCustomer, setActiveCustomer] = useState(false);

  const handleClickPartnerActive = () => {
    setActivePartner(true)
    setActiveCustomer(false)
  }

  const handleClickCustomerActive = () => {
    setActiveCustomer(true)
    setActivePartner(false)
  }

  return (
    <div className={s.wrap}>

        <h1 className={s.title}>Планы</h1>

        <div className={s.inner}>

          <div
            onClick={handleClickPartnerActive}
            className={cn(s.choiceItem, {
              [s.active]: activePartner === true
            })}
          >
            <div className={s.itemTitle}>
              <p>Партнер</p>
              <p>Бесплатно*</p>
            </div>
            <div className={s.info}>
              <p>$500 в год</p>
              <p>второй год за 250$</p>
              <p>* плата начнет списываться только после запуска</p>
            </div>
            <div className={s.available}>
              <div className={s.availableItem}>
                <svg
                  className={cn(s.check, {
                    [s.active]: activeCustomer === true
                  })}
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                >
                  <path
                    d="M12 2L10 0L5 5L2 2L0 4L5 9L12 2Z"
                  />
                </svg>
                <p>Доступ к обучению</p>
              </div>
              <div className={s.availableItem}>
                <svg
                  className={cn(s.check)}
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                >
                  <path
                    d="M12 2L10 0L5 5L2 2L0 4L5 9L12 2Z"
                  />
                </svg>
                <p>Зарабатываешь приглашая своих друзей</p>
              </div>

            </div>
            <Button
              size="little"
              variant={ activeCustomer || !activePartner ? "bgGrey": "bgBlue"}
            >
              Стать партнером
            </Button>
          </div>

          <div
            onClick={handleClickCustomerActive}
            className={cn(s.choiceItem, {
              [s.active]: activeCustomer === true
            })}
          >
            <div className={s.itemTitle}>
              <p>Покупатель</p>
              <p>Бесплатно</p>
            </div>
            <div className={s.info}>
              <p>$360 в год</p>
              <p>второй год за 30$</p>
              <p>* плата начнет списываться только после запуска</p>
            </div>
            <div className={s.available}>
              <div className={s.availableItem}>
                <svg
                  className={cn(s.check)}
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                >
                  <path
                    d="M12 2L10 0L5 5L2 2L0 4L5 9L12 2Z"
                  />
                </svg>
                <p>Доступ к обучению</p>
              </div>

            </div>
            <Button
              size="little"
              variant={ !activeCustomer || activePartner ? "bgGrey": "bgBlue"}
            >
              Купить обучение
            </Button>
          </div>

        </div>

      <Link
        to={"/free"}
        className={s.link}
      >
        Хочу попробовать обучение на протяжении 3 дней.
      </Link>

    </div>
  )
}

export default Plans;