import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";

function SignIn() {
  return (
    <div>
      <div className="bgcolor">
        <form className="signincontainer">
          <h1 className="text-light">Sign In</h1>
          <br></br>
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
          <button className="signinbtn text-light">
            <b>Sign In</b>
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

          <div className="fcbk">
            <FacebookIcon className="contact-info-icon" />
            <p className="text-light">Login with Facebook</p>
          </div>

          <div className="signup">
            <p className="text-light">New to my.Shoppy?</p>
            <Link to="/">
              <a
                href="https://www.w3.org/Provider/Style/dummy.html"
                className="text-light signupa"
              >
                <Link
                  to="/register"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Register here
                </Link>
              </a>
            </Link>
          </div>

          <div className="more">
            <p className="text-light">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
