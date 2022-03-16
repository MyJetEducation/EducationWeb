import React from 'react';

import s from './style.module.scss';
import {Container} from "../components/Container";

import trash from '../components/Header/assets/trash.svg';

const MarketPage = () => {
  return (
    <div className={s.wrap}>
      <Container>
        <h1 className={s.title}>
          Market
        </h1>
        <div className={s.marketEducation}>
          <h6 className={s.marketTitle}>Education Progress</h6>
          <div className={s.listEducation}>
            <div className={s.itemEducation}  id="step-7">
              <div className={s.img}/>
              <p className={s.itemTitle}>Reset results</p>
              <p className={s.itemSubTitle}>Small descriptio about this item</p>
              <div className={s.price}>
                <div className={s.totalPrice}>
                  <p>Бесплатно</p>
                  <img className={s.trash} src={trash} alt="trash icon"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default MarketPage;