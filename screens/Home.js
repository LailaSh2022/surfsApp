// JavaScript source code
import React from "react";
import { View, Text } from "react-native";
import Profile from "./Profile";
import HomePage from "./HomePage";


/*open database.
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
        Asset.fromModule(require("../assets/surfsApp.db")).uri,
        FileSystem.documentDirectory + `SQLite/${dbName}`
    );
}


*/

const Home = ({ navigation }) => {

    /*open database 
    const recipientId = 1;   
    var recipient;
    createDb();
    const db = SQLite.openDatabase("surfsApp.db");    
    // execute the SELECT query
    
    db.transaction(tx => {
        tx.executeSql(
            'SELECT * FROM Recipients WHERE Id = ?',
            [recipientId],
            (tx, result) => {
                recipient = result.rows.item(0);
                console.log(recipient);
            },
            error => {
                console.log(error);
            }
        );
    });
    
    */

  const login = "login";
  const Profile = "Profile";
  const HomePage = "HomePage";
  const receiverDetails = "receiver details";
  const orderSummary = "order summary";
  const history = "history";
  const SignUp = "Sign Up";

  return (
    <View>
      <Text onPress={() => navigation.navigate("HomePage")}>{HomePage}</Text>
      <Text onPress={() => navigation.navigate("SignUp")}>{SignUp}</Text>

      <Text onPress={() => navigation.navigate("Login")}>{login}</Text>
          <Text onPress={() => navigation.navigate("Profile")}>{Profile}</Text>
          <Text onPress={() => navigation.navigate("ReceiverDetails")}>
        {receiverDetails}
      </Text>
      <Text onPress={() => navigation.navigate("OrderSummary")}>
        {orderSummary}
      </Text>
      <Text onPress={() => navigation.navigate("History")}>{history}</Text>
    </View>
  );
};
export default Home;
