import React, { useState } from "react";
import styled from "styled-components";
import { Loader } from "../Components";

import v1 from "../Images/v1.jpg";
import v2 from "../Images/v2.jpg";
import v3 from "../Images/v3.jpg";
import v4 from "../Images/v4.jpg";
import v5 from "../Images/v5.jpg";
import v6 from "../Images/v6.jpg";
import v7 from "../Images/v7.jpg";
import v8 from "../Images/v8.jpg";
import v9 from "../Images/v9.jpg";
import v10 from "../Images/v10.jpg";
import v11 from "../Images/v11.jpg";
import v12 from "../Images/v12.jpg";
import v13 from "../Images/v13.jpg";
import v14 from "../Images/v14.jpg";
import v15 from "../Images/v15.jpg";
import v16 from "../Images/v16.jpg";
import v17 from "../Images/v17.jpg";
import v18 from "../Images/v18.jpg";
import v19 from "../Images/v19.jpg";
import v20 from "../Images/v20.jpg";
import v21 from "../Images/v21.jpg";
import v22 from "../Images/v22.jpg";
import v23 from "../Images/v23.jpg";

import h1 from "../Images/h1.jpg";

import h10 from "../Images/h10.jpg";
import h11 from "../Images/h11.jpg";
import h12 from "../Images/h12.jpg";
import h13 from "../Images/h13.jpg";
import h14 from "../Images/h14.jpg";
import h15 from "../Images/h15.jpg";
import h16 from "../Images/h16.jpg";
import h17 from "../Images/h17.jpg";
import h18 from "../Images/h18.jpg";
import h19 from "../Images/h19.jpg";
import h20 from "../Images/h20.jpg";
import h21 from "../Images/h21.jpg";
import h22 from "../Images/h22.jpg";
import h23 from "../Images/h23.jpg";
import h24 from "../Images/h24.jpg";
import h25 from "../Images/h25.jpg";
import h26 from "../Images/h26.jpg";
import h27 from "../Images/h27.jpg";
import h28 from "../Images/h28.jpg";
import h29 from "../Images/h29.jpg";
import h30 from "../Images/h30.jpg";
import h31 from "../Images/h31.jpg";
import h32 from "../Images/h32.jpg";
import h33 from "../Images/h33.jpg";
import h34 from "../Images/h34.jpg";
import h35 from "../Images/h35.jpg";
import h36 from "../Images/h36.jpg";
import h37 from "../Images/h37.jpg";
import h38 from "../Images/h38.jpg";
import h39 from "../Images/h39.jpg";
import h40 from "../Images/h40.jpg";

import top_pic from "../Images/top_pic.jpg";
import { colors } from "../Utils/colors";
import { imgObj } from "../Utils/imageObj";

