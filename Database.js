import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

const CopyDatabase = async () => {
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
    FileSystem.documentDirectory + "SQLite/surfsApp.db"
  );
};

export async function OpenDatabase() {
  await CopyDatabase();
  return SQLite.openDatabase("surfsApp.db");
}

export async function getAllRecipients() {
  const db = await OpenDatabase();
  try {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Recipients", [], (tx, { rows }) => {
        console.log(rows._array);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsers() {
  const db = await OpenDatabase();
  try {
    db.transaction((tx) => {
      tx.executeSql("SELECT * FROM Users", [], (tx, { rows }) => {
        console.log(rows._array);
      });
    });
  } catch (error) {
    console.log(error);
  }
}
//Check the user credentials

export async function checkUsernamePassword(username, password) {
  const db = await OpenDatabase();
  return new Promise((resolve, reject) => {
    console.log("Executing SQL query...");
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Users WHERE UserName = ? AND Password = ?",
        [username, password],
        (_, { rows: { _array } }) => {
          console.log("Query completed successfully.");
          if (_array.length > 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (_, error) => {
          console.log(`Error while executing SQL query: ${error}`);
          console.log(error);
          reject(error);
        }
      );
    });
  });
}

export async function CheckUserNameExists(username) {
  const db = await OpenDatabase();
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Users WHERE UserName = ?",
        [username],
        (_, { rows: { _array } }) => {
          if (_array.length > 0) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}

export async function GetReceiverDetails(receiverId) {
  const db = await OpenDatabase();
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Recipients WHERE Id = ?",
        [receiverId],
        (_, { rows }) => {
          if (rows._array.length > 0) {
            console.log(rows.item(0));
            resolve(rows.item(0));
          } else {
            resolve(null);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}

export async function GetReceiverBankInfo(BankInfoId) {
  const db = await OpenDatabase();
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Bank_Info WHERE Id = ?",
        [BankInfoId],
        (_, { rows }) => {
          if (rows._array.length > 0) {
            console.log(rows.item(0));
            resolve(rows.item(0));
          } else {
            resolve(null);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
}

export async function SignUpNewUser(user) {
  const db = await OpenDatabase();
  console.log(user);
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Users (FirstName, LastName, UserName, Password, DateOfBIrth, Email, Phone_Number, Image, Bank_Account_Number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
          user.FirstName,
          user.LastName,
          user.UserName,
          user.Password,
          user.DateOfBirth,
          user.Email,
          user.Phone_Number,
          "",
          "",
        ],
        (_, { rowsAffected, insertId }) => {
          console.log(`Inserted ${rowsAffected} row with ID ${insertId}`);
        },
        (error) => console.log(error)
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export async function NewReceiver(ReceiverDetails) {
  const db = await OpenDatabase();
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Users (Currency, Name, MobileNum, relantionship, Email, Bank_Account_Number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
        [
          ReceiverDetails.currency,
          ReceiverDetails.email,
          ReceiverDetails.name,
          ReceiverDetails.MobileNum,
          ReceiverDetails.relantioship,
          ReceiverDetails.bankAccount,

          "1",
          "2",
        ],
        (_, { rowsAffected, insertId }) => {
          console.log(`Inserted ${rowsAffected} row with ID ${insertId}`);
        },
        (error) => console.log(error)
      );
    });
  } catch (error) {
    console.log(error);
  }
}
