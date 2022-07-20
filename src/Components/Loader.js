import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

import { colors } from "../Utils/colors";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        background: colors.white,
        zIndex: "10",
      }}
    >
      <FadeLoader
        cssOverride={{ position: "absolute", top: "50%", left: "50%" }}
      />
    </div>
  );
};

export default Loader;
