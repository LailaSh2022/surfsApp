import React from "react";
import renderer from "react-test-renderer";
import OrderSummary from "../OrderSummary";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
  useRoute: () => ({ params: {} }),
}));

jest.mock("../../Database", () => ({
  getLastOrderId: () => Promise.resolve(1),
}));

describe("OrderSummary", () => {
  it("renders correctly", async () => {
    const tree = renderer.create(<OrderSummary />).toJSON();
    await new Promise((resolve) => setTimeout(resolve, 100)); // wait for useEffect to complete
    expect(tree).toMatchSnapshot();
  });
});
