import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `http://${manifest.debuggerHost.split(":").shift()}:5000`; 

export async function getUserInfoFromServer(userId) {
  try {
    const response = await fetch(`${uri}/users/` + userId);
    
    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      console.log(`Error fetching user: ${response.status}`);
    }
  } catch (error) {
    console.log(`Error fetching user: ${error}`);
  }
}

export function UpdateUserInfoIntoServer(updatedUser) {
  console.log("updated user...");

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
