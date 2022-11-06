import React, { ChangeEvent, FormEvent, useState } from "react";
import InputWarningMessage from "../components/form/InputWarningMessage";

const ContactFormPage2 = () => {
  const initialFormState = {
    firstName: "",
    surname: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.currentTarget.name;
    const newState = {
      ...formState,
      [inputName]: event.currentTarget.value,
    };
    setFormState(newState);
  };

  const fullName = `${formState.firstName} ${formState.surname}`;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    alert("A name was submitted: " + fullName);
    e.preventDefault();
  };

  const tooFewharactersMessage = "To few characters!";
  const resetForm = () => setFormState(initialFormState);

  const forbiddenCharacterMessage = "You cannot use @";
  const textConstainsForbiddenSign = (text: string) => {
    return text.includes("@");
  };

  return (
    <>
      <h4>Contact from with object state:</h4>
      <br />
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={formState.firstName}
          onChange={handleInputChange}
        />
        <InputWarningMessage
          show={textConstainsForbiddenSign(formState.firstName)}
          message={forbiddenCharacterMessage}
        />
        <input
          type="text"
          name="surname"
          value={formState.surname}
          onChange={handleInputChange}
        />
        <InputWarningMessage
          show={formState.surname.length < 4}
          message={tooFewharactersMessage}
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={resetForm}>reset</button>
    </>
  );
};

export default ContactFormPage2;