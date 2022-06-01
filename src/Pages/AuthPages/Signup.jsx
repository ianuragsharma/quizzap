import { updateProfile } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { useDocumentTitle } from "../../hooks";

const Signup = () => {
  const [signupFromData, setSignupFromData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { firstName, lastName, email, password, confirmPassword } =
    signupFromData;
  const [formError, setFormError] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");
  const { signup, user } = useAuth();
  useDocumentTitle("Signup");
  const fieldChangeHandler = (e) => {
    const { name, value } = e.target;
    setSignupFromData((prevData) => ({ ...prevData, [name]: value }));
  };

  const singUpHandler = async (e) => {
    e.preventDefault();
    setFirebaseError("");
    if (password !== confirmPassword) {
      setFormError(true);
      return;
    }
    try {
      await signup(email, password);
      const userName = `${firstName.trim()} ${lastName.trim()}`;
      localStorage.setItem("userName", userName);
      navigate("/");
    } catch (err) {
      setFirebaseError(err.message);
    }
  };

  return (
    <div>
      <form className="auth-container" onSubmit={(e) => singUpHandler(e)}>
        <h4 className="text-center">Signup</h4>

        <div className="user-details flex-column">
          <label htmlFor="email" className="input-label text-base">
            First Name :
          </label>
          <input
            name="firstName"
            type="text"
            className="input-area text-base"
            placeholder="Enter First Name"
            value={firstName}
            onChange={fieldChangeHandler}
            required
          />
          <label htmlFor="email" className="input-label text-base">
            Last Name :
          </label>
          <input
            name="lastName"
            type="text"
            className="input-area text-base"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={fieldChangeHandler}
            required
          />

          <label htmlFor="email" className="input-label text-base">
            Email :
          </label>
          <input
            name="email"
            type="email"
            className="input-area text-base"
            placeholder="Enter Email"
            required
            value={email}
            onChange={fieldChangeHandler}
          />

          <label htmlFor="password" className="input-label text-base">
            Password :
          </label>
          <input
            name="password"
            type="password"
            className="input-area text-base"
            required
            minLength="4"
            placeholder="Enter Password"
            value={password}
            onChange={fieldChangeHandler}
          />
          <label htmlFor="password" className="input-label text-base">
            Confirm Password :
          </label>
          <input
            name="confirmPassword"
            type="password"
            className="input-area text-base"
            required
            minLength="4"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={fieldChangeHandler}
          />
          {formError && (
            <span className=" error-msg text-sm">
              Both password and confirm password should be same
            </span>
          )}
          <div className="flex-row">
            <span>
              <input
                type="checkbox"
                id="term-condition"
                name="term-condition"
                value="term-condition"
                required
              />
              <label htmlFor="term-condition">
                I accept all term and condition
              </label>
            </span>
          </div>
          {firebaseError && (
            <span class=" error-msg text-sm">{firebaseError}</span>
          )}

          <button className="btn btn-solid-primary text-base text-white">
            Create New Account
          </button>
          <button className="link-btn text-base ">
            <Link to="/login">
              Already have an account
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export { Signup };
