import React from "react";
import { useEmail } from "../hooks/useEmail";

function Email() {
  const { result, onSubmit } = useEmail();

  return (
    <div className="App">
      <h1>React File Upload Form</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <input type="submit" />
      </form>
      <span>{result}</span>
    </div>
  );
}

export default Email;
