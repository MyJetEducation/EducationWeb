import React from "react";
import {useNavigate} from "react-router-dom";

import {Button} from "../components/Button";
import {Container} from "../components/Container";

import s from './style.module.scss'

export const HomePage = () => {
  const navigate = useNavigate();
  const handleClickStart = () => {
    navigate('/free');
  }

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.inner}>
          <h1 className={s.title}>
            We turn financial knowledge into rich people habits
          </h1>
          <p className={s.subTitle}>
            Here is everything you really should know about personal finance, modern investment opportunities and
            options to earn money online
          </p>
          <p className={s.stepsTitle}>
            There are 3 steps that we provide for you:
          </p>
          <ul className={s.steps}>
            <li className={s.steps__item}>
              <p>1.</p>
              <p>
                You get instructions how to rule your finance
              </p>
            </li>
            <li className={s.steps__item}>
              <p>2.</p>
              <p>
                You change your habits with our support
              </p>
            </li>
            <li className={s.steps__item}>
              <p>3.</p>
              <p>
                You get coaching in Financial Psychology, Online Business, Investments
              </p>
            </li>
          </ul>
          <Button
            onClick={handleClickStart}
            variant="bgBlack"
            size="middle"
          >
            Let’s start
          </Button>
        </div>
      </Container>
    </div>
  )
}