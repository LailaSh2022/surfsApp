import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(":").shift()}:5000`; //this line will generate the your machine ip automatically

export function getUserInfoFromServer() {
  console.log(`${uri}/users`);
  fetch(`${uri}/users`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

export function UpdateUserInfoIntoServer(updatedUser) {
  console.log("updated user...");
  console.log(updatedUser);

  fetch(`${uri}/users/` + updatedUser.Id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("User updated:", data);
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
}
