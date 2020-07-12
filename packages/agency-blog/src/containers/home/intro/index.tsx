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
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io";

type IntroProps = {};

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "#",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "#",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/AmyCodesMe",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoGithub />,
    url: "https://github.com/MeerKatnip",
    tooltip: "Github",
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

  const { about, author } = Data.site.siteMetadata;
  const AuthorImage = Data.avatar.childImageSharp.fluid;

  return (
    <IntroWrapper>
      <BgText>CODE</BgText>
      <IntroContentWrapper>
        <IntroImage>
          <Image fluid={AuthorImage} alt="author" />
        </IntroImage>
        <IntroTitle>Hey! I'm {author}</IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
        <IntroSkills>Skills</IntroSkills>
        <Desciption>
          JavaScript, React, Redux, HTML, CSS, SASS, Node.js, PostgreSQL
        </Desciption>
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
