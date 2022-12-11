const warningMessageStyle = {
  color: "rgb(255, 70, 0)",
  fontSize: "14px",
  margin: "4px",
  height: "14px",
};
interface InputWarningMessageProps {
  message: string;
  show: boolean;
}

const InputWarningMessage = ({ message, show }: InputWarningMessageProps) => {
  const messageToRender = show ? message : null;
  return (
    <div style={warningMessageStyle} data-testid="InputWarningMessage">
      {messageToRender}
    </div>
  );
};

export default InputWarningMessage;
