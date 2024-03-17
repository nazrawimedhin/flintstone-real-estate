import React from "react";
import Back from "../../components/common/Back";
import RecentCard from "../../components/recent/RecentCard";
import img from "../../assets/about.jpg";
import "../../components/recent/recent.css";

const Blog = () => {
  return (
    <>
      <section className="blog-out mb">
        <Back name="Blog" title="Blog Grid - Our Blogs" cover={img} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
