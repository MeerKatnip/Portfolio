import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import SocialProfile from "../../components/social-profile/social-profile";
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosDocument,
} from "react-icons/io";
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style";

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

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 90) {
            ...GatsbyImageSharpFluid
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

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>About Me</h2>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>Hey there, what’s up?</h2>
        <p>
          {" "}
          I am a detailed, competent lifelong learner with a passion for
          organization and 3D printing. I excel at making databases and taking
          large stacks of client information and parsing it into an
          understandable and accessible format.
        </p>
        <p>
          Check out my web dev work and connect with me at any of the links
          below:
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  );
};

export default About;
