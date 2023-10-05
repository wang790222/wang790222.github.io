import React, { useState } from "react";
import styled from "styled-components";

import { Loader } from "../Components";

import left from "../Images/left.png";
import mid from "../Images/mid.png";
import right from "../Images/right.png";
import nation from "../Images/nation.png";
import ama from "../Images/ama.gif";
import { colors } from "../Utils/colors";

const Projects = () => {
  const [img1StillLoading, setImg1StillLoading] = useState(true);
  const [img2StillLoading, setImg2StillLoading] = useState(true);
  const [img3StillLoading, setImg3StillLoading] = useState(true);
  const [img4StillLoading, setImg4StillLoading] = useState(true);
  const [img5StillLoading, setImg5StillLoading] = useState(true);

  const isLoading = () => {
    return (
      img1StillLoading ||
      img2StillLoading ||
      img3StillLoading ||
      img4StillLoading ||
      img5StillLoading
    );
  };

  return (
    <div>
      {isLoading() ? <Loader /> : null}
      <Title>Projects</Title>
      <Section>
        <div
          style={{
            width: "80%",
            height: "380px",
            backgroundColor: colors.lightPurple,
            borderRadius: "10px",
            padding: "2rem",
            position: "relative",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Taiwan Library E‑book Search</h2>
          <p>
            React&nbsp;&#9679;&nbsp;Single page application
            (SPA)&nbsp;&#9679;&nbsp;Styled-Component&nbsp;&#9679;&nbsp;Responsive
            Web Design (RWD)&nbsp;&#9679;&nbsp;Google
            Analytics&nbsp;&#9679;&nbsp;Heroku
          </p>
          <br />
          <p>
            Integrated multiple E‑book vendors and public libraries, provided a
            fast and convenient book searching platform. Serviced an average of
            4,000+ visits per month.
          </p>

          <a
            href="https://taiwanlibrarysearch.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: colors.black }}
          >
            <h3
              style={{
                marginTop: "2rem",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              View project&nbsp;&#8594;
            </h3>
          </a>

          <div
            style={{
              display: "flex",
              height: "160px",
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              gap: "2rem",
              flexDirection: "row",
            }}
          >
            <StyledImg
              src={left}
              alt="left"
              style={{ transform: "scale(0.9)" }}
              onLoad={() => setImg1StillLoading(false)}
            />
            <StyledImg
              src={mid}
              alt="mide"
              onLoad={() => setImg5StillLoading(false)}
            />
            <StyledImg
              src={right}
              alt="right"
              style={{ transform: "scale(0.9)" }}
              onLoad={() => setImg2StillLoading(false)}
            />
          </div>
        </div>
        <div
          style={{
            width: "80%",
            height: "380px",
            backgroundColor: colors.lightGreen,
            borderRadius: "10px",
            padding: "2rem",
            position: "relative",
          }}
        >
          <h2 style={{ marginBottom: "2rem" }}>
            National Identity In Young Generation
          </h2>
          <p>
            javascript&nbsp;&#9679;&nbsp;jQuery&nbsp;&#9679;&nbsp;SASS&nbsp;&#9679;&nbsp;HTML&nbsp;&#9679;&nbsp;CSS
          </p>
          <br />
          <p>
            Interactive and animated site for visualizing and displaying a
            survey about national identity done by Taiwan Public Television
            Service Foundation.
          </p>

          <a
            href="https://d2jcae2gn1usff.cloudfront.net/ourcountry/index.html"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: colors.black }}
          >
            <h3
              style={{
                marginTop: "2rem",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              View project&nbsp;&#8594;
            </h3>
          </a>
          <div
            style={{
              display: "flex",
              height: "160px",
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              gap: "2rem",
              flexDirection: "row",
            }}
          >
            <img
              src={ama}
              alt="ama"
              onLoad={() => setImg3StillLoading(false)}
            />
            <img
              src={nation}
              alt="nation"
              onLoad={() => setImg4StillLoading(false)}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Projects;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
  color: ${colors.black};
  font-size: 18px;
`;

const StyledImg = styled.img`
  &:hover {
    transform: scale(1.1) !important;
  }
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 2rem auto;
`;