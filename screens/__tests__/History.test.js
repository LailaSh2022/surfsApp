import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import History from "../History";

jest.mock("@react-navigation/native", () => ({
  useRoute: () => ({
    params: {
      userId: "3",
    },
  }),
}));

jest.mock("../../Database", () => ({
  GetAllOrderByUserId: jest.fn(() => Promise.resolve([])),
}));

it(
  "Testing History screen against its snapshot. " +
    "If there is any unexpected change in the screen, it will prompt test failed.",
  () => {
    const tree = renderer.create(<History />).toJSON();
    expect(tree).toMatchSnapshot();
  }
);
