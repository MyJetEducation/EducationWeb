import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../services/auth";
import req from "../../services/request";
import {configEndpoint} from "../../config";

const RegisterConfirm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const hash: string = location.search.replace("?hash=", "");
  const confirmUser = async () => {
    const data = await fetch("https://api.dfnt.work/api/v1/register/confirm", {
      method: "POST",
      body: JSON.stringify(hash),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    if (data.data.status === 0) {
      const fetchRefreshMenu = async () => {
        const data = await req(configEndpoint.putKeyValue, {
          "items": [
            {
              "key": "progressMenuPersonalFinanceUnit1",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuPersonalFinanceUnit2",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuPersonalFinanceUnit3",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuPersonalFinanceUnit4",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuPersonalFinanceUnit5",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuBehavioralFinanceUnit1",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T 2. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuBehavioralFinanceUnit2",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T 2. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuBehavioralFinanceUnit3",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T 2. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuBehavioralFinanceUnit4",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T 2. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            },
            {
              "key": "progressMenuBehavioralFinanceUnit5",
              "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T 2. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
            }
          ]
        })
        return data
      }
      fetchRefreshMenu()
    }
    auth.signIn(data.data?.token as string, () => {
      navigate('/dashboard');
    })
    auth.signInRefresh(data.data?.refreshToken as string)
  }

  useEffect(() => {
    confirmUser()
  }, [])
  return (
    <h1>
      This is register confirm
    </h1>
  )
}

export default RegisterConfirm;