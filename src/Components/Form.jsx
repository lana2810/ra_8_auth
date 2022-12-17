import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function Form() {
  const { login, error, resetError } = useAuth();
  const initialStateForm = {
    login: "",
    password: "",
  };
  const [form, setForm] = useState(initialStateForm);

  const handleChange = ({ target }) => {
    resetError();
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialStateForm);
    login(form);
  };
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="input-div">
        <input
          type="text"
          required
          name="login"
          placeholder="Username"
          spellCheck="false"
          value={form.login}
          onChange={handleChange}
          className={error.loginErr && "error-border"}
        />
        {error.loginErr && (
          <div className="error-form-input">{error.loginErr}</div>
        )}
      </div>
      <div className="input-div">
        <input
          type="password"
          required
          name="password"
          placeholder="Password"
          spellCheck="false"
          value={form.password}
          onChange={handleChange}
          className={error.passwordErr && "error-border input-password"}
        />
        {error.passwordErr && (
          <div className="error-form-input">{error.passwordErr}</div>
        )}
      </div>
      <button type="submit" className="btn btn-login">
        Login
      </button>
    </form>
  );
}

export default Form;
