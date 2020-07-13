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
