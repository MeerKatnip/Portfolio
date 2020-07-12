import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import SocialProfile from "../../../components/social-profile/social-profile";
import {
  IntroWrapper,
  IntroTitle,
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

const Intro: React.FunctionComponent<IntroProps> = (props) => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `);

  const { about, author } = Data.site.siteMetadata;

  return (
    <IntroWrapper>
      <BgText>CODE</BgText>
      <IntroContentWrapper>
        <IntroTitle>Hi, I'm {author}</IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroContentWrapper>
    </IntroWrapper>
  );
};

export default Intro;
