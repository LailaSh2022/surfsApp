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

  return SQLite.openDatabase("surfsApp.db");
};

CopyDatabase()
  .then(() => {
    console.log("success copy db");
  })
  .catch((error) => {
    console.log(`Error while copying database: ${error}`);
  });

export async function OpenDatabase() {
  const database = SQLite.openDatabase("surfsApp.db");
  database._db.close();
  //await CopyDatabase();
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
            resolve(_array[0].Id);
          } else {
            resolve(null);
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

export async function SignUpNewUser(user) {
  const db = await OpenDatabase();
  console.log(user);
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Users (FirstName, LastName, UserName, Password, DateOfBirth, Email, Phone_Number, Image, Bank_Account_Number) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
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
        (txObj, resultSet) => {
          console.log("insertId: " + resultSet.insertId);
          console.log("rowsAffected: " + resultSet.rowsAffected);
        },
        (txObj, error) => {
          console.log("Error: " + error.message);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export async function AddUserIDReceiverId(userId, receiverId) {
  const db = await OpenDatabase();
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Users_Recipients (UserId, RecipientId) VALUES (?, ?);",
        [userId, receiverId],
        (txObj, resultSet) => {
          console.log("insertId: " + resultSet.insertId);
          console.log("rowsAffected: " + resultSet.rowsAffected);
        },
        (txObj, error) => {
          console.log("Error: " + error.message);
        }
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export async function AddNewReceiver(receiver, userId) {
  console.log(receiver);
  const db = await OpenDatabase();
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Recipients (FirstName, MiddleName, LastName, Email, MobileNumber, Relationship, Bank_Account_Number, Address, Currency, Swift_Code) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?);",
        [
          receiver.firstname,
          "",
          receiver.lastname,
          receiver.email,
          receiver.MobileNum,
          receiver.relationship,
          receiver.bankAccount,
          "",
          receiver.currency,
          receiver.SwiftNum,
        ],
        (_, { rowsAffected, insertId }) => {
          console.log(`Inserted ${rowsAffected} row with ID ${insertId}`);
          AddUserIDReceiverId(userId, insertId)
            .then(() => {
              console.log("adder user id and receiver id success");
            })
            .catch((error) => {
              console.log("error");
            });
        },
        (error) => console.log(error)
      );
    });
  } catch (error) {
    console.log(error);
  }
}
//Get user's data
export async function getUser(id) {
  const db = await OpenDatabase();
  return new Promise((resolve, reject) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM Users Where Id = ?",
          [id],
          (tx, { rows }) => {
            resolve(rows._array[0]);
          }
        );
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Update user profile data.
//
export async function updateExistingUser(user) {
  const db = await OpenDatabase();
  console.log(user);
  console.log("Executing SQL query...");
  db.transaction((tx) => {
    console.log("Transaction started");
    console.log(user.Id);
    tx.executeSql(
      "UPDATE Users SET FirstName = ?, LastName = ?, UserName = ?, Password = ?," +
        "Email = ?, Phone_Number = ? WHERE Id = ? ;",
      [
        user.firstName,
        user.lastName,
        user.username,
        user.password,
        user.email,
        user.MobileNum,
        user.Id,
      ],
      (_, { rowsAffected }) => {
        console.log(`Updated ${rowsAffected} row`);
        tx.executeSql(
          "SELECT * FROM Users WHERE Id = ?;",
          [user.Id],
          (_, { rows }) => {
            console.log(`User updated successfully`);
            console.log(rows.item(0));
          },
          (_, error) =>
            console.log(`Error while getting receiver details: `, error)
        );
      },
      (_, error) => console.log(`Error updating user ${user.Id}: `, error)
    );
    console.log("Transaction completed");
  });
}

// Unsubscribe User

export async function deleteUser(id) {
  const db = await OpenDatabase();
  console.log("Executing SQL query...");
  try {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM Users WHERE Id = ?;",
        [id],
        (_, { rowsAffected }) => {
          console.log(`Deleted ${rowsAffected} rows`);
        },
        (_, error) => console.log(error)
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export async function GetAllOrderByUserId(userId) {
  const db = await OpenDatabase();
  return new Promise((resolve, reject) => {
    console.log("Executing SQL query...");
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Orders WHERE SenderId=?;",
        [userId],
        (_, { rows: { _array } }) => {
          console.log("Query completed successfully.");

          if (_array.length > 0) {
            resolve(_array);
          } else {
            resolve(null);
          }
        },
        (_, error) => {
          console.log(`Error while executing SQL query: ${error}`);

          reject(error);
        }
      );
    });
  });
}
