import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import imgxy from "../../../static/img/hi5.jpg"

const FeatureList = [
  {
    title: "Easy to Understand",
    // Src: "none",
    Svg: require("@site/static/img/Success.svg").default,
    description: (
      <>
        Learn-X is a beginner-friendly platform that focuses on practical
        learning through code rather than overwhelming theory.
      </>
    ),
  },
  {
    title: "Focus more on Code",
    // Src: "../../../../static/img/xy.svg",
    Svg: require("@site/static/img/xy.svg").default,
    description: (
      <>
        Learn-x lets you focus on concepts with code, and we&apos;ll do the
        chores. Go ahead and jump into the <code>Code</code> directly.
      </>
    ),
  },
  {
    title: "Access from anywhere",
    // Src: "imgxy",
    Svg: require("@site/static/img/afa.svg").default,
    description: (
      <>
        Responsive and user friendly layout resulting more Comfort to read all
        the way from your any device in Comfy eye color mode.
      </>
    ),
  },
];

function Feature({ Src, Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {Src? (
          <img src={imgxy} className={styles.featureSvg} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
