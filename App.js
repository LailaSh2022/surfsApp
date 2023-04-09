// screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import HomePage from "./screens/HomePage";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import OrderSummary from "./screens/OrderSummary";
import ReceiverDetails from "./screens/ReceiverDetails";
import History from "./screens/History";

import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const dbName = "surfsApp.db";
async function createDb() {
  if (
    !(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite"))
      .exists
  ) {
    await FileSystem.makeDirectoryAsync(
      FileSystem.documentDirectory + "SQLite"
    );
  }

  await FileSystem.downloadAsync(
    Asset.fromModule(require("./assets/surfsApp.db")).uri,
    FileSystem.documentDirectory + `SQLite/${dbName}`
  );
}

const Stack = createStackNavigator();

export default function App() {
  createDb();
  const db = SQLite.openDatabase("surfsApp.db");
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM Users", [], (_, { rows }) =>
      console.log(rows._array)
    );
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "SurfsApp Limited" }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ReceiverDetails" component={ReceiverDetails} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
