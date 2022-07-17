import React from "react";
import styled from "styled-components";

import { colors } from "../Utils/colors";
import me from "../Images/me.JPG";
import email from "../Images/email.png";
import linkedin from "../Images/linkedin.png";
import redux from "../Images/redux.png";
import jest from "../Images/jest.png";
import postgresql from "../Images/postgresql.png";

const About = () => (
  <Section>
    <Left>
      <Title>Contact</Title>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100%",
        }}
      >
        <div
          style={{
            transform: "translateY(-50%)",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <div>
              <a
                href="https://www.linkedin.com/in/yu-ning-wang/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  style={{ height: "25px", opacity: "0.8" }}
                  alt="linkedin"
                />
              </a>
            </div>
            <div>
              <a href="mailto:wang790222@gmail.com">
                <img
                  src={email}
                  style={{ height: "25px", opacity: "0.8" }}
                  alt="email"
                />
              </a>
            </div>
          </div>
          <div
            style={{
              display: "inline-block",
              padding: "5px",
            }}
          >
            <img
              src={me}
              style={{
                width: "120px",
                borderRadius: "5px",
              }}
              alt="me"
            />
          </div>
        </div>
      </div>
    </Left>
    <Middle>
      <Title>Front-end Engineer</Title>
      <Subtitle>Toronto, Canada</Subtitle>

      <StyledP>
        Thanks for visiting my website! My name is Eddie and I am a front-end
        engineer with a computer science background. Over the past four years, I
        have built up skills especially in front-end development. I equip solid
        knowledge of javascript, html, and css. I am also very confident working
        with React/Redux. My passion is building high-quality and user-friendly
        front-end applications.
        <br />
        <br />
        Feel free to send me an email at wang790222@gmail.com or a message on
        LinkedIn. Look forward to connecting with you!
      </StyledP>
    </Middle>
    <Right>
      <Title>Skills</Title>
      <Subtitle>&nbsp;</Subtitle>
      <div style={{ margin: "2rem 0 0 1rem" }}>
        <StyledSkillIcon>
          <i className="fa-brands fa-js"></i>
          <p>Javascript</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <i className="fa-brands fa-html5"></i>
          <p>HTML</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <i className="fa-brands fa-css3-alt"></i>
          <p>CSS</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <i className="fa-brands fa-react"></i>
          <p>React/Native</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <div
            style={{ width: "25px", height: "25px", display: "inline-block" }}
          >
            <img
              src={redux}
              style={{ width: "23px", height: "23px" }}
              alt="redux"
            />
          </div>
          <p>Redux</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <i className="fa-brands fa-python"></i>
          <p>Python</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <i className="fa-brands fa-java"></i>
          <p>Java</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <i
            className="fa-solid fa-c"
            style={{ transform: "scale(0.8) translateY(2px)" }}
          ></i>
          <p>C</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <div
            style={{ width: "25px", height: "25px", display: "inline-block" }}
          >
            <img
              src={jest}
              style={{
                width: "22px",
                height: "22px",
                transform: "translateY(3px)",
              }}
              alt="jest"
            />
          </div>
          <p>Jest</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <div
            style={{ width: "25px", height: "25px", display: "inline-block" }}
          >
            <img
              src={postgresql}
              style={{
                width: "26px",
                height: "26px",
                transform: "translateY(5px)",
              }}
              alt="postgresql"
            />
          </div>
          <p>postgresql</p>
        </StyledSkillIcon>
        <StyledSkillIcon>
          <i
            className="fa-brands fa-aws"
            style={{ transform: "scale(0.8) translateY(3px)" }}
          ></i>
          <p>AWS</p>
        </StyledSkillIcon>
      </div>
    </Right>
  </Section>
);

export default About;

const Section = styled.div`
  display: flex;
  flex-firection: row;
  width: 100%;
  height: 100%;
  alignitems: "stretch";
`;

const Left = styled.div`
  flex-basis: 22%;
  border-right: 3px solid ${colors.grey3};
  border-style: double;
  box-sizing: border-box;
  padding: 2rem 1rem;
`;

const Middle = styled.div`
  flex-basis: 66%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 2rem 5rem;
  text-align: center;
`;

const Right = styled.div`
  flex-basis: 22%;
  border-left: 3px solid ${colors.grey3};
  border-style: double;
  height: 100%;
  box-sizing: border-box;
  padding: 2rem 1rem;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Subtitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  opacity: 0.5;
`;

const StyledP = styled.div`
  margin-top: 2rem;
  text-align: left;
  line-height: 1.8rem;
`;

const StyledSkillIcon = styled.div`
  opacity: 0.8;
  line-height: 1.2rem;

  i {
    font-size: 25px;
    width: 25px;
    height: 25px;
  }

  p {
    font-size: 16px;
    display: inline-block;
    margin-left: 1rem;
  }
`;
