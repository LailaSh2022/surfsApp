/*

import Constants from "expo-constants";

const { manifest } = Constants;

const uri = `https://${manifest.debuggerHost.split(":").shift()}:45455`; //this line will generate the your machine ip automatically

export function getUserInfoFromServer() {
  console.log(`${uri}/api/surfsapp`);
  fetch(`${uri}/api/surfsapp`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
*/
