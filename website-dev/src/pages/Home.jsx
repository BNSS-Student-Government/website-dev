import React, { useRef } from "react";
import Hero from "../components/hero/Hero";
import { SlArrowDown } from "react-icons/sl";
import "./styles/Home.css";
import Article from "../components/article/Article";
import { FaHandshake } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { RiMegaphoneFill } from "react-icons/ri";

const Home = () => {
  const about = useRef(null);
  const featured = useRef(null);
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  const aboutDetails = [
    {
      logo: <FaHandshake style={{ width: "80%", height: "80%" }} />,
      title: "Service",
      body: "Service is at the core of Student Government at Burnaby North. Whether it's running fundraisers or organizing staff appreciation events, we are determined to support and uplift students and staff.",
    },
    {
      logo: <MdGroups3 style={{ width: "80%", height: "80%" }} />,
      title: "Community",
      body: "Nothing is more important than community. We act as a bridge between students from various backgrounds and experiences. Through team activities and spirit weeks, we aim to foster a welcoming environment for all.",
    },
    {
      logo: <RiMegaphoneFill style={{ width: "80%", height: "80%" }} />,
      title: "Advocacy",
      body: "As an elected body, we take our roles as student representatives very seriously. From town halls to grade councils, we are here to amplify students' voices and advocate for the needs of our community.",
    },
  ];
  return (
    <>
      <Hero
        imageName="newschool.png"
        title="Burnaby North Student Government"
        subTitle="Elections Now Open"
      >
        <button className="btn-down-arrow" onClick={() => scroll(featured)}>
          <SlArrowDown id="icon" />
        </button>
      </Hero>

      <div
        ref={about}
        className="about"
        style={{
          paddingTop: "4rem",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 className="gradient-heading">
          About Burnaby North's Student Government
        </h1>
        <div className="about-details">
          {aboutDetails.map((detail) => (
            <Article width="300px" title={detail.title} paragraph={detail.body}>
              <div className="logo">{detail.logo}</div>
            </Article>
          ))}
        </div>
      </div>
      <div
        ref={featured}
        className="featured"
        style={{
          height: "100vh",
          paddingTop: "4rem",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "#ff8944" }}>CURRENTLY FEATURED</h1>
        <h2 style={{ margin: "unset", fontWeight: "200" }}>
          Student Governemnt Elections
        </h2>
      </div>
    </>
  );
};

export default Home;
