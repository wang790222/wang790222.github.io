import React from "react";
import styled from "styled-components";

import { colors } from "../Utils/colors";
import me from "../Images/me.JPG";
import email from "../Images/email.png";
import linkedin from "../Images/linkedin.png";

const Mobile = () => (
  <Section>
    <Name>Eddie Wang</Name>
    <img
      src={me}
      style={{
        width: "150px",
        borderRadius: "75px",
        margin: "20px auto",
      }}
      alt="me"
    />
    <div>
      <div style={{ display: "inline-block", marginRight: "10px" }}>
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
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        <a href="mailto:wang790222@gmail.com">
          <img
            src={email}
            style={{ height: "25px", opacity: "0.8" }}
            alt="email"
          />
        </a>
      </div>
    </div>

    <Title>Front-end Engineer</Title>
    <Subtitle>Toronto, Canada</Subtitle>

    <StyledP>
      Thanks for visiting my website!
      <br />
      <span style={{ fontSize: "10px" }}>
        <i>Suggest using bigger device for viewing more information.</i>
      </span>
      <br />
      <br /> My name is Eddie. I am a front-end engineer currently work at&nbsp;
      <b>PlayStation</b>. Over the past four years, I have built up skills
      especially in front-end development. I equip solid knowledge of
      javascript, html, and css. I am also very confident working with
      React/Redux. My passion is building high-quality and user-friendly
      front-end applications.
      <br />
      <br />
      Feel free to send me an email at <b>wang790222@gmail.com</b> or a message
      on LinkedIn. Look forward to connecting with you!
    </StyledP>
  </Section>
);

export default Mobile;

const Section = styled.div`
  text-align: center;
  margin: 30px auto;
`;

const Name = styled.h1`
  font-size: 32px;
  color: ${colors.slateGray};
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
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
  max-width: 320px;
`;
