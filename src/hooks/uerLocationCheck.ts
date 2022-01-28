import React from "react";
import {useNavigate} from "react-router-dom";

export function UserLocationCheck(menu: any, id: string | undefined, nav: string) {
  const navigate = useNavigate();
  return React.useEffect(() => {
    if (menu.length > 0) {
      const valid = menu.reduce((acc: any, item: any, index: any) => {
        if (item.valid === true) {
          acc = index
        }
        return acc
      }, -1);

      if (valid !== -1 && menu.length - 1 !== valid) {
        navigate(`/${nav}/${menu[valid + 1].id}`)
      } else if (menu.length - 1 === valid) {
        navigate("/finish")
      } else {
        navigate(`/${nav}/${menu[0].id}`)
      }
    }
  }, [id, navigate]);
}