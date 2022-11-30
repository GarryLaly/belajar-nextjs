import React from "react";
import Link from "next/link";
// import { Link } from "react-router-dom";

const Header = ({ keyword, setKeyword }) => {
  return (
    <div className="box-container">
      <img src="/logo.svg" className="box-logo" alt="logo" />
      <p className="box-text">Logo React</p>
      <div style={{ clear: "both" }} />
      {setKeyword && (
        <input
          placeholder="Ketik pencarian disini..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      )}
    </div>
  );
};

export default Header;
