import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import nsysu from "../Images/nsysu.png";
import nctu from "../Images/nctu.png";
import reutlingen from "../Images/reutlingen.png";
import garmin from "../Images/garmin.png";
import pwpa from "../Images/pwpa.jpeg";
import ps from "../Images/ps.png";

import move0 from "../Images/move0.png";
import move1 from "../Images/move1.png";
import move2 from "../Images/move2.png";
import move3 from "../Images/move3.png";
import move4 from "../Images/move4.png";
import move5 from "../Images/move5.png";

import { colors } from "../Utils/colors";

const experienceData = [
  {
    header: "National Sun Yat-sen University, Taiwan",
    subHeader: "Computer Science, Bachelor",
    logo: nsysu,
    month: "Sept.",
    startYear: "2008",
    endYead: "2012",
  },
  {
    header: "National Chiao Tung University, Taiwan",
    subHeader: "Computer Science, Master",
    logo: nctu,
    month: "Sept.",
    startYear: "2012",
    endYead: "2015",
  },
  {
    header: "Reutlingen University, Germany",
    subHeader: "Exchange Student",
    logo: reutlingen,
    month: "Sept.",
    startYear: "2014",
    endYead: "2015",
  },
  {
    header: "Garmin Ltd., Taiwan",
    subHeader: "Software Engineer",
    logo: garmin,
    month: "Sept.",
    startYear: "2016",
    endYead: "2018",
  },
  {
    header: "PW Portfolio Analytics Inc., Toronto",
    subHeader: "Software Engineer",
    logo: pwpa,
    month: "Sept.",
    startYear: "2019",
    endYead: "2022",
  },
  {
    header: "PlayStation - SIE, Canada",
    subHeader: "Software Engineer II",
    logo: ps,
    month: "May",
    startYear: "2022",
    endYead: "",
  },
];

const moveArray = [move0, move1, move2, move3, move4, move5];

