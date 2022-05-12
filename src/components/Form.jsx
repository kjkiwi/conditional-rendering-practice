import React from "react";

//import Input from "./Input"; --unnecessary with Angie's way

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button id="button" type="submit">
        {props.isRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
