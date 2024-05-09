// import { useEffect } from "react";
// import SmoothScroll from "smooth-scroll";
// import { HiArrowUp } from "react-icons/hi";
// import { Link } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";

const Copy = () => {
  // useEffect(() => {
  //   // Initialize smooth-scroll
  //   new SmoothScroll('a[href*="#"]', {
  //     speed: 500, // Control the speed of the scroll
  //     speedAsDuration: true, // Interpret speed setting as duration
  //   });
  // }, []);

  return (
    <>
      <footer className="footer-outer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-copyright">
              <p>Copyright @ 2024 Gopinathan All Right Reserved</p>
            </div>
            <div className="scroll-top">
              {/* <Link
                to="back-top"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
              > */}
              <ScrollToTop />

              {/* <span>Back to Top</span>
                <HiArrowUp />
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Copy;
