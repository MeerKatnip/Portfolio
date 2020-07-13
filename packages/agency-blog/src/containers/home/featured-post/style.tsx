import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const FeaturedPostWrapper = styled.div`
  margin: 0 auto;
  padding: 0 75px 0 75px;
  position: relative;
  text-align: center;

  @media (max-width: 1400px) {
    padding: 0 35px 0 35px;
  }
  @media (max-width: 990px) {
    padding: 0 25px 0 25px;
  }
`;

export const FeaturedPostRow = styled.div`
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 990px) {
    margin: 0 -10px;
  }
`;

export const FeaturedPostCol = styled.div`
  max-width: 33.33333%;
  flex: 0 0 33.33333%;
  float: left;
  padding: 0 15px;
  @media (max-width: 990px) {
    padding: 0 10px;
  }
  @media (max-width: 767px) {
    max-width: 100%;
    flex: 0 0 100%;
    margin-bottom: 30px;
  }
`;

export const SecTitle = styled.div`
  color: ${themeGet("colors.textColor", "#292929")};
  font-size: 20px;
  font-weight: 700;
  font-family: ${themeGet("fontFamily.0", "'Fira Sans',sans-serif")};
  position: relative;
  margin-bottom: 30px;

  &:after {
    content: "";
    width: 100%;
    height: 1px;
    background: #292929;
    display: block;
    margin-top: 8px;
  }
`;
