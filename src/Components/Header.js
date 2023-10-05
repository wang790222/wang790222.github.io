import React from "react";
import { useState } from "react";
import styled from "styled-components";
import email from "../Images/email.png";
import linkedin from "../Images/linkedin.png";

import { colors } from "../Utils/colors";

const Header = (props) => {
  const [url, setUrl] = useState("about");

  return <Section></Section>;
};

export default Header;

const Section = styled.div`
  text-align: center;
  padding: 24px 0 12px;
  border-bottom: 3px solid ${colors.grey3};
  border-style: double;
  z-index: 999;
  height: 85px;
  position: fixed;
  background-color: ${colors.white};
  width: 100%;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  overflow: hidden;
  margin: 1rem 0;

  li {
    display: inline-block;
    margin: 0 2rem;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Name = styled.h1`
  font-size: 32px;
  color: ${colors.slateGray};
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.slateGray};
`;

const StyledLi = styled.li`
  border-bottom: ${(props) =>
    props.isActive ? `2px solid ${colors.slateGray}` : "none"};
`;
