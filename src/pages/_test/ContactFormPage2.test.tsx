import { fireEvent, render } from "@testing-library/react";

import ContactFormPage2 from "../ContactFormPage2";

describe("ContactFormPage2", () => {
  it("reset form button", () => {
    // ARRANGE
    const { getByText } = render(<ContactFormPage2 />);

    const nameInputElement = document.querySelector(
      "input[name='firstName']"
    ) as HTMLInputElement;
    fireEvent.change(nameInputElement, { target: { value: "Hello its me" } });
    expect(nameInputElement?.value).toBe("Hello its me");

    // ACT
    const resetButton = getByText("reset");
    fireEvent.click(resetButton);

    // ASSERT
    expect(nameInputElement?.value).toBe("");
  });

  it("first input shows and hides correct warning depending on character count", () => {
    const { getAllByTestId } = render(<ContactFormPage2 />);

    const warningMessage = getAllByTestId("InputWarningMessage");
    expect(warningMessage[0]).toHaveTextContent("");

    const firstnameInputElement = document.querySelector(
      "input[name='firstName']"
    ) as HTMLInputElement;

    fireEvent.change(firstnameInputElement, { target: { value: "1234" } });
    expect(warningMessage[0]).toHaveTextContent("");

    fireEvent.change(firstnameInputElement, { target: { value: "1234@" } });
    expect(warningMessage[0]).toHaveTextContent("You cannot use @");

    fireEvent.change(firstnameInputElement, { target: { value: "1234567" } });
    expect(warningMessage[0]).toHaveTextContent("");
  });

  it("2nd input shows and hides correct warning depending on character count", () => {
    const { getAllByTestId } = render(<ContactFormPage2 />);

    const warningMessage = getAllByTestId("InputWarningMessage");
    expect(warningMessage[1]).toHaveTextContent("To few characters!");

    const surnameInputElement = document.querySelector(
      "input[name='surname']"
    ) as HTMLInputElement;

    fireEvent.change(surnameInputElement, { target: { value: "1234" } });
    expect(warningMessage[1]).toHaveTextContent("");
  });
});
