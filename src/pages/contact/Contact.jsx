import React from "react";
import img from "../../assets/pricing.jpg";
import Back from "../../components/common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <textarea cols="30" rows="10"></textarea>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
