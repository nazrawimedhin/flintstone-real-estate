import React from "react";
import Heading from "../common/Heading";
import { client } from "../../data/Data";
import "./client.css";

const Awards = () => {
  return (
    <>
      <section className="client padding">
        <div className="container">
          <Heading
            title="Over 124,000+ Happy Users Bieng With Us Still They Love Our Services"
            subtitle="Our Cients"
          />

          <div className="content grid3 mtop">
            {client.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon">
                  <span>{val.icon}</span>
                </div>
                <h1>{val.num}</h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
