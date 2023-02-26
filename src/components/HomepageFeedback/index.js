import React, { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import emailjs from "emailjs-com";

function Feature({ name }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img
          src="../../../img/undraw_docusaurus_react.svg"
          className={styles.featureSvg}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>Thank You! {name}</h3>
        <p>{"Your Feedback means a lot to us."}</p>
        <p>
          {"Feedback Confirmation mail has been sent to your E-mail address."}
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeedback() {
  const [values, setValues] = useState({
    name: "",
    review: "",
    email: "",
    send: false,
  });
  const [loading, setLoading] = useState(false);
  function handleReviewChange(e) {
    const temp = {
      name: values.name,
      email: values.email,
      review: e.target.value,
      send: values.send,
    };
    setValues(temp);
  }
  function handleNameChange(e) {
    const temp = {
      name: e.target.value,
      email: values.email,
      review: values.review,
      send: values.send,
    };
    setValues(temp);
  }
  function handleEmailChange(e) {
    const temp = {
      email: e.target.value,
      name: values.name,
      review: values.review,
      send: values.send,
    };
    setValues(temp);
  }

  async function Submit(e) {
    e.preventDefault();
    setLoading(true)
    const temp = {
      name: values.name,
      review: values.review,
      send: true,
    };
    if ((values.name !== null) & (values.review !== null)) {
      const response = await fetch(
        "https://server-ten-iota.vercel.app/auth/Reviews",
        {
          method: "POST",
          headers: {
            mode: "no-cors",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            review: values.review,
            email: values.email,
          }),
        }
      );
      const data = await response.json();
      // console.log(data);
    } else {
      setLoading(false)
      return;
    }
    setValues(temp);
    sendEmail();
  }
  function sendEmail() {
    // e.preventDefault();
    const emailParams = {
      to_email: values.email,
      to_name: values.name,
    };

    emailjs
      .send("learn-x", "template_8lv71k2", emailParams, "SUGfT28r_dVvUkIVY")
      .then((response) => {
        console.log("Email sent successfully", response);
      })
      .catch((error) => {
        console.error("Email send error", error);
      });
  }

  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <Heading
            as="h2"
            className={clsx("margin-bottom--lg", "text--center")}
          >
            Give Your Feedbaak
          </Heading>
          {values.send ? (
            <div className={styles.features}>
              <Feature name={values.name} />
            </div>
          ) : (
            <div className="row">
              <div className={styles.form}>
                <div>
                  <label htmlFor="fname">Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                    value={values.name}
                    onChange={(e) => handleNameChange(e)}
                    required
                  />
                  <label htmlFor="fname">Email</label>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    placeholder="your@email.com"
                    value={values.email}
                    onChange={(e) => handleEmailChange(e)}
                    required
                  />

                  <label htmlFor="subject">Feedback</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    value={values.review}
                    onChange={(e) => handleReviewChange(e)}
                    style={{ height: "200px" }}
                    required
                  ></textarea>
                  {loading ? (
                    <div style={{ float: "right" }}>Sending...</div>
                  ) : (
                    <button
                      className={styles.submit}
                      onClick={(e) => Submit(e)}
                      style={{ float: "right" }}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
