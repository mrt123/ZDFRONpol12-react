import { fireEvent, render, screen } from "@testing-library/react";
import ClickCounter from "../ClickCounter";

describe("ClickCounter", () => {
  it("matches snapshot", () => {
    const { container } = render(<ClickCounter />);
    expect(container).toMatchSnapshot();
  });

  it("clicking 1 time increases number by 1", () => {
    const { getByText } = render(<ClickCounter />);

    const elementWIthExpectedTextBeforeClick = getByText("Click me 0");
    expect(elementWIthExpectedTextBeforeClick).toBeInTheDocument();

    fireEvent.click(screen.getByText(/click me/i));

    const elementWithExpectedTextAfterClick = getByText("Click me 1");
    expect(elementWithExpectedTextAfterClick).toBeInTheDocument();
  });

  // TODO: test what happens after 10 clicks
  it("clicking 10 time increases number by 10", () => {
    // ARRANGE
    const { getByText } = render(<ClickCounter />);
    const elementWIthExpectedTextBeforeClick = getByText("Click me 0");
    expect(elementWIthExpectedTextBeforeClick).toBeInTheDocument();
    const clickCounterElement = getByText(/click me/i);

    // ACT
    for (let x = 0; x < 10; x++) {
      fireEvent.click(clickCounterElement);

      // ASSERT
      const elementWithExpectedTextAfterClick = getByText(`Click me ${x + 1}`);
      expect(elementWithExpectedTextAfterClick).toBeInTheDocument();
    }
  });
});
