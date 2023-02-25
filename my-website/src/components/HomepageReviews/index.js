import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

const TWEETS = [
  {
    url: "https://twitter.com/acemarke/status/1452725153998245891",
    handle: "acemarke",
    name: "Mark Erikson",
    date: "Oct 26, 2021",
    content: (
      <>
        We&apos;ve been using Docusaurus for all the Redux org docs sites for
        the last couple years, and it&apos;s great! We&apos;ve been able to
        focus on content, customize some presentation and features, and It Just
        Works.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "markerikson",
  },
  {
    url: "https://twitter.com/arcanis/status/1351620354561732608",
    handle: "arcanis",
    name: "Maël",
    date: "Jan 20, 2021",
    content: (
      <>
        I&apos;ve used Docusaurus for two websites this year, and I&apos;ve been
        very happy about the v2. Looks good, and simple to setup.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "arcanis",
  },
  {
    url: "https://twitter.com/maxlynch/status/1375113166007455748",
    handle: "maxlynch",
    name: "Max Lynch",
    date: "Mar 25, 2021",
    content: (
      <>
        Docusaurus v2 doubles as a really nice little static site generator tool
        for content-focused sites, love it 👏
      </>
    ),
    showOnHomepage: true,
    githubUsername: "mlynch",
  },
  {
    url: "https://twitter.com/supabase/status/1328960757149671425",
    handle: "supabase",
    name: "Supabase",
    date: "Nov 18, 2020",
    content: (
      <>
        We&apos;ve been using V2 since January and it has been great - we spend
        less time building documentation and more time building 🛳
        <br />
        <br />
        Thanks <b>@docusaurus</b> team 🦖
      </>
    ),
    showOnHomepage: true,
    githubUsername: "supabase",
  },
  {
    url: "https://twitter.com/paularmstrong/status/1387059593373700100",
    handle: "paularmstrong",
    name: "Paul Armstrong",
    date: "Apr 27, 2021",
    content: (
      <>
        Continue to be impressed and excited about Docusaurus v2 alpha releases.
        Already using the sidebar items generator to help monorepo workspace
        devs create their own doc pages without any configuration needed.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "paularmstrong",
  },
  {
    url: "https://twitter.com/sanketsahu/status/1328677366642528257",
    handle: "sanketsahu",
    name: "Sanket Sahu",
    date: "Nov 17, 2020",
    content: (
      <>
        .<b>@docusaurus</b> ❤️
      </>
    ),
    showOnHomepage: false,
    githubUsername: "sanketsahu",
  },
  {
    url: "https://twitter.com/debs_obrien/status/1374615572298801155",
    handle: "debs_obrien",
    name: "Debbie O'Brien",
    date: "Mar 24, 2021",
    content: (
      <>
        Been doing a lot of work with <b>@docusaurus</b> lately and I have to
        say it is really fun to work with. A lot of really cool features. I love
        that you can easily reuse content by creating a markdown file and
        importing it as a component. 🔥
      </>
    ),
    showOnHomepage: true,
    githubUsername: "debs-obrien",
  },
  {
    url: "https://twitter.com/Dr_Electron/status/1443635328376508433",
    handle: "Dr_Electron",
    name: "Dr.Electron",
    date: "Oct 11, 2021",
    content: (
      <>
        The #IOTA wiki is now part of the <b>@docusaurus</b> showcase. We even
        have the honor of being a favorite. We are really happy that we found
        this project. It helped us a lot to improve the documentation. And we
        still have a lot of plans with things like tutorials, versioning and
        i8n.
      </>
    ),
    showOnHomepage: true,
    githubUsername: "Dr-Electron",
  },
  {
    url: "https://twitter.com/kentcdodds/status/1323806816019468288",
    handle: "kentcdodds",
    name: "Kent C. Dodds",
    date: "Nov 4, 2020",
    content: (
      <>
        http://testing-library.com just got a nice update! We&apos;re now on the
        latest version of <b>@docusaurus</b> thanks to @matanbobi, @TensorNo,
        and @nickemccurdy 💙
        <br />
        <br />
        My favorite new feature: dark mode!! 🌑/☀️
      </>
    ),
    showOnHomepage: true,
    githubUsername: "kentcdodds",
  },
  {
    url: "https://twitter.com/bantg/status/1463608561368457225",
    handle: "bantg",
    name: "banteg",
    date: "Nov 25, 2021",
    content: <>I like docusaurus much more, it&apos;s so snappy.</>,
    showOnHomepage: false,
    githubUsername: "banteg",
  },
  {
    url: "https://twitter.com/swyx/status/1418405515684581378",
    handle: "swyx",
    name: "swyx",
    date: "Jul 23, 2021",
    content: (
      <>
        Happy to share Temporal&apos;s first open source sponsorship — of{" "}
        <b>@docusaurus</b>!
        <br />
        <br />
        @temporalio uses it for http://docs.temporal.io, and it has been a huge
        boon to our docs team. @sebastienlorber is an incredible steward of the
        project, support it if you can!
      </>
    ),
    showOnHomepage: true,
    githubUsername: "sw-yx",
  },
  {
    url: "https://twitter.com/rachelnabors/status/1478490902037467137",
    handle: "rachelnabors",
    name: "R 'Nearest' Nabors 💙",
    date: "Jan 5, 2022",
    content: (
      <>
        I hear <b>@docusaurus</b> is a good tool for that!
      </>
    ),
    showOnHomepage: false,
    githubUsername: "rachelnabors",
  },
];

function Reviews({ data }) {
  const timestamp = new Date(data.date);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const ActualDate = timestamp.toLocaleDateString("en-GB", options);
  return (
    <div className={clsx("card", styles.tweet)}>
      <div className="card__header">
        <div className="avatar">
          <img
            alt={"name"}
            className="avatar__photo"
            // src={`https://unavatar.io/twitter/${data.handle}?fallback=https://github.com/${data.githubUsername}.png`}
            src={`https://robohash.org/${data.name}?set=set3`}
            width="48"
            height="48"
            loading="lazy"
          />
          <div className={clsx("avatar__intro", styles.tweetMeta)}>
            <strong className="avatar__name">{data.name}</strong>
            <span>{data.email}</span>
          </div>
        </div>
      </div>

      <div className={clsx("card__body", styles.tweet)}>{data.review}</div>

      <div className="card__footer">
        <Link
          className={clsx(styles.tweetMeta, styles.tweetDate)}
          to={data.url}
        >
          {ActualDate}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://server-ten-iota.vercel.app/auth/GetReviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  });
  return (
    <>
      <div className={clsx(styles.section, styles.sectionAlt)}>
        <div className="container">
          <Heading
            as="h2"
            className={clsx("margin-bottom--lg", "text--center")}
          >
            Loved by many engineers
          </Heading>
          <div className={clsx("row", styles.tweetsSection)}>
            {reviews.map((tweet, i) => (
              <>
                {tweet.approval && (
                  <div className="col col--4" key={i}>
                    <Reviews data={tweet} key={tweet.url} />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
