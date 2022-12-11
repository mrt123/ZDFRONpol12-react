import { fireEvent, render } from "@testing-library/react";

const typeIntoInputWithName = (
  inputName: string,
  text: string
): HTMLInputElement => {
  const inputElement = document.querySelector(
    `input[name='${inputName}']`
  ) as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: text } });
  return inputElement;
};

import ContactFormPage2 from "../ContactFormPage2";

describe("ContactFormPage2", () => {
  it("reset form button", () => {
    // ARRANGE
    const { getByText } = render(<ContactFormPage2 />);
    const nameInputElement = typeIntoInputWithName("firstName", "Hello its me");

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

    const firstnameInputElement = typeIntoInputWithName(
      "firstName",
      "Hello its me"
    );

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

    typeIntoInputWithName("surname", "1234");
    expect(warningMessage[1]).toHaveTextContent("");
  });
});
