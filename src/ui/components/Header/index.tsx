import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {Container} from "../Container";

import s from './style.module.scss';
import {useAuth} from "../../../services/auth";
import req from "../../../services/request";
import {configEndpoint} from "../../../config";

const MENU_NO_AUTH = [
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
const MENU_AUTH = [
  {
    title: "Education",
    to: "/education"
  },
  {
    title: "Tools",
    to: "/tools"
  },
  {
    title: "Notes",
    to: "/notes"
  },
  {
    title: "Market",
    to: "/market"
  }
]

export const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(false)
    navigate("/profile")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (auth.user) {
        const getToken = async () => {
          const token = await req(configEndpoint.userTimeGet, {});
          localStorage.setItem("at", token.data)
        }
        const logToken = async () => {
          if (localStorage.getItem("at")) {
            const data = await fetch("https://api.dfnt.work/api/v1/time/user-time/log", {
              method: "POST",
              body: JSON.stringify(localStorage.getItem("at")),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`
              }
            })
            return data
          } else {
            getToken()
          }
        }
        logToken()
      }

    }, 10000);
    return () => {
      setShow(false)
      clearInterval(interval)
      localStorage.removeItem("at")
    };
  }, [])


  const handleLogoClick = () => {
    if (auth.user) {
      navigate("/dashboard")
    } else {
      navigate("/")
    }
  }


  return (
    <div className={s.wrap}>
      <Container>
        <div className={s.inner}>
          <div onClick={handleLogoClick} className={s.logo}>
            DOFINTO
          </div>
          {
            !auth.user ? (
              <ul className={s.navBar}>
                {
                  MENU_NO_AUTH.map(({title, to}, index) => (
                    <li key={index} className={s.navBar__item}>
                      <Link className={s.navBar__link} to={to}>{title}</Link>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <ul className={s.navBar}>
                {
                  MENU_AUTH.map(({title, to}, index) => (
                    <li key={index} className={s.navBar__item}>
                      <Link className={s.navBar__link} to={to}>{title}</Link>
                    </li>
                  ))
                }
              </ul>
            )
          }

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
                <div
                  className={s.userProfile}
                  // onClick={}
                  onClick={() => setShow(!show)}
                >
                  DS
                </div>
                {
                  show && (
                    <div className={s.popup}>
                      <p onClick={handleClick}>
                        Profile
                      </p>
                      <p onClick={() => auth.signOut(() => navigate("/"))}>
                        Log out
                      </p>
                    </div>
                  )
                }

              </div>
            )
          }
        </div>
      </Container>
    </div>
  )
}