import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {Container} from "../../components/Container";
import {ProgressMenu} from "./components/ProgressMenu";
import {QuestionFooter} from "./components/QuestionFooter";
import QuestionContent from "./components/QuestionContent";

import {ARRAY_2} from "./constans";

import Breadcrumbs from "../../components/Breadcrumbs";

import {useDispatch, useSelector} from "react-redux";
import {currentIdSelector, menuSelector, validChange} from "../../store/menuSlicer";
import {testSelector} from "../../store/testSlicer";

import s from './style.module.scss';

export const FreeQuestions = () => {

  const menu = useSelector(menuSelector);
  const dispatch = useDispatch();

  const [time, setTime] = useState<any>({});

  const disabled = useSelector(testSelector);
  const navigate = useNavigate();
  const {id} = useParams<"id">();
  const data = useMemo(() => ARRAY_2[id as keyof typeof ARRAY_2], [id]);

  const currentIndex = useSelector(currentIdSelector(id as string));

  const currentLessonTime = useMemo(() => menu[currentIndex]?.time,[menu, currentIndex]);

  const setFetch = async (val: any) => {
    const value = JSON.stringify(val);
    const data = await localStorage.setItem("key", value)
    return data;
  };

  useEffect(() => {
    if (menu.length > 0) {
      const valid = menu.reduce((acc: any, item: any, index: any) => {
        if (item.valid === true) {
          acc = index
        }
        return acc
      }, -1);

      if (valid !== -1 && menu.length - 1 !== valid) {
        navigate(`/quest/lesson/${menu[valid + 1].id}`)
      } else if (menu.length - 1 === valid) {
        navigate("/finish")
      } else {
        navigate(`/quest/lesson/${menu[0].id}`)
      }
    }
  }, [id, navigate, menu]);

  const nextQuestion = useMemo(() => {
    const index = currentIndex + 1;
    if (index >= menu.length) {
      // setDisabled(true)
    } else {
      return menu[index].id
    }
  }, [menu, currentIndex]);


  // TODO: надо разобраться с этой функцией
  useEffect(() => {
    setFetch(menu)

    return () => {
      if (currentIndex === menu.length - 1) {
        const fn = (menu: any) => {
          const copyState = [...menu];
          copyState[currentIndex].valid = true;
          return copyState;
        }
        setFetch(fn(menu))
      }
    }
  }, [menu, currentIndex])

  const handleClickNextQuestion = () => {
    // TODO: доделать на Redux
    setTime((prevState: any) => {
      const newState = {
        ...prevState,
        [id as keyof typeof time]: {
          ...prevState[id as keyof typeof time],
          end: new Date()
        },
      }
      return newState;
    });
    dispatch(validChange(currentIndex))
    if (currentIndex === menu.length - 1) {
      navigate(`/finish`);
    } else {
      navigate(`/quest/lesson/${nextQuestion}`);
    }
  }

  const lastQuestion = useCallback(() => {
    if (currentIndex === menu.length - 1) {
      return "Finish Unit"
    }
    return "Next Task"
  }, [currentIndex, menu]);

  // timer
  // useEffect(() => {
  //   setTime({...time, [id as keyof typeof time]: {start: new Date()}});
  // }, [id]);

  return (
    <Container>
      <Breadcrumbs questionName={menu}/>
      <h1 className={s.title}>{data.title}</h1>
      <div className={s.wrap}>

        <QuestionContent
          index={currentIndex}
          id={id}
        />

        <ProgressMenu
          id={id}
          length={menu.length}
          index={currentIndex}
          menu={menu}
        />

      </div>

      <QuestionFooter
        disabled={disabled}
        onClickNext={handleClickNextQuestion}
        length={menu.length}
        index={currentIndex}
        btnName={lastQuestion()}
        time={currentLessonTime}
        id={id}
      />

    </Container>
  );
};