import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { Step } from "react-joyride";
import {Container} from "../Container";
import {useAuth} from "../../../services/auth";
import req from "../../../services/request";
import {configEndpoint} from "../../../config";
import useTour from "../../../services/useTour";
import icon from './assets/icon.svg'
import s from './style.module.scss';

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
    to: "/dashboard"
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

export const STEPS: Step[] = [
  {
    content: <p>Profile. All information about you</p>,
    locale: {skip: <strong aria-label="skip">Skip</strong>},
    placement: "bottom",
    target: "#DS",
  },
  {
    content: <p>Your statuses and achievements</p>,
    locale: {skip: <strong aria-label="skip">S-K-I-P</strong>},
    placement: "top",
    target: "#step-2",
  },
  {
    content: <p>How much new have you learned - your progress</p>,
    locale: {skip: <strong aria-label="skip">S-K-I-P</strong>},
    placement: "top",
    target: "#step-3",
  },
  {
    content: <p>How much new have you learned - your progress</p>,
    locale: {skip: <strong aria-label="skip">S-K-I-P</strong>},
    placement: "right-start",
    target: "#step-4",
  },
  {
    content: <p>We have credited you with money that you can use inside the service</p>,
    locale: {skip: <strong aria-label="skip">S-K-I-P</strong>},
    placement: "right-start",
    target: "#step-5",
  },
  {
    content: <p>We have credited you with money that you can use inside the service</p>,
    locale: {skip: <strong aria-label="skip">S-K-I-P</strong>},
    placement: "right-start",
    target: "#step-6",
  },
  {
    content: <p>Let's make our first purchase. It's free</p>,
    locale: {skip: <strong aria-label="skip">S-K-I-P</strong>},
    placement: "right-start",
    target: "#step-7",
  },
]

export const Header = () => {
  const tour = useTour(STEPS, "LS_KEY");
  const auth = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(false)
    navigate("/profile")
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (auth.user !== null) {
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
      } else {
        localStorage.removeItem("at")
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
      {tour}
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
                    <li key={index} className={s.navBar__item} id={index === 3 ? "step-6": ""}>
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
                <>
                  <div className={s.money} id="step-5">
                    <img className={s.icon} src={icon} alt="icon"/>
                    <p>1200</p>
                  </div>
                  <div
                    className={s.userProfile}
                    onClick={() => setShow(!show)}
                    id="DS"
                  >
                    DS
                  </div>
                </>

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