import { createSwitchNavigator } from "react-navigation";

import CheckAuth from './CheckAuth'
import LoggedOutNavigator from "./LoggedOutNavigator";
import LoggedInNavigator from "./LoggedInNavigation";



export default createSwitchNavigator(
  {
    CheckAuth,
    LoggedOutNavigator,
    LoggedInNavigator
  }
);
