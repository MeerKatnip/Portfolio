import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import SocialProfile from "../../../components/social-profile/social-profile";
import {
  IntroWrapper,
  IntroImage,
  IntroTitle,
  IntroSkills,
  Desciption,
  BgText,
  IntroContentWrapper,
} from "./style";
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoIosDocument,
  IoLogoLinkedin,
} from "react-icons/io";

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/AmyCodesMe",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/royamy/",
    tooltip: "LinkedIn",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/MeerKatnip",
    tooltip: "Github",
  },
  {
    icon: <IoIosDocument />,
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
        <IntroTitle>Hey! I'm {author}.</IntroTitle>
        <Desciption>
          <p>
            {" "}
            I am a detailed, competent lifelong learner with a passion for
            organization and coding. I excel at taking large quantities of
            client information and parsing it into an understandable and
            accessible format. My goal is to consistently deliver a product that
            makes life easier for the user.
          </p>
          <p>
            As I earned my associate's degree for Fashion Design, I discovered
            an enthusiasm for 3D printing and microcontrollers. This opened me
            up to a new world of technology and communication with computers
            that I'd never experienced before. My work experience included
            clerical and managerial positions working with databases, and this
            gave me a deep appreciation for the power of organized information.
            I decided that now was the time for me to attend a coding bootcamp
            and enter this exciting field.
          </p>
          <p>
            In my free time, I love to garden, hike and bike on trails, and play
            video games (Animal Crossing FTW!)
          </p>
          <p>
            Check out my web dev work and connect with me at any of the links
            below:
          </p>
        </Desciption>
        <SocialProfile items={SocialLinks} />
        <IntroSkills>My Skills</IntroSkills>
        <Desciption>
          JavaScript, React, Redux, HTML, CSS, SASS, Node.js, PostgreSQL,
          Bootstrap
        </Desciption>
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
