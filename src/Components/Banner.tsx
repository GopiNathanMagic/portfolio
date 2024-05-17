// import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import banner from "/Gopinathan-portfolio-one.png";
import { FiDownload } from "react-icons/fi";
import wave from "/wave.png";
import { motion } from "framer-motion";

const Banner = () => {
  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual URL or path to your resume file
    const resumeUrl = "https://orange-mathilde-77.tiiny.site/";
    // Initiates the download of the resume file
    window.open(resumeUrl, "_blank");
  };

  const bannerImage = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { y: 200, opacity: 1 },
  };

  return (
    <>
      <section className="banner-outer">
        <div className="container">
          <div className="banner-inner">
            <div className="banner-social-media">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gopinathan96"
                    target="_blank"
                  >
                    <FaLinkedin color={"#fff"} font-size={"25px"} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/GopiNathanMagic" target="_blank">
                    <FaGithub color={"#fff"} font-size={"25px"} />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/9092677587" target="_blank">
                    <FaWhatsapp color={"#fff"} font-size={"25px"} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="banner-content">
              <span className="banner-sub-title">
                I am Gopinathan S <img src={wave} alt="wave" />
              </span>
              <div className="banner-title">
                <h1>
                  Front-End <br />
                  Developer
                </h1>
              </div>
              <div className="banner-para">
                <p>
                  Enthusiastic junior front-end developer with a comprehensive
                  Six month training in HTML5, CSS3, Bootstrap, JavaScript and
                  React JS.
                </p>
              </div>
              <div className="banner-btn">
                <a href="#" onClick={handleDownloadResume}>
                  Download Resume <FiDownload />
                </a>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={bannerImage}
              className="banner-pic"
            >
              <img src={banner} alt="banner" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
