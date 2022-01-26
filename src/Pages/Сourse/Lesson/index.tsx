import React, {useEffect,} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Container} from "../../../components/Container";

import req from "../../../utils/request";
import {configEndpoint} from "../../../config";

import {
  currentIdProgressMenuSelector,
  progressMenuAsync,
  progressMenuSelector
} from "../../../store/progressMenuSlicer";

import s from './style.module.scss'
import {useParams} from "react-router-dom";

export const Lesson = () => {
  const dispatch = useDispatch();
  const {id} = useParams<"id">();

  const menu = useSelector(progressMenuSelector);
  console.log("####: menu", menu);

  const currentIndex = useSelector(currentIdProgressMenuSelector(id as string));
  console.log("####: currentIndex", currentIndex);




  useEffect(() => {
    dispatch(progressMenuAsync())
  }, [])
  
  return (
    <Container>
      <h1>This is title</h1>
      <div className={s.wrap}>



      </div>
    </Container>
  )
}
