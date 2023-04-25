const SQLite = require("react-native-sqlite-storage");

SQLite.openDatabase = jest.fn();

module.exports = SQLite;
