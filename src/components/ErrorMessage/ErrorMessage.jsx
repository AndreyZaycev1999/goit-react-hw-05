import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message = "Something ERROR" }) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
