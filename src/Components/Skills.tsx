import htmllogo from "/html-logo.png";
import csslogo from "/css-logo.png";
import blogo from "/bootstrap-logo.png";
import jlogo from "/js.svg";
import rlogo from "/react.svg";
import jqlogo from "/jquery.svg";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsSection = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: 100, opacity: 0 },
  };
  return (
    <>
      <section className="skill-outer" id="skills">
        <div className="container">
          <div className="skill-inner">
            <div className="skill-content">
              <h2>My Skills</h2>
              <p>
                I specialize in crafting engaging user interfaces and
                experiences for web applications, leveraging these technologies
                to create dynamic and responsive designs.
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={skillsSection}
              className="skill-outer-boxes"
            >
              <div className="skill-boxes">
                <div className="skill-box">
                  <div className="icon-box">
                    <img src={htmllogo} alt="html-logo" />
                  </div>
                  <p>HTML5</p>
                </div>
              </div>
              <div className="skill-boxes">
                <div className="skill-box">
                  <div className="icon-box">
                    <img src={csslogo} alt="html-logo" />
                  </div>
                  <p>CSS3</p>
                </div>
              </div>
              <div className="skill-boxes">
                <div className="skill-box">
                  <div className="icon-box">
                    <img src={blogo} alt="html-logo" />
                  </div>
                  <p>Bootstrap</p>
                </div>
              </div>
              <div className="skill-boxes">
                <div className="skill-box">
                  <div className="icon-box">
                    <img src={jqlogo} alt="html-logo" />
                  </div>
                  <p>jQuery</p>
                </div>
              </div>
              <div className="skill-boxes">
                <div className="skill-box">
                  <div className="icon-box">
                    <img src={jlogo} alt="html-logo" />
                  </div>
                  <p>JavaScript</p>
                </div>
              </div>
              <div className="skill-boxes">
                <div className="skill-box">
                  <div className="icon-box">
                    <img src={rlogo} alt="html-logo" />
                  </div>
                  <p>React</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
