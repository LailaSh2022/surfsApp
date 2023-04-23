import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import ReceiverDetails from "../ReceiverDetails";

it(
  "Testing ReceiverDetails screen against its snapshot. " +
    "If there is any unexpected change in the screen, it will prompt test failed.",
  () => {
    const mockRoute = {
      params: {
        receiver: {
          FirstName: "John",
          MiddleName: "",
          LastName: "Dear",
          Bank_Account_Number: "07-111111111111111-02",
          Address: "10 Martin Road, Manurewa, Auckland 2102",
          Email: "john_deer@gmail.com",
          Swift_Code: "012",
        },
      },
    };

    const tree = renderer
      .create(<ReceiverDetails route={mockRoute} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  }
);
