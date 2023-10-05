import React from "react";
import styled from "styled-components";

import { colors } from "../Utils/colors";
import me from "../Images/me.JPG";
import redux from "../Images/redux.png";
import jest from "../Images/jest.png";
import postgresql from "../Images/postgresql.png";

import email from "../Images/email.png";
import linkedin from "../Images/linkedin.png";
import skill from "../Images/skill.png";

const About = () => (
  <Section>
    <div>
      <img
        src={me}
        style={{
          width: "200px",
          borderRadius: "5px",
        }}
        alt="me"
      />
    </div>
    <div style={{ display: "inline-block" }}>
      <Name style={{ display: "inline-block" }}>Eddie Wang</Name>
      <div
        style={{
          display: "inline-block",
          marginLeft: "1rem",
          marginRight: "0.5rem",
        }}
      >
        <a
          href="https://www.linkedin.com/in/yu-ning-wang/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            style={{
              height: "18px",
              opacity: "0.8",
              verticalAlign: "bottom",
            }}
            alt="linkedin"
          />
        </a>
      </div>
      <div style={{ display: "inline-block" }}>
        <a href="mailto:wang790222@gmail.com">
          <img
            src={email}
            style={{
              height: "18px",
              opacity: "0.8",
              verticalAlign: "bottom",
            }}
            alt="email"
          />
        </a>
      </div>
    </div>
    <Title style={{ color: colors.slateGray, fontSize: "24px" }}>
      Front-end Engineer
    </Title>
    <Subtitle>Toronto, Canada</Subtitle>

    <StyledP>
      Thanks for visiting my website! My name is Eddie and I am a front-end
      engineer currently work at <b>PlayStation</b>. Over the past four years, I
      have built up skills especially in front-end development. I equip solid
      knowledge of javascript, html, and css. I am also very confident working
      with React/Redux. My passion is building high-quality and user-friendly
      front-end applications.
      <br />
      <br />
      Feel free to send me an email at <b>wang790222@gmail.com</b> or a message
      on LinkedIn. Look forward to connecting with you!
    </StyledP>

    <Title>Skills</Title>
    <div style={{ margin: "2rem auto" }}>
      <img
        src={skill}
        style={{
          width: "580px",
          borderRadius: "5px",
        }}
        alt="skill"
      />
    </div>
  </Section>
);

export default About;

const Section = styled.div`
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5rem 2rem 2rem;
  text-align: center;
  max-width: 60rem;
  margin: 0 auto;
  font-size: 18px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
`;

const StyledP = styled.div`
  margin: 2rem auto;
  text-align: left;
  line-height: 1.8rem;
  max-width: 60rem;
`;

const StyledSkillIcon = styled.div`
  opacity: 0.8;
  line-height: 1.2rem;
  overflow: auto;
  margin-top: 0.5rem;

  i {
    font-size: 35px;
    width: 35px;
    height: 35px;
    float: left;
  }

  p {
    display: inline-block;
    margin-left: 1rem;
    float: right;
  }
`;

const Name = styled.h1`
  font-size: 32px;
  color: ${colors.black};
`;
