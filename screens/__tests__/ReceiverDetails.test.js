import React from "react";
import renderer from "react-test-renderer";
import ReceiverDetails from "../ReceiverDetails";
import "../../global.js";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
  useRoute: () => ({ params: {} }),
}));
jest.mock("../../Database", () => ({
  GetRecipientDetails: () =>
    Promise.resolve({
      FirstName: "John",
      MiddleName: "",
      LastName: "Deer",
      Email: "john.deer@gmail.com",
      MobileNumber: "021222222222222",
      Relationship: "Friend",
      Bank_Account_Number: "1234567890",
      Address: "10 Martin Road Manurewa Auckland New Zealand",
      Currency: "NZD",
      Swift_Code: "012",
    }),
}));

global.ReceiverId[0] = "1";

describe("ReceiverDetails", () => {
  it("renders correctly", async () => {
    const tree = renderer.create(<ReceiverDetails />).toJSON();
    await new Promise((resolve) => setTimeout(resolve, 100)); // wait for useEffect to complete
    expect(tree).toMatchSnapshot();
  });
});
