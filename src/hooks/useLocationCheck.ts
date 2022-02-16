import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export function useLocationCheck(menu: any, tutorial: string, id: string | undefined, url: string | undefined, finish: string) {
  const navigate = useNavigate();
   useEffect(() => {
    if (menu.length > 0) {
      const valid = menu.reduce((acc: any, item: any, index: any) => {
        if (item.valid === true) {
          acc = index
        }
        return acc
      }, -1);

      if (valid !== -1 && menu.length - 1 !== valid) {
        navigate(`/${tutorial}/${url}/${menu[valid + 1].id}`)
      } else if (menu.length - 1 === valid) {
        navigate(`/${tutorial}/${finish}`)
      } else {
        navigate(`/${tutorial}/${url}/${menu[0].id}`)
      }
    }
  }, [id, menu]);
}