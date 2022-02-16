import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "../../components/Container";
import {TutorialBlock} from "./components/TutorialBlock";
import StatsBlock from "./components/StatsBlock";
import map from './assets/map.png';
import {dataDashboardSelector, getDashboardAsync, isLoadingDashboardSelector} from "../../store/dashboardSlicer";
import s from './style.module.scss'
import req from "../../utils/request";
import {configEndpoint} from "../../config";

interface dashboardProps {
  name?: string,
  tutorialName?: string
}

export const DashBoard: React.FC<dashboardProps> = ({name = "Anton", tutorialName = "personal"}) => {
  const data = useSelector(dataDashboardSelector);
  const isLoading = useSelector(isLoadingDashboardSelector);
  const dispatch = useDispatch();
  // const fetchRefreshMenu = async () => {
  //   const data = await req(configEndpoint.putKeyValue, {
  //     "items": [
  //       {
  //         "key": "progressMenuUnit1",
  //         "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
  //       },
  //       {
  //         "key": "progressMenuUnit2",
  //         "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
  //       },
  //       {
  //         "key": "progressMenuUnit3",
  //         "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
  //       },
  //       {
  //         "key": "progressMenuUnit4",
  //         "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
  //       },
  //       {
  //         "key": "progressMenuUnit5",
  //         "value": "[{\"id\":\"1\",\"type\":\"1.1 Text:\",\"title\":\"Your goal by S.M.A.R.T. and life cases 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgB7ZPBDcIwDEXtiAGyDEKoSMAkrAATEDboCN0EKhUBgiEYIQskJkFNCZWrprce+i52LOfLib4Rasrba0fG5C6V8I9GFPk6m5+AQYSErFHMZY8ksqq8Po+cAIbkUj3Ix81qgXFDqH+bUaj2JAIGwE2SIqDbIufqvk8WILQH99B3XEPAZopZn8A2WxYuFOFc/4lMnqCPSWAMArEPvONk7P1OImP9tpFxXAeawDYL9QFcaT6Ja5IKdAAAAABJRU5ErkJggg==\",\"valid\":false},{\"id\":\"2\",\"type\":\"1.2 Test: \",\"title\":\"What is S.M.A.R.T. 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"3\",\"type\":\"1.3 Video: \",\"title\":\"How to be successful? 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACpSURBVHgBxZLBDYJAEEX/rIQzJdCCJw56gBKsQCzBDrQDO7AFO9jVSAjEHqQD92wC42ICNyC7HHiXmWTy3+UPsDR0z197ruuL2QO7JCoSqxOprHiDEcIN7XXheBuRTVI9CzYjEJjJqEBl5VXKPHQWgDklX0j5KFM3wV/StsN66OyNZU1VN/76hyRZuwniTbTDBLNbINPnB7Zf2KdRCabm2C6wRzOaMxbnB4LOMP4WyImOAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"4\",\"type\":\"1.4 Case: \",\"title\":\"#1 SMART technology 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"5\",\"type\":\"1.5 Test: \",\"title\":\"Let’s help Amanda 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false},{\"id\":\"6\",\"type\":\"1.6 Game: \",\"title\":\"Match a pair 1\",\"icon\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgBvZPdCcJADMeTegN0BEfwQRCpoB2hE+gKblA3cAUn6AitUJGKYEdwhD7ba+NFej5VDZz0D/eV8EvC5Q7AUcjT8XxdU9PszdYXUnf0RvFyPj14fKa2icXwC4BxlxCUNfCyWsxQwmd5QTahB44aJkCaniZZfrn1+ZQERqUSqutIHCDNixJQb+BhOsaw1lEYBqU4AMMIKmHvN5jVewdhEJQEOvoFf66gCwICObfRVlCZ4XcvTCbzH94VELZbaxCqImh38A89AYeaSo4swr/gAAAAAElFTkSuQmCC\",\"valid\":false}]"
  //       }
  //
  //     ]
  //   })
  //   return data
  // }

  const fetchTutorials = async () => {
    const data = await req(configEndpoint.dashboard, {
      "tutorial": 2
    })
  }

  useEffect(() => {
    // fetchRefreshMenu()
    dispatch(getDashboardAsync(1));
  }, [])

  return (
    <div className={s.wrap}>
      <Container>
        <h1 className={s.title}>
          {`Welcome, ${name}`}
        </h1>
        <p className={s.subtitle}>
          Now, you are ready to start you course
        </p>
        <div className={s.inner}>
          {
            data === null || undefined && isLoading ? (
              <div>...Loading</div>
            ) : (
              <>
                <div className={s.leftSide}>
                  <img className={s.map} src={map} alt="map"/>
                  <TutorialBlock
                    tutorialName={"personal"}
                    unitsScore={data?.units}
                  />
                </div>
                <div className={s.rightSide}>
                  <StatsBlock
                    data={data}
                  />
                </div>
              </>
            )
          }
        </div>

      </Container>
    </div>
  )
}
