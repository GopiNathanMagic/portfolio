import React, { useRef, useState, FormEvent } from "react";
import emailjs, { init } from "@emailjs/browser"; // Importing 'init' as well to initialize EmailJS
// import emailjs from "@emailjs/browser";
import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GrLocationPin } from "react-icons/gr";
import { motion } from "framer-motion";

init("service_1heoxx5");

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // Specify the type of ref

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {}
  );

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const user_name = form.current.querySelector<HTMLInputElement>(
        'input[name="user_name"]'
      );
      const user_email = form.current.querySelector<HTMLInputElement>(
        'input[name="user_email"]'
      );
      const message = form.current.querySelector<HTMLTextAreaElement>(
        'textarea[name="message"]'
      );

      const errors: { [key: string]: string } = {};

      if (!user_name || !user_name.value.trim()) {
        errors["user_name"] = "Name is required.";
      }

      if (!user_email || !user_email.value.trim()) {
        errors["user_email"] = "Email is required.";
      }

      if (!message || !message.value.trim()) {
        errors["message"] = "Message is required.";
      }

      if (Object.keys(errors).length > 0) {
        setErrorMessage(errors);
        return;
      }
      emailjs
        .sendForm("service_1heoxx5", "template_vs678e4", form.current, {
          publicKey: "P6RI_uYc41-J0Szvj",
        })
        .then(
          () => {
            setSubmissionStatus("SUCCESS");
            console.log("SUCCESS!");
            // Reset form fields
            if (form.current) {
              form.current.reset();
            }
            // Clear error messages
            setErrorMessage({});
          },
          (error) => {
            setSubmissionStatus("FAILED");
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const contactSection = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <>
      <section className="contact-outer" id="Contact">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={contactSection}
            className="contact-inner"
          >
            <div className="contact-left">
              <div className="contact-title">
                <div className="contact-subtitle">
                  <h2>Let's work together!</h2>
                </div>
                <div className="icon-address-outer">
                  <div className="icon-box-address">
                    <GoMail />
                  </div>
                  <div className="address">
                    <h2>Email</h2>
                    <span>gopinathan9140@gmail.com</span>
                  </div>
                </div>
                <div className="icon-address-outer">
                  <div className="icon-box-address">
                    <GrLocationPin />
                  </div>
                  <div className="address">
                    <h2>Address</h2>
                    <span>Perungudi, Chennai - 600096, Tamil Nadu</span>
                  </div>
                </div>
                <div className="icon-address-outer">
                  <div className="icon-box-address">
                    <FiPhoneCall />
                  </div>
                  <div className="address">
                    <h2>Phone</h2>
                    <span>+91 9092677587</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    id="uname"
                  />
                  {errorMessage["user_name"] && (
                    <p className="error">{errorMessage["user_name"]}</p>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    id="email"
                  />
                  {errorMessage["user_email"] && (
                    <p className="error">{errorMessage["user_email"]}</p>
                  )}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows={10}
                  ></textarea>
                  {errorMessage["message"] && (
                    <p className="error">{errorMessage["message"]}</p>
                  )}
                </div>
                {/* <input type="submit" value="Submit" /> */}
                <button id="btn">Submit</button>
              </form>
              {submissionStatus === "SUCCESS" && (
                <p className="success-msg">Email sent successfully!</p>
              )}
              {submissionStatus === "FAILED" && (
                <p>Failed to send email. Please try again later.</p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
