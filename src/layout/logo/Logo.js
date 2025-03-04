import React from "react";
import LogoLight2x from "../../images/logo-horizontal-sem-fundo-dark2x.png";
import LogoDark2x from "../../images/logo-horizontal-sem-fundo2x.png";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    // <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
    <Link to={`user-list-regular`} className="logo-link">
      <img className="logo-light logo-img" src={LogoLight2x} alt="logo" />
      <img className="logo-dark logo-img" src={LogoDark2x} alt="logo" />
    </Link>
  );
};

export default Logo;
