import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {Button} from "../../../components/Button";
import {Input} from "../../../components/Inputs/InputEmailOrPass";
import {AllReadyAccount} from "../../../components/AllReadyAccount";
import {OrContinueWith} from "../../../components/OrContinueWith";

import {setRefreshToken, setToken} from "../../../store/userSlicer";

import {configEndpoint} from "../../../config";
import {useAuth} from "../../../hooks/auth";
import req from "../../../utils/request";

import s from "./style.module.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const getAuth = async () => {
      const data = await req(configEndpoint.authLogin, {userName: email, password})
      setLoading(false);
      dispatch(setToken(data.data.token));
      dispatch(setRefreshToken(data.data.refreshToken));

      auth.signIn(data.data.token, () => {
        navigate('/');
      })
      auth.signInRefresh(data.data.refreshToken, () => {
        navigate('/');
      })
      if (data.data.token) {
        const allKeys = await req(configEndpoint.allKeysKeyValue, {})
        if (allKeys.status === -4) {
          const fetchMenu = async () =>  {
            const newKey = await req(configEndpoint.putKeyValue, {
              "items": [
                {
                  "key": "progressMenuUnit1",
                  "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
                },
                {
                  "key": "progressMenuUnit2",
                  "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
                },
                {
                  "key": "progressMenuUnit3",
                  "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
                },
                {
                  "key": "progressMenuUnit4",
                  "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
                },
                {
                  "key": "progressMenuUnit5",
                  "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
                }
              ]
            });
            return newKey
          }
          fetchMenu()
        }
      }
    }
    setLoading(true);
    getAuth();
  }

  useEffect(() => {
    if ( auth.user ) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if ( email.length >= 1 && password.length >= 1) {
      setDisabled(false)
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  return (
    <>
      {
        isLoading && (
          <div className={s.loadingWrap}>
            <h1 className={s.loadingTitle}>Loading...</h1>
          </div>
        )
      }
      <div className={s.wrap}>
        <h3 className={s.title}>Log In</h3>
        <form className={s.form} onSubmit={handleSubmit}>
          <Input
            type="email"
            placeHolder="Email address"
            value={email}
            disabled={isLoading}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeHolder="Password"
            value={password}
            disabled={isLoading}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Link
            to="/forgot"
            className={s.forgotLink}
          >
            Forgot password?
          </Link>
          <Button
            margin={"0 auto 24px"}
            disabled={isDisabled || isLoading}
            size="large"
          >
            Login
          </Button>
          <OrContinueWith/>
          <AllReadyAccount/>
        </form>
      </div>
    </>
  )
}