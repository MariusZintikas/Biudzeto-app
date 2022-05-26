import { useState } from "react";
// import Footer from "./Footer";
// import Header from "./Header";

function RegistrationForm() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Vartotojas {name} sėkmingai užregistruotas!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Užpildykite visus laukus!</h1>
      </div>
    );
  };

  return (
    <div className="RgPage">
      <div className="form">
        {/* <Header /> */}
        {/* Calling to the methods */}
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form className="registrationForm">
          <fieldset className="formBorder">
            <legend>Registruotis</legend>
            {/* Labels and inputs for form data */}
            <input
              onChange={handleName}
              className="input-form"
              value={name}
              type="text"
              placeholder="Vartotojo vardas"
            />

            <input
              onChange={handleEmail}
              className="input-form"
              value={email}
              type="email"
              placeholder="El. paštas"
            />

            <input
              onChange={handlePassword}
              className="input-form"
              value={password}
              type="password"
              placeholder="Slaptažodis"
            />
          </fieldset>

          <button onClick={handleSubmit} className="btn1" type="submit">
            Registruotis
          </button>
        </form>
      </div>
      <br></br>
      <br />
      {/* <Footer /> */}
    </div>
  );
}

export default RegistrationForm;
