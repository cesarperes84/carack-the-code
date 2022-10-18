import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import * as S from "./StyledHeader";

export const Header = () => (
  <div style={{ display: "flex", height: "35px" }}>
    <div
      style={{
        background: "#00af80",
        height: "30px",
        width: "30px",
        borderRadius: "40px",
        padding: "5px",
      }}
    >
      <LockIcon fontSize="large" style={{ fontSize: "20px" }} />
    </div>
    <h1
      className="center"
      style={{
        fontFamily: "'Fugaz One'",
        fontSize: "26px",
        fontWeight: "normal",
        marginLeft: "5px",
      }}
    >
      Decoddr
    </h1>
  </div>
);

export default Header;
