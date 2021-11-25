import React from 'react';
import {Link, useNavigate} from "react-router-dom";

import {Container} from "../Container";

import s from './style.module.scss';
import {useAuth} from "../../hooks/auth";

const MENU = [
  {
    title: "About Us",
    to: "/about"
  },
  {
    title: "Mission",
    to: "/mission"
  },
  {
    title: "Why Us?",
    to: "/whyUs"
  },
  {
    title: "Lessons",
    to: "/lessons"
  },
  {
    title: "FAQ",
    to: "/faq"
  },
]

export const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div className={s.wrap}>
      <Container>
        <div className={s.inner}>
          <Link className={s.logo} to="/">
            WeFin
          </Link>
          <ul className={s.navBar}>
            {
              MENU.map(({title, to}, index) => (
                <li key={index} className={s.navBar__item}>
                  <Link className={s.navBar__link} to={to}>{title}</Link>
                </li>
              ))
            }
          </ul>
          {
            !auth.user && (
              <div className={s.auth}>
                <Link className={s.login} to="/login">Log In</Link>
                <Link className={s.singUp} to="/register">Sing Up</Link>
              </div>
            )
          }
          {
            auth.user && (
              <div className={s.auth}>
                <div className={s.singUp} onClick={() => auth.signOut(() => navigate("/"))}>Sing Out</div>
              </div>
            )
          }
        </div>
      </Container>
    </div>
  )
}