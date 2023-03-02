import React from "react";
import "../SignIn/SignIn.css";

function Register() {
  return (
    <div>
      <div>
        <form className="signincontainer">
          <h1 className="text-light">Registration</h1>
          <br></br>
          <input
            className="signininput"
            type="text"
            placeholder="Enter Your Name"
            required
          />
          <input
            className="signininput"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="signininput"
            type="text"
            placeholder="Email or phone number"
            required
          />
          <input
            className="signininput"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="signininput"
            type="Password"
            placeholder="Confirm Password"
            required
          />
          <button className="signinbtn text-light">
            <b>Register</b>
          </button>

          <div className="firstLine">
            <div>
              <input value="true" type="checkbox" />
              <label className="text-light firstLineL">Remember me</label>
            </div>
            <a
              href="https://www.w3.org/Provider/Style/dummy.html"
              className="text-light firstLineA"
            >
              Need Help ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
