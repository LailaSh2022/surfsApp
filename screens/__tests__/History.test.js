import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import History from "../History";

it(
  "Testing History screen against its snapshot. " +
    "If there is any unexpected change in the screen, it will prompt test failed.",
  () => {
    const mockRoute = {
      params: {
        transactions: [
          {
            OrderNo: 1,
            SentDate: "12/31/2022",
            Receiver: "John Deer",
            Amount: 350.0,
            ReceivierGets: 201.0,
            From: "NZD",
            To: "USD",
          },
        ],
      },
    };

    const tree = renderer.create(<History route={mockRoute} />).toJSON();
    expect(tree).toMatchSnapshot();
  }
);