const Photography = () => {
  const isLoading = () => {
    return (
      img1StillLoading ||
      img2StillLoading ||
      img3StillLoading ||
      img4StillLoading ||
      img5StillLoading ||
      img6StillLoading ||
      img7StillLoading ||
      img8StillLoading ||
      img9StillLoading ||
      img10StillLoading ||
      img11StillLoading ||
      img12StillLoading ||
      img13StillLoading ||
      img14StillLoading ||
      img15StillLoading ||
      img16StillLoading ||
      img17StillLoading ||
      img18StillLoading ||
      img19StillLoading ||
      img20StillLoading ||
      img21StillLoading ||
      img22StillLoading ||
      img23StillLoading ||
      img24StillLoading ||
      img25StillLoading ||
      img26StillLoading ||
      img27StillLoading ||
      img28StillLoading ||
      img29StillLoading ||
      img30StillLoading ||
      img31StillLoading ||
      img32StillLoading ||
      img33StillLoading ||
      img34StillLoading ||
      img35StillLoading ||
      img36StillLoading ||
      img37StillLoading ||
      img38StillLoading ||
      img39StillLoading ||
      img40StillLoading ||
      img41StillLoading ||
      img42StillLoading ||
      img43StillLoading ||
      img44StillLoading ||
      img45StillLoading ||
      img46StillLoading ||
      img47StillLoading ||
      img48StillLoading ||
      img49StillLoading ||
      img50StillLoading ||
      img51StillLoading ||
      img52StillLoading ||
      img53StillLoading ||
      img54StillLoading ||
      img55StillLoading ||
      img56StillLoading ||
      img57StillLoading ||
      img58StillLoading ||
      img59StillLoading ||
      img60StillLoading ||
      img61StillLoading ||
      img62StillLoading ||
      img63StillLoading ||
      img64StillLoading ||
      img65StillLoading
    );
  };

  const [img1StillLoading, setImg1StillLoading] = useState(true);
  const [img2StillLoading, setImg2StillLoading] = useState(true);
  const [img3StillLoading, setImg3StillLoading] = useState(true);
  const [img4StillLoading, setImg4StillLoading] = useState(true);
  const [img5StillLoading, setImg5StillLoading] = useState(true);
  const [img6StillLoading, setImg6StillLoading] = useState(true);
  const [img7StillLoading, setImg7StillLoading] = useState(true);
  const [img8StillLoading, setImg8StillLoading] = useState(true);
  const [img9StillLoading, setImg9StillLoading] = useState(true);
  const [img10StillLoading, setImg10StillLoading] = useState(true);
  const [img11StillLoading, setImg11StillLoading] = useState(true);
  const [img12StillLoading, setImg12StillLoading] = useState(true);
  const [img13StillLoading, setImg13StillLoading] = useState(true);
  const [img14StillLoading, setImg14StillLoading] = useState(true);
  const [img15StillLoading, setImg15StillLoading] = useState(true);
  const [img16StillLoading, setImg16StillLoading] = useState(true);
  const [img17StillLoading, setImg17StillLoading] = useState(true);
  const [img18StillLoading, setImg18StillLoading] = useState(true);
  const [img19StillLoading, setImg19StillLoading] = useState(true);
  const [img20StillLoading, setImg20StillLoading] = useState(true);
  const [img21StillLoading, setImg21StillLoading] = useState(true);
  const [img22StillLoading, setImg22StillLoading] = useState(true);
  const [img23StillLoading, setImg23StillLoading] = useState(true);
  const [img24StillLoading, setImg24StillLoading] = useState(true);
  const [img25StillLoading, setImg25StillLoading] = useState(true);
  const [img26StillLoading, setImg26StillLoading] = useState(true);
  const [img27StillLoading, setImg27StillLoading] = useState(true);
  const [img28StillLoading, setImg28StillLoading] = useState(true);
  const [img29StillLoading, setImg29StillLoading] = useState(true);
  const [img30StillLoading, setImg30StillLoading] = useState(true);
  const [img31StillLoading, setImg31StillLoading] = useState(true);
  const [img32StillLoading, setImg32StillLoading] = useState(true);
  const [img33StillLoading, setImg33StillLoading] = useState(true);
  const [img34StillLoading, setImg34StillLoading] = useState(true);
  const [img35StillLoading, setImg35StillLoading] = useState(true);
  const [img36StillLoading, setImg36StillLoading] = useState(true);
  const [img37StillLoading, setImg37StillLoading] = useState(true);
  const [img38StillLoading, setImg38StillLoading] = useState(true);
  const [img39StillLoading, setImg39StillLoading] = useState(true);
  const [img40StillLoading, setImg40StillLoading] = useState(true);
  const [img41StillLoading, setImg41StillLoading] = useState(true);
  const [img42StillLoading, setImg42StillLoading] = useState(true);
  const [img43StillLoading, setImg43StillLoading] = useState(true);
  const [img44StillLoading, setImg44StillLoading] = useState(true);
  const [img45StillLoading, setImg45StillLoading] = useState(true);
  const [img46StillLoading, setImg46StillLoading] = useState(true);
  const [img47StillLoading, setImg47StillLoading] = useState(true);
  const [img48StillLoading, setImg48StillLoading] = useState(true);
  const [img49StillLoading, setImg49StillLoading] = useState(true);
  const [img50StillLoading, setImg50StillLoading] = useState(true);
  const [img51StillLoading, setImg51StillLoading] = useState(true);
  const [img52StillLoading, setImg52StillLoading] = useState(true);
  const [img53StillLoading, setImg53StillLoading] = useState(true);
  const [img54StillLoading, setImg54StillLoading] = useState(true);
  const [img55StillLoading, setImg55StillLoading] = useState(true);
  const [img56StillLoading, setImg56StillLoading] = useState(true);
  const [img57StillLoading, setImg57StillLoading] = useState(true);
  const [img58StillLoading, setImg58StillLoading] = useState(true);
  const [img59StillLoading, setImg59StillLoading] = useState(true);
  const [img60StillLoading, setImg60StillLoading] = useState(true);
  const [img61StillLoading, setImg61StillLoading] = useState(true);
  const [img62StillLoading, setImg62StillLoading] = useState(true);
  const [img63StillLoading, setImg63StillLoading] = useState(true);
  const [img64StillLoading, setImg64StillLoading] = useState(true);
  const [img65StillLoading, setImg65StillLoading] = useState(true);

  const getImage = (width, loadingFunction, imgObjDetailed) => {
    const { alt, img, place } = imgObjDetailed;

    return (
      <StyledImage width={width} img={img}>
        <img src={top_pic} alt={alt} onLoad={() => loadingFunction(false)} />
        <div className="img-text">{place}</div>
      </StyledImage>
    );
  };

  return (
    <div>
      {isLoading() ? <Loader /> : null}
      <Section>
        <StyledImage width={68} img={top_pic} style={{ margin: "0 auto" }}>
          <img
            src={top_pic}
            alt="top_pic"
            onLoad={() => setImg42StillLoading(false)}
          />
          <div className="img-text">Ugljan, Croatia</div>
        </StyledImage>
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "40px auto 20px",
            gap: "20px",
          }}
        >
          {getImage(26, setImg1StillLoading, imgObj[1])}
          {getImage(26, setImg2StillLoading, imgObj[2])}
          {getImage(26, setImg3StillLoading, imgObj[3])}
          {getImage(26, setImg4StillLoading, imgObj[4])}
          {getImage(26, setImg5StillLoading, imgObj[5])}
          {getImage(26, setImg6StillLoading, imgObj[6])}
          {getImage(26, setImg7StillLoading, imgObj[7])}
          {getImage(26, setImg8StillLoading, imgObj[8])}
          {getImage(26, setImg9StillLoading, imgObj[9])}
        </div>
        <div
          style={{
            backgroundColor: colors.lightGreyish,
            width: "70%",
            margin: "2rem auto",
            borderRadius: "8px",
            background: `linear-gradient(135deg, transparent 15px, ${colors.lightGreyish} 0) top left, linear-gradient(-45deg, transparent 15px, ${colors.lightGreyish} 0) bottom right`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50%",
            textAlign: "center",
          }}
        >
          <p
            style={{
              maxWidth: "55rem",
              margin: "0 auto",
              padding: "2rem",
              lineHeight: "24px",
            }}
          >
            I was born and grew up in Asia. I am lucky and blessed to have the
            opportunity to live and travel some countries. Now I have immegrated
            to Canada and I won't stop exploring this beautiful world.
          </p>
        </div>
        <div style={{ width: "65%", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gap: "15px",
              justifyContent: "center",
              gridTemplateRows: "repeat(60, 10px)",
            }}
          >
            <StyledImageInGrid img={v1}>
              <img
                src={v1}
                alt="v1"
                onLoad={() => setImg10StillLoading(false)}
              />
              <div className="img-text">Preikestolen, Norway</div>
            </StyledImageInGrid>

            <img
              src={v2}
              alt="v2"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 13,
                gridColumnEnd: 25,
                gridRowStart: 1,
                gridRowEnd: 16,
              }}
              onLoad={() => setImg11StillLoading(false)}
            />
            <img
              src={v3}
              alt="v3"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 1,
                gridRowEnd: 22,
              }}
              onLoad={() => setImg12StillLoading(false)}
            />
            <img
              src={h10}
              alt="h10"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 16,
                gridRowEnd: 31,
              }}
              onLoad={() => setImg13StillLoading(false)}
            />
            <img
              src={h11}
              alt="h11"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 22,
                gridRowEnd: 31,
              }}
              onLoad={() => setImg14StillLoading(false)}
            />
            <img
              src={v4}
              alt="v4"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 13,
                gridRowStart: 31,
                gridRowEnd: 46,
              }}
              onLoad={() => setImg15StillLoading(false)}
            />
            <img
              src={v5}
              alt="v5"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 13,
                gridColumnEnd: 25,
                gridRowStart: 31,
                gridRowEnd: 46,
              }}
              onLoad={() => setImg16StillLoading(false)}
            />
            <img
              src={h12}
              alt="h12"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 31,
                gridRowEnd: 40,
              }}
              onLoad={() => setImg17StillLoading(false)}
            />
            <img
              src={v6}
              alt="v6"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 40,
                gridRowEnd: 61,
              }}
              onLoad={() => setImg18StillLoading(false)}
            />
            <img
              src={h13}
              alt="h13"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 46,
                gridRowEnd: 61,
              }}
              onLoad={() => setImg19StillLoading(false)}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "935px",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "40px auto 40px",
            gap: "20px",
          }}
          onLoad={() => setImg20StillLoading(false)}
        >
          <img
            src={v7}
            alt="v7"
            style={{ maxWidth: "18%" }}
            onLoad={() => setImg21StillLoading(false)}
          />
          <img
            src={v8}
            alt="v8"
            style={{ maxWidth: "18%" }}
            onLoad={() => setImg22StillLoading(false)}
          />
          <img
            src={v9}
            alt="v9"
            style={{ maxWidth: "18%" }}
            onLoad={() => setImg23StillLoading(false)}
          />

          <img
            src={v10}
            alt="v10"
            style={{ maxWidth: "18%" }}
            onLoad={() => setImg24StillLoading(false)}
          />
          <img
            src={v11}
            alt="v11"
            style={{ maxWidth: "18%" }}
            onLoad={() => setImg25StillLoading(false)}
          />
        </div>

        <div style={{ width: "65%", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gap: "15px",
              justifyContent: "center",
              gridTemplateRows: "repeat(108, 11px)",
            }}
          >
            <img
              src={v12}
              alt="v12"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 13,
                gridRowStart: 1,
                gridRowEnd: 16,
              }}
              onLoad={() => setImg26StillLoading(false)}
            />
            <img
              src={v13}
              alt="v13"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 13,
                gridColumnEnd: 25,
                gridRowStart: 1,
                gridRowEnd: 16,
              }}
              onLoad={() => setImg27StillLoading(false)}
            />
            <img
              src={v14}
              alt="v14"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 1,
                gridRowEnd: 21,
              }}
              onLoad={() => setImg28StillLoading(false)}
            />
            <img
              src={h14}
              alt="h14"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 16,
                gridRowEnd: 31,
              }}
              onLoad={() => setImg29StillLoading(false)}
            />
            <img
              src={h15}
              alt="h15"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 21,
                gridRowEnd: 31,
              }}
              onLoad={() => setImg30StillLoading(false)}
            />
            <img
              src={v15}
              alt="v15"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 13,
                gridRowStart: 31,
                gridRowEnd: 46,
              }}
              onLoad={() => setImg31StillLoading(false)}
            />
            <img
              src={v16}
              alt="v16"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 13,
                gridColumnEnd: 27,
                gridRowStart: 31,
                gridRowEnd: 46,
              }}
              onLoad={() => setImg32StillLoading(false)}
            />
            <img
              src={h16}
              alt="h16"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 27,
                gridColumnEnd: 40,
                gridRowStart: 31,
                gridRowEnd: 41,
              }}
              onLoad={() => setImg33StillLoading(false)}
            />
            <img
              src={v17}
              alt="v17"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 27,
                gridColumnEnd: 40,
                gridRowStart: 41,
                gridRowEnd: 61,
              }}
              onLoad={() => setImg34StillLoading(false)}
            />
            <img
              src={h17}
              alt="h17"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 27,
                gridRowStart: 46,
                gridRowEnd: 61,
              }}
              onLoad={() => setImg35StillLoading(false)}
            />
            <img
              src={h18}
              alt="h18"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 19,
                gridRowStart: 61,
                gridRowEnd: 72,
              }}
              onLoad={() => setImg36StillLoading(false)}
            />
            <img
              src={h19}
              alt="h19"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 19,
                gridColumnEnd: 40,
                gridRowStart: 61,
                gridRowEnd: 74,
              }}
              onLoad={() => setImg37StillLoading(false)}
            />
            <img
              src={h20}
              alt="h20"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 19,
                gridRowStart: 72,
                gridRowEnd: 84,
              }}
              onLoad={() => setImg38StillLoading(false)}
            />
            <img
              src={v18}
              alt="v18"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 19,
                gridColumnEnd: 28,
                gridRowStart: 74,
                gridRowEnd: 84,
              }}
              onLoad={() => setImg39StillLoading(false)}
            />
            <img
              src={h21}
              alt="h21"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 28,
                gridColumnEnd: 40,
                gridRowStart: 74,
                gridRowEnd: 84,
              }}
              onLoad={() => setImg40StillLoading(false)}
            />
            <img
              src={h22}
              alt="h22"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 40,
                gridRowStart: 84,
                gridRowEnd: 108,
              }}
              onLoad={() => setImg41StillLoading(false)}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0px auto 20px",
            gap: "20px",
          }}
        >
          <img
            src={h23}
            alt="h23"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg43StillLoading(false)}
          />
          <img
            src={h24}
            alt="h24"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg44StillLoading(false)}
          />
          <img
            src={h25}
            alt="h25"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg45StillLoading(false)}
          />

          <img
            src={h26}
            alt="h26"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg46StillLoading(false)}
          />
          <img
            src={h27}
            alt="h27"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg47StillLoading(false)}
          />
          <img
            src={h28}
            alt="h28"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg48StillLoading(false)}
          />

          <img
            src={h29}
            alt="h29"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg49StillLoading(false)}
          />
          <img
            src={h30}
            alt="h30"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg50StillLoading(false)}
          />
          <img
            src={h31}
            alt="h31"
            style={{ maxWidth: "26%" }}
            onLoad={() => setImg51StillLoading(false)}
          />
        </div>
        <div style={{ width: "65%", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gap: "15px",
              justifyContent: "center",
              gridTemplateRows: "repeat(120, 10px)",
            }}
          >
            <img
              src={v19}
              alt="v1"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 13,
                gridRowStart: 1,
                gridRowEnd: 18,
              }}
              onLoad={() => setImg52StillLoading(false)}
            />
            <img
              src={v20}
              alt="v20"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 13,
                gridColumnEnd: 25,
                gridRowStart: 1,
                gridRowEnd: 18,
              }}
              onLoad={() => setImg53StillLoading(false)}
            />
            <img
              src={v21}
              alt="v21"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 1,
                gridRowEnd: 24,
              }}
              onLoad={() => setImg54StillLoading(false)}
            />
            <img
              src={h32}
              alt="h32"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 18,
                gridRowEnd: 33,
              }}
              onLoad={() => setImg55StillLoading(false)}
            />
            <img
              src={h33}
              alt="h33"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 24,
                gridRowEnd: 33,
              }}
              onLoad={() => setImg56StillLoading(false)}
            />
            <img
              src={h34}
              alt="h34"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 33,
                gridRowEnd: 48,
              }}
              onLoad={() => setImg57StillLoading(false)}
            />
            <img
              src={h35}
              alt="h35"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 33,
                gridRowEnd: 42,
              }}
              onLoad={() => setImg58StillLoading(false)}
            />
            <img
              src={v22}
              alt="v22"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 42,
                gridRowEnd: 63,
              }}
              onLoad={() => setImg59StillLoading(false)}
            />
            <img
              src={h36}
              alt="h36"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 48,
                gridRowEnd: 63,
              }}
              onLoad={() => setImg60StillLoading(false)}
            />
            <img
              src={h37}
              alt="h37"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 63,
                gridRowEnd: 78,
              }}
              onLoad={() => setImg61StillLoading(false)}
            />
            <img
              src={h38}
              alt="h38"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 63,
                gridRowEnd: 74,
              }}
              onLoad={() => setImg62StillLoading(false)}
            />
            <img
              src={v23}
              alt="v23"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 25,
                gridColumnEnd: 40,
                gridRowStart: 74,
                gridRowEnd: 95,
              }}
              onLoad={() => setImg63StillLoading(false)}
            />
            <img
              src={h39}
              alt="h39"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 25,
                gridRowStart: 78,
                gridRowEnd: 95,
              }}
              onLoad={() => setImg64StillLoading(false)}
            />
            <img
              src={h40}
              alt="h40"
              style={{
                width: "100%",
                height: "100%",
                gridColumnStart: 1,
                gridColumnEnd: 40,
                gridRowStart: 95,
                gridRowEnd: 120,
              }}
              onLoad={() => setImg65StillLoading(false)}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Photography;

const Section = styled.div`
  margin-top: 165px;
`;

const StyledImage = styled.div`
  position: relative;
  max-width: ${(props) => `${props.width}%`};

  & img {
    width: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${(props) => props.img});
    transition: 0.5s;
    background-size: cover;
  }

  &:hover {
    .img-text {
      visibility: visible;
      opacity: 1;
    }

    &:before {
      filter: brightness(35%);
    }
  }

  .img-text {
    white-space: nowrap;
    position: absolute;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility 0s, opacity 0.25s linear;
    transition: visibility 0s, opacity 0.25s linear;
  }
`;

const StyledImageInGrid = styled.div`
  position: relative;
  grid-column-start: 1;
  grid-column-end: 13;
  grid-row-start: 1;
  grid-row-end: 16;

  & img {
    width: 100%;
    height: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${(props) => props.img});
    transition: 0.5s;
    background-size: cover;
  }

  &:hover {
    .img-text {
      visibility: visible;
      opacity: 1;
    }

    &:before {
      filter: brightness(35%);
    }
  }

  .img-text {
    white-space: nowrap;
    position: absolute;
    font-size: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: visibility 0s, opacity 0.25s linear;
    transition: visibility 0s, opacity 0.25s linear;
  }
`;