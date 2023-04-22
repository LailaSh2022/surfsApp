import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import OrderSummary from "../OrderSummary";

it("Testing OrderSummary screen against its snapshot. If there is unexpected change in UI, it will prompt test failed.", () => {
  const mockRoute = {
    params: {
      OrderSummary: {
        OrderId: 1,
        Date: "16/04/2023",
        Rate: 3.05,
        From_Currency: "NZD",
        To_Currency: "BRL",
        Amount: 350,
        Fee: 0.01,
      },
    },
  };

  const tree = renderer.create(<OrderSummary route={mockRoute} />).toJSON();
  expect(tree).toMatchSnapshot();
});
