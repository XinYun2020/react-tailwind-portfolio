import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MenuButton } from "./MenuButton";

describe("MenuButton", () => {
  it("should render a button with the class of primary", () => {
    render(<MenuButton name="Test MenuButton" />);
    expect(screen.getByText(/Test MenuButton/)).toBeInTheDocument();
  });

  const mockOnClick = jest.fn();
  it("should trigger onClick when clicked.", () => {
    render(<MenuButton name="Test MenuButton" onClick={mockOnClick} />);
    // userEvent.click(screen.getByText(/Test Button/));''
    fireEvent.click(screen.getByText(/Test MenuButton/));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
