import React, {useEffect, useRef, useState} from 'react';

import s from './style.module.scss'

interface radioQuestionProps {
  onChange: (e: string) => void,
  data: any,
  onActive: any,
  additional?: boolean,
  defaultValue?: string
}

const RadioQuestion: React.FC<radioQuestionProps> = ({data, onChange, onActive, additional = false, defaultValue}) => {

  const ref = useRef<any>(null);

  const [isActive, setActive] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleChange = (e: any) => {
    onChange && onChange(e.target.value);
    setActive(true);
  }

  useEffect(() => {
    onActive && onActive(isActive)
  }, [isActive]);

  useEffect(() => {
    ref.current.reset();
    if (defaultValue) {
      setActive(true)
    }
  }, []);

  return (
    <form
      onChange={handleChange}
      ref={ref}
      className={s.formForRadio}
    >
      {
        data.map((item: any) => (
          <div key={item.id}>
            <input
              defaultChecked={item.value === defaultValue}
              value={item.value}
              type="radio"
              name={item.name ? item.name : "name"}
              className={s.radioInput}
              id={item.id}
            />
            <label
              className={s.radioInputLabel}
              htmlFor={item.id}
              onClick={() => setTextInput("")}
            >
              {item.label}
            </label>
          </div>
        ))
      }
      {
        additional && (
          <input
            type="text"
            onFocus={() => {ref.current.reset(); onChange("")}}
            value={textInput}
            placeholder="Введите точную сумму"
            onChange={(e) => setTextInput(e.target.value)}
            className={s.textInput}
          />
        )
      }
    </form>
  )
}

export default RadioQuestion;