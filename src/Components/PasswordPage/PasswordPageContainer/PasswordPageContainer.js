import React, { useState } from "react";
import PasswordPageContainerCSS from "./PasswordPageContainer.module.css";
import { useChangePassword } from "../../../Hooks/CustomHooks";
function PasswordPageContainer() {
  const styled = PasswordPageContainerCSS;
  const [firstPassword, setFirstPassword] = useState();
  const [secondPassword, setSecondPassword] = useState();
  const changePassword = useChangePassword();
  const submitHandler = (e) => {
    e.preventDefault();
    if (firstPassword === secondPassword) {
      changePassword(firstPassword);
    } else {
      alert("Please provide 2 same passwords.");
    }
  };
  const changeHandler = (e) => {
    if (e.currentTarget.id === "changePasswordFirstInput") {
      setFirstPassword(e.currentTarget.value);
    } else if (e.currentTarget.id === "changePasswordSecondInput") {
      setSecondPassword(e.currentTarget.value);
    }
  };

  return (
    <div className={styled.PasswordPageContainer}>
      <h1>Change Password</h1>
      <hr />
      <form onSubmit={submitHandler} className={styled.form}>
        <div className={styled.inputGroup}>
          <label>Password</label>
          <input
            id="changePasswordFirstInput"
            required
            minLength={5}
            value={firstPassword}
            onChange={changeHandler}
            type="password"
            placeholder="Enter your new password"
          />
        </div>
        <div className={styled.inputGroup}>
          <label>Confirm Password</label>
          <input
            id="changePasswordSecondInput"
            required
            minLength={5}
            value={secondPassword}
            onChange={changeHandler}
            type="password"
            placeholder="Enter your new password again"
          />
        </div>

        <input
          className={styled.submitButton}
          type="submit"
          value="Change Password"
        />
      </form>
    </div>
  );
}

export default PasswordPageContainer;
