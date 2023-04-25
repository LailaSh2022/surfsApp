import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Unsubscribe from "./../Unsubscribe";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native");

describe("Unsubscribe screen", () => {
  it("navigates to Home page when 'Home Page' is clicked", () => {
    const navigateMock = jest.fn();
    useNavigation.mockReturnValue({ navigate: navigateMock });

    const { getByText } = render(<Unsubscribe />);
    fireEvent.press(getByText("Home Page"));

    expect(navigateMock).toHaveBeenCalledWith("HomePage");
  });
});
