import React, {useEffect, useState} from 'react';

export const CheckQuestion: React.FC<any> = ({data, onChange}) => {

  const [values, setValues] = useState({});

  const handleChange = (e: any) => {
    setValues(prevState => ({...prevState, [e.target.value]: e.target.checked}))
  };

  useEffect(() => {
    onChange && onChange(values);
  }, [values]);

  return (
    <form onChange={handleChange}>
      {
        data.map((item: any) => (
          <div key={item.id}>
            <input value={item.value} type="checkbox" name={item.name ? item.name : "name"}/>
            <label>{item.label}</label>
          </div>
        ))
      }
    </form>
  )
}