const Experience = () => {
  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  const section = useRef(null);
  const dataLength = experienceData.length;
  const curIndex = index % experienceData.length;
  const curYear = new Date().getFullYear();
  const moveCalculator = (index) =>
    (1 -
      (curYear - Number(experienceData[index].startYear)) / (curYear - 2008)) *
    75;
  const generateMovePic = (index) => {
    return (
      <MoveImage
        src={moveArray[index]}
        alt={`move${index}`}
        left={moveCalculator(index)}
        key={`move${index}`}
      ></MoveImage>
    );
  };

  useEffect(() => {
    section.current.focus();
  }, []);

  const generateArrowKeys = () => {
    return (
      <div
        style={{ margin: "1rem 0 0 1rem" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", marginBottom: "1px" }}>
          <div
            style={{
              opacity: "0",
              border: `2px solid ${colors.black}`,
              width: "16px",
              height: "16px",
            }}
          >
            &nbsp;
          </div>
          <div
            style={{
              border: `2px solid ${colors.black}`,
              width: "16px",
              height: "16px",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            &#8963;
          </div>
          <div
            style={{
              opacity: "0",
              border: `2px solid ${colors.black}`,
              width: "16px",
              height: "16px",
            }}
          >
            &nbsp;
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              border: `2px solid ${colors.black}`,
              width: "16px",
              height: "16px",
              borderRadius: "5px",
              backgroundColor: colors.grey3,
            }}
          >
            <p style={{ transform: "scale(0.9)" }}>&#10094;</p>
          </div>
          <div
            style={{
              border: `2px solid ${colors.black}`,
              width: "16px",
              height: "16px",
              borderRadius: "5px",
              margin: "0 1px",
              fontSize: "22px",
              fontWeight: "bold",
              lineHeight: "8px",
              backgroundColor: colors.grey3,
            }}
          >
            &#8964;
          </div>
          <div
            style={{
              border: `2px solid ${colors.black}`,
              width: "16px",
              height: "16px",
              borderRadius: "5px",
              backgroundColor: colors.grey3,
            }}
          >
            <p style={{ transform: "scale(0.9)" }}>&#10095;</p>
          </div>
        </div>
      </div>
    );
  };

  const generateDetail = (isFront) => {
    return (
      <div
        style={{
          border: `2px solid ${colors.slateGray}`,
          color: colors.slateGray,
          marginLeft: "8px",
          display: "inline-block",
          borderRadius: "5px",
          fontSize: "22px",
          fontWeight: "bold",
          lineHeight: "16px",
          cursor: "pointer",
          padding: "3px",
          width: "60px",
        }}
        onClick={(e) => {
          e.stopPropagation();

          setShowDetail(!showDetail);
        }}
      >
        <span style={{ transform: "translateY(-10px)" }}>
          {isFront ? (
            showDetail ? (
              <span style={{ fontSize: "12px" }}>▲</span>
            ) : (
              <span style={{ fontSize: "12px" }}>▼</span>
            )
          ) : (
            <span style={{ fontSize: "12px" }}>▼</span>
          )}
        </span>
        <span style={{ fontSize: "16px", lineHeight: "16px" }}>
          {isFront ? (showDetail ? "Less" : "More") : "More"}
        </span>
      </div>
    );
  };

  const getDetailContent = (index, dataLenth) => {
    switch (index % dataLenth) {
      case 3:
        return (
          <div>
            <h3>2016 Sept. - 2018 Sept.</h3>
            <ul>
              <li style={{ marginLeft: "2rem" }}>
                Designed and developed applications for Garmin Connect IQ Store.
                Implemented 5 Garmin Connect IQ in one year, included public and
                internal use
              </li>
              <li style={{ marginLeft: "2rem" }}>
                Provided support for the front-end development and UI/UX design
                initiatives for Garmin web application projects
              </li>
            </ul>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>2019 Sept. - 2022 May</h3>
            <ul>
              <li style={{ marginLeft: "2rem" }}>
                Built front-end infrastructure in React/Redux. Responsible for
                user experience, interface, design and translated UX concepts
                into code
              </li>
              <li style={{ marginLeft: "2rem" }}>
                Led front-end aspect of technical integrations and
                customizations. Launched three business level integrations
              </li>
              <li style={{ marginLeft: "2rem" }}>
                Involved in code reviews, unit/functional test case reviews and
                refactoring
              </li>
            </ul>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>2022 May - Present</h3>
            <ul>
              <li style={{ marginLeft: "2rem" }}>
                Developing JavaScript-based applications for PlayStation gaming
                consoles and future flagship Sony devices and services
              </li>
              <li style={{ marginLeft: "2rem" }}>
                Building digital commerce solutions for PlayStation games, media
                content, and subscription services
              </li>
            </ul>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <ExperienceSection
      ref={section}
      onClick={() => {
        if (index === dataLength - 1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }
        setShowDetail(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          if (index === dataLength - 1) {
            setIndex(0);
          } else {
            setIndex(index + 1);
          }
          setShowDetail(false);
        } else if (e.key === "ArrowLeft") {
          if (index === 0) {
            setIndex(dataLength - 1);
          } else {
            setIndex(index - 1);
          }
          setShowDetail(false);
        }

        if (index === 3 || index === 4 || index === 5) {
          if (e.key === "ArrowDown") {
            setShowDetail(true);
          } else if (e.key === "ArrowUp") {
            setShowDetail(false);
          }
        }
      }}
      tabIndex="0"
    >
      <Slides>
        <Slide data-order={curIndex % dataLength} id="nsysu">
          <div className="slide-header">{experienceData[0].header}</div>
          <div className="slide-sub-header">
            <div>
              <img
                src={experienceData[0].logo}
                alt={experienceData[0].header}
              ></img>
            </div>
            <div className="slide-sub-header-text">
              {experienceData[0].subHeader}
            </div>
          </div>
        </Slide>
        <Slide data-order={(curIndex + 1) % dataLength} id="ps">
          <div className="slide-header">{experienceData[5].header}</div>
          <div className="slide-sub-header">
            <div>
              <img
                src={experienceData[5].logo}
                alt={experienceData[5].header}
              ></img>
            </div>
            <div className="slide-sub-header-text">
              {experienceData[5].subHeader}
              {generateDetail(curIndex === 5)}
            </div>
          </div>
        </Slide>
        <Slide data-order={(curIndex + 2) % dataLength} id="pwpa">
          <div className="slide-header">{experienceData[4].header}</div>
          <div className="slide-sub-header">
            <div>
              <img
                src={experienceData[4].logo}
                alt={experienceData[4].header}
              ></img>
            </div>
            <div className="slide-sub-header-text">
              {experienceData[4].subHeader}
              {generateDetail(curIndex === 4)}
            </div>
          </div>
        </Slide>
        <Slide data-order={(curIndex + 3) % dataLength} id="garmin">
          <div className="slide-header">{experienceData[3].header}</div>
          <div className="slide-sub-header">
            <div>
              <img
                src={experienceData[3].logo}
                alt={experienceData[3].header}
              ></img>
            </div>
            <div className="slide-sub-header-text">
              {experienceData[3].subHeader}
              {generateDetail(curIndex === 3)}
            </div>
          </div>
        </Slide>
        <Slide data-order={(curIndex + 4) % dataLength}>
          <div className="slide-header">{experienceData[2].header}</div>
          <div className="slide-sub-header">
            <div>
              <img
                src={experienceData[2].logo}
                alt={experienceData[2].header}
              ></img>
            </div>
            <div className="slide-sub-header-text">
              {experienceData[2].subHeader}
            </div>
          </div>
        </Slide>
        <Slide data-order={(curIndex + 5) % dataLength}>
          <div className="slide-header">{experienceData[1].header}</div>
          <div className="slide-sub-header">
            <div>
              <img
                src={experienceData[1].logo}
                alt={experienceData[1].header}
              ></img>
            </div>
            <div className="slide-sub-header-text">
              {experienceData[1].subHeader}
            </div>
          </div>
        </Slide>
      </Slides>
      <Timestamp>
        <div className="year">{experienceData[curIndex].startYear}</div>
        <div className="month">{experienceData[curIndex].month}</div>
      </Timestamp>
      {generateMovePic(curIndex)}
      <Timeline>&nbsp;</Timeline>
      {showDetail ? (
        <Detail>{getDetailContent(curIndex, dataLength)}</Detail>
      ) : null}
    </ExperienceSection>
  );
};

export default Experience;

const ExperienceSection = styled.div`
  width: 100%;
  min-height: 30rem;
  position: relative;
  margin-top: 120px;
`;

const Slides = styled.div`
  @media only screen and (max-width: 1680px) {
  }

  width: 100%;
  -webkit-transition: bottom 0.5s ease-in-out, opacity 0.5s ease-in-out,
    top 0.5s ease-in-out, -webkit-filter 0.5s ease-in-out;
  -moz-transition: bottom 0.5s ease-in-out, opacity 0.5s ease-in-out,
    top 0.5s ease-in-out, -moz-filter 0.5s ease-in-out;
  -ms-transition: bottom 0.5s ease-in-out, opacity 0.5s ease-in-out,
    top 0.5s ease-in-out, -ms-filter 0.5s ease-in-out;
  transition: bottom 0.5s ease-in-out, opacity 0.5s ease-in-out,
    top 0.5s ease-in-out, filter 0.5s ease-in-out;
`;

const Slide = styled.div`
  white-space: nowrap;
  color: ${colors.black};
  width: 600px;
  text-align: center;

  .slide-header {
    font-size: 28px;
    font-weight: 800;
  }

  .slide-sub-header {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    & img {
      display: inline-block;
      height: 70px;
      max-height: 60px;
      margin-right: 1rem;
    }
  }

  .slide-sub-header-text {
    font-size: 22px;
    font-weight: 700;
    display: inline-block;
    line-height: 70px;
  }

  &[data-order="0"] {
    opacity: 1;
    position: absolute;
    bottom: 28%;
    z-index: 6;
    left: 50%;
    transform: translateX(-50%);
  }

  &[data-order="1"] {
    opacity: 0.5;
    transform: scale(0.7);
    position: absolute;
    left: 5%;
    bottom: 49%;
    z-index: 5;
    filter: blur(3px);
  }

  &[data-order="2"] {
    opacity: 0.3;
    transform: scale(0.5);
    z-index: 4;
    position: absolute;
    left: 15%;
    bottom: 64%;
    z-index: 5;
    filter: blur(6px);
  }

  &[data-order="3"] {
    opacity: 0.2;
    z-index: 3;
    position: absolute;
    left: 50%;
    bottom: 77%;
    z-index: 4;
    transform: translateX(-50%) scale(0.5);
    filter: blur(8px);
  }

  &[data-order="4"] {
    opacity: 0.3;
    transform: scale(0.5);
    position: absolute;
    right: 15%;
    bottom: 64%;
    z-index: 5;
    filter: blur(6px);
  }

  &[data-order="5"] {
    opacity: 0.5;
    transform: scale(0.7);
    position: absolute;
    right: 5%;
    bottom: 49%;
    z-index: 5;
    filter: blur(3px);
  }

  transition: all 0.5s ease-in-out, opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out, filter 0.5s ease-in-out;
  -webkit-transform: translatez(0);
  -moz-transform: translatez(0);
  -ms-transform: translatez(0);
`;

const Timeline = styled.div`
  width: 100%;
  height: 5px;
  position: absolute;
  bottom: 2rem;
  background-color: black;
  z-index: 0;
`;

const Timestamp = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 1rem;
  background-color: ${colors.white};
  z-index: 1;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;

  .year {
    font-size: 30px;
    font-weight: 700;
    text-align: left;
  }

  .month {
    font-size: 22px;
    font-weight: 600;
    text-align: right;
  }
`;

const MoveImage = styled.img`
  position: absolute;
  bottom: 1.5rem;
  height: 100px;
  left: calc(120px + ${(props) => (props.left ? props.left : 0)}%);
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Detail = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 120px;
  bottom: 0;
  background-color: ${colors.white};
  color: ${colors.black};
  animation: growDown 300ms;
  transform-origin: top center;
  padding: 1rem 2rem;
  box-sizing: border-box;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }
    80% {
      transform: scaleY(1.1);
    }
    100% {
      transform: scaleY(1);
    }
  }
`;
