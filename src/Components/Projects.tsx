import { BsArrowUpRight } from "react-icons/bs";
import easybank from "/easy_bank.png";
import bs from "/bootstrap_project.png";
import magic from "/magic_restaurant.png";
import re from "/react_project.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsSection = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -100, opacity: 0 },
  };

  const projectsSection1 = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 100, opacity: 0 },
  };
  return (
    <>
      <section className="project-outer" id="Projects">
        <div className="container">
          <div className="project-title">
            <h2>My Recent Projects</h2>
            <p>
              I've leveraged these technologies in various projects to create
              dynamic and visually appealing web applications.
            </p>
          </div>
          <div className="project-inner">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={projectsSection}
              className="project-box"
            >
              <div className="image-box">
                <img src={easybank} alt="project" />
              </div>
              <a
                href="https://gopinathanmagic.github.io/easybank/"
                target="_blank"
              >
                <div className="content-box">
                  <h3>Easybank Hypertext Document</h3>
                  <p>HTML5 | CSS3</p>
                  <a
                    href="https://gopinathanmagic.github.io/easybank/"
                    target="_blank"
                  >
                    <BsArrowUpRight />
                  </a>
                </div>
              </a>
            </motion.div>
            <div className="project-box">
              <div className="image-box">
                <img src={bs} alt="project" />
              </div>
              <a
                href="https://gopinathanmagic.github.io/bootstrap_project/"
                target="_blank"
              >
                <div className="content-box">
                  <h3>Bootstrap Home Page</h3>
                  <p>HTML5 | CSS3 | Bootstrap </p>
                  <a
                    href="https://gopinathanmagic.github.io/bootstrap_project/"
                    target="_blank"
                  >
                    <BsArrowUpRight />
                  </a>
                </div>
              </a>
            </div>
            <div className="project-box">
              <div className="image-box">
                <img src={magic} alt="project" />
              </div>
              <a
                href="https://gopinathanmagic.github.io/restaurant/"
                target="_blank"
              >
                <div className="content-box">
                  <h3>Restaurant Web Page</h3>
                  <p>HTML5 | CSS3 | jQuery | JavaScript</p>
                  <a
                    href="https://gopinathanmagic.github.io/restaurant/"
                    target="_blank"
                  >
                    <BsArrowUpRight />
                  </a>
                </div>
              </a>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={projectsSection1}
              className="project-box"
            >
              <div className="image-box">
                <img src={re} alt="project" />
              </div>
              <a
                href="https://gopinathanmagic.github.io/react/"
                target="_blank"
              >
                <div className="content-box">
                  <h3>Shopify Landing Page</h3>
                  <p>HTML5 | CSS3 | TypeScript | React JS</p>
                  <a
                    href="https://gopinathanmagic.github.io/react/"
                    target="_blank"
                  >
                    <BsArrowUpRight />
                  </a>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
