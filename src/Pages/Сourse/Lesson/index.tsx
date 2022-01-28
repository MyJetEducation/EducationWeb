import React, {useEffect, useMemo,} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Container} from "../../../components/Container";

import {
  currentIdSelector,
  progressMenuAsync,
  progressMenuSelector,
  progressMenuValidChange, setProgressMenuAsync
} from "../../../store/progressMenuSlicer";

import {useNavigate, useParams} from "react-router-dom";
import {LESSON_CONTENT} from "./constans";
import {testSelector} from "../../../store/testSlicer";
import s from './style.module.scss'
import LessonContent from "./components/LessonContent";
import {ProgressMenu} from "../../../components/ProgressMenu";
import {QuestionFooter} from "../../FreeLesson/components/QuestionFooter";
import {useLocationCheck} from "../../../hooks/useLocationCheck";

export const Lesson = () => {
  const dispatch = useDispatch();
  const {id} = useParams<"id">();
  const navigate = useNavigate();

  const menu = useSelector(progressMenuSelector);
  const data = useMemo(() => LESSON_CONTENT[id as keyof typeof LESSON_CONTENT], [id]);
  const currentIndex = useSelector(currentIdSelector(id as string))
  const disabled = useSelector(testSelector);

  useEffect(() => {
    if (menu.length > 0) {
      const valid = menu.reduce((acc: any, item: any, index: any) => {
        if (item.valid === true) {
          acc = index
        }
        return acc
      }, -1);

      if (valid !== -1 && menu.length - 1 !== valid) {
        navigate(`/lesson/${menu[valid + 1].id}`)
      } else if (menu.length - 1 === valid) {
        navigate("/finish")
      } else {
        navigate(`/lesson/${menu[0].id}`)
      }
    }
  }, [id, navigate]);

  const nextQuestion = useMemo(() => {
    const index = currentIndex + 1;
    if (index >= menu.data.length) {
      // setDisabled(true)
    } else {
      return menu.data[index].id
    }
  }, [menu, currentIndex]);

  useEffect(() => {
    dispatch(progressMenuAsync())
  }, [])

  // "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"time\":\"≈5 min\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T.\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"time\":\"≈2 min\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful?\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"time\":\"≈5 min\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"time\":\"≈10 min\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"time\":\"≈5 min\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"time\":\"≈10 min\",\"valid\":false}]"
  const handleClickNextQuestion = () => {
    dispatch(setProgressMenuAsync(currentIndex))
    if (currentIndex === menu.data.length - 1) {
      navigate(`/finish`);
    } else {
      navigate(`/lesson/${nextQuestion}`);
    }
  }

  useLocationCheck(menu.data, id,"lesson");

  return (
    <Container>
      <h1>{data.title}</h1>
      <div className={s.wrap}>

        <LessonContent
          id={id}
          index={currentIndex}
          menu={menu.data}
        />

        <ProgressMenu
          id={id}
          length={menu.data.length}
          index={currentIndex}
          menu={menu.data}
        />
      </div>
      <QuestionFooter
        disabled={disabled}
        onClickNext={handleClickNextQuestion}
        length={menu.data.length}
        index={currentIndex}
        id={id}
      />


    </Container>
  )
}
