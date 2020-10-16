import { auth } from "../../firebase";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    //login logic...
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    //register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form className="login__form">
          <h5>E-mail</h5>
          <input
            style={{ marginBottom: "10px", height: "30px" }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            style={{ marginBottom: "25px", height: "30px" }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
