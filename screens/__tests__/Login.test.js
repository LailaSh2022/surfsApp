import React from "react";
import renderer from "react-test-renderer";
import Login from "../Login";

// mock the Constants module
jest.mock("expo", () => ({
  Constants: {
    appOwnership: "development",
  },
}));

describe("Login", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
