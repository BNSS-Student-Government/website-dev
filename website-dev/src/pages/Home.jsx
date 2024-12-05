import React, { useEffect, useRef } from "react";
import Hero from "../components/hero/Hero";
import { SlArrowDown } from "react-icons/sl";
import "./styles/Home.css";
import Article from "../components/article/Article";
import { FaHandshake } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { RiMegaphoneFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";

const Home = ({ setScrollToFeatured }) => {
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
      body: "We act as a bridge between students from various backgrounds and experiences. Through team activities and spirit weeks, we aim to foster a welcoming environment and community for all.",
    },
    {
      logo: <RiMegaphoneFill style={{ width: "80%", height: "80%" }} />,
      title: "Advocacy",
      body: "As an elected body, we take our roles as student representatives seriously. From town halls to grade councils, we are here to amplify students' voices and advocate for the needs of our community.",
    },
  ];
  return (
    <>
      <Hero
        imageName="newschool.png"
        title="Burnaby North Student Government"
        subTitle="2024 - 2025"
      >
        <button className="btn-down-arrow" onClick={() => scroll(featured)}>
          <SlArrowDown id="icon" />
        </button>
      </Hero>

      <div
        ref={about}
        className="about"
        style={{
          paddingTop: "2rem",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="about-heading">
          <h1 className="gradient-heading">
            About Burnaby North's Student Government
          </h1>
        </div>
        <div className="about-details">
          {aboutDetails.map((detail) => (
            <Article width="300px" title={detail.title} paragraph={detail.body}>
              <div className="logo">{detail.logo}</div>
            </Article>
          ))}
        </div>
      </div>
      <div ref={featured} className="featured">
        <div className="featured-heading">
          <h1 style={{ color: "#eda323" }}>CURRENTLY FEATURED</h1>
          <h2 style={{ margin: "unset", fontWeight: "200" }}>
            None at this time
          </h2>
        </div>
        </div>
        {/*
        <div className="featured-details">
          <div style={{ fontSize: "1.1rem" }}>
            The halls of Burnaby North Secondary School are pulsating with
            excitement as the Student Government elections take center stage.
            The campus will soon be adorned with colorful campaign posters, each
            representing the unique vision of candidates vying for leadership
            roles. As candidates passionately address issues ranging from
            environmental sustainability to mental health, the elections not
            only serve as a platform for student representation but also foster
            a deeper understanding of democratic values. This is always an
            exciting time of year!
          </div>
          <div
            onClick={() => window.location.assign("/Candidates")}
            className="info-btn"
          >
            <h2>View Candidates and Vote!</h2>
            <IoIosPeople id="icon" />
          </div>
        </div>
      </div>
      */}
    </>
  );
};

export default Home;
