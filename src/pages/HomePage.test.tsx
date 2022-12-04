import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("HomePage content test", () => {
  // ARRANGE
  render(<HomePage />);
  const testedElement = screen.getByText("Not much here yet!");

  // ASSERT
  expect(testedElement).toBeInTheDocument();
});
