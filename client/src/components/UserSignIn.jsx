import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorsDisplay from "./ErrorsDisplay";

export default function UserSignIn() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const submit = (event) => {
    event.preventDefault();
    const { from } = location.state || {
      from: { pathname: "/" },
    };

    context.actions
      .signIn(emailAddress, passowrd)
      .then((user) => {
        if (user === null) {
          setErrors(() => ["Sign-in was not successful"]);
        } else {
          history.push(from);
          console.log(`SUCCESS! ${emailAddress} is now signed in`);
        }
      })
      // Catch an error thrown by api
      // To display error message

      .catch((err) => {
        console.log(err);
        history.push("/error");
      });
  };

  const cancel = () => {
    history.push("/error");
  };

  return (
    <main>
      <div className="form-centered">
        <h2>Sign In</h2>
        {errors.length > 0 && <ErrorsDisplay errors={errors} />}
        <form onSubmit={subumit}>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Sign In
          </button>

          <button
            className="button button-secondary"
            onClick={(e) => event.preventDefault()}
          >
            Cancel
          </button>
        </form>
        <p>
          Do you have an account ? Click here to {""}
          <Link to={"/signup"}>Sign UP</Link>
        </p>
      </div>
    </main>
  );
}
