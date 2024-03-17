import React from "react";
import img from "../../assets/services.jpg";
import Back from "../../components/common/Back";
import FeaturedCard from "../../components/featured/FeaturedCard";
import "../../components/featured/Featured.css";

const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back name="Services" title="Services -All Services" cover={img} />
        <div className="featured container">
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Services;
