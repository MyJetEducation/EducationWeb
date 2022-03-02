import React from 'react';
import {Button} from "../components/Button";
import {useNavigate} from "react-router-dom";

const FreeLesson = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/register');
  }
  return (
    <div>
      <h1 style={{textAlign: "center", marginBottom: "30px"}}>
        Тут будет бесплатный урок
      </h1>
      <Button onClick={handleClick}>Register</Button>
    </div>

  )
}

export default FreeLesson;