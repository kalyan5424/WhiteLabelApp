/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import Config from "react-native-config";
console.log("App Launched::", Config.APP_NAME);
AppRegistry.registerComponent(Config.APP_NAME, () => App);
