import React, { useRef, useEffect } from "react";
import { auth } from "../firebase";
import "./SignIn.css";

const SignIn = () => {
  const container = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="signin">
      <div className="container"></div>
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Enter email" />
        <input ref={passwordRef} type="password" placeholder="Enter password" />
        <button onClick={signIn}>Sign In</button>
        <h6>
          Not yet register?
          <span onClick={signUp} className="signin_link">
            Sign Up
          </span>
        </h6>
      </form>
    </div>
  );
};

export default SignIn;
