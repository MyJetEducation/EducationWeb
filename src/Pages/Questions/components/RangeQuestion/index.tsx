import React, {useEffect, useState} from 'react';

import {getTrackBackground, Range} from "react-range";
import s from './style.module.scss'

const STEP = 10000;
const MIN = 50000;
const MAX = 1000000;

interface rangeQuestionProps {
  onChange: (val: number) => void,
  defaultValue: number,
  onActive: any
}

export const RangeQuestion: React.FC<rangeQuestionProps> = ({onChange, defaultValue = 500000, onActive}) => {

  const [values, setValues] = useState([defaultValue]);
  const [isActive, setActive] = useState(false);

  const handleChange = (values: number[]) => {
    onChange && onChange(values[0])
    setValues(values)
    setActive(true)
  }

  useEffect(() => {
    onActive && onActive(isActive)
  }, [isActive])

  useEffect(() => {
    if (defaultValue) {
      setActive(true)
    }
  }, []);

  return (
      <div className={s.wrap}>
        <output
          style={{marginBottom: "30px"}}
          id="output"
        >
          {"$" + values[0]}
        </output>
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={handleChange}
          renderTrack={({props, children}) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className={s.inner}
            >
              <div
                ref={props.ref}
                style={{
                  height: "2px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>

          )}

          renderThumb={({props}) => (
            <div
              className={s.thumb}
              {...props}
            />
          )}
        />
        <div className={s.rangeSteps}>
          <p>{MIN}</p>
          <p>$500000</p>
          <p>{MAX}</p>
        </div>

      </div>
  )
}