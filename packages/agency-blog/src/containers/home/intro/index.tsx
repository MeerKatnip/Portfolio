import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import SocialProfile from "../../../components/social-profile/social-profile";
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  IntroSkills,
  Skills,
  Bold,
  Desciption,
  BgText,
  IntroContentWrapper,
} from "./style";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoIosDocument,
  IoLogoLinkedin,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoNodejs,
} from "react-icons/io";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";

type IntroProps = {};

const SocialLinks = [
  {
    icon: (
      <Bold>
        <IoLogoTwitter />
      </Bold>
    ),
    url: "https://twitter.com/AmyCodesMe",
    tooltip: "Twitter",
  },
  {
    icon: (
      <Bold>
        <IoLogoLinkedin />
      </Bold>
    ),
    url: "https://www.linkedin.com/in/royamy/",
    tooltip: "LinkedIn",
  },
  {
    icon: (
      <Bold>
        <IoLogoGithub />
      </Bold>
    ),
    url: "https://github.com/MeerKatnip",
    tooltip: "Github",
  },
  {
    icon: (
      <Bold>
        <IoIosDocument />
      </Bold>
    ),
    url:
      "https://www.linkedin.com/in/royamy/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAApLw7gBXeh14Lqb8KVawyWROBpVps2u0-c,1594659213023)/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJzOFA2PFS5CfqWMcCNWlkQ%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-featured_item_detail_view",
    tooltip: "Resume",
  },
];

const Intro: React.FunctionComponent<IntroProps> = () => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/author.png/" }) {
        childImageSharp {
          fluid(maxWidth: 210, maxHeight: 210, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  const { author } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.fluid;

  return (
    <IntroWrapper>
      <BgText>CODE</BgText>
      <IntroContentWrapper>
        <IntroImage>
          <Image fluid={AuthorImage} alt="author" />
        </IntroImage>
        <IntroTitle>
          Hey! I'm <Bold>{author},</Bold>
          <p> Full-Stack Software Engineer.</p>
        </IntroTitle>
        <Desciption>
          <p>
            {" "}
            I am a detailed, competent lifelong learner with a passion for
            organization and coding. I excel at taking large quantities of
            client information and parsing it into an{" "}
            <Bold>understandable</Bold> and <Bold>accessible</Bold> format. My
            goal is to consistently deliver a product that makes life easier for
            the user.
          </p>
          <p>
            As I earned my associate's degree for Fashion Design, I discovered
            an enthusiasm for 3D printing and microcontrollers. This opened me
            up to a new world of technology and communication with computers
            that I'd never experienced before. My work experience included
            clerical and managerial positions{" "}
            <Bold>working with databases</Bold>, and this gave me a deep
            appreciation for the <Bold>power of organized information</Bold>.
            With these combined skills, I decided that now was the time to
            attend the{" "}
            <Bold>
              <a href="https://www.digitalcrafts.com" target="blank">
                DigitalCrafts
              </a>
            </Bold>{" "}
            coding bootcamp and enter this exciting field.
          </p>
          <p>
            In my free time, I love to garden, hike and bike on trails, and play
            video games (Animal Crossing FTW!)
          </p>
          <p>
            Check out my web development work and <Bold>connect with me:</Bold>
          </p>
        </Desciption>

        <SocialProfile items={SocialLinks} />

        <IntroSkills>My Skills</IntroSkills>
        <Skills>
          <IoLogoJavascript /> JavaScript
          <br /> <FaReact /> React
          <br /> <IoLogoHtml5 /> HTML
          <br /> <IoLogoCss3 /> CSS
          <br /> <IoLogoSass /> SASS
          <br /> <IoLogoNodejs /> Node.js
          <br />
          <DiPostgresql /> PostgreSQL
          <br /> <FaBootstrap /> Bootstrap
          <br />
        </Skills>
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
