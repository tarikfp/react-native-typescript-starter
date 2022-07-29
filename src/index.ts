import "reflect-metadata";
import "./scripts/setup-debug";
import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";
import App from "./app";

AppRegistry.registerComponent(appName, () => App);
