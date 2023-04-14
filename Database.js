import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("surfsApp.db");

export function getAllRecipients() {
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

export function getAllUsers() {
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

export function CheckUserNameExists(username) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Users WHERE username = ?",
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

export function SignUpNewUser(user) {
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

export function NewReceiver(ReceiverDetails) {
  console.log(user);
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
