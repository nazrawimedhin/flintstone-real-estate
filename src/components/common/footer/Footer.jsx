import React from "react";
import { footer } from "../../../data/Data";
import logo from "../../../assets/logo/logo-white.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, Hot deals and discounts sent straight in your
                inbox every month.
              </p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          {footer.map((val) => (
            <div className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((item) => (
                  <li> {item.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>
          © {new Date().getFullYear()} Flintstone. Designed By{" "}
          <a href="https://nazrawi.netlify.app" style={{ color: "#1e90ff" }}>
            Nazrawi
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;
