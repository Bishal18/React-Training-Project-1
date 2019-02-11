import React from "react";
import NavBar from "../NavBar";

import config from "../../configs/config";

const Header = () => {
  return (
    <div className="header">
      <h1>React Training</h1>
      <NavBar links={config.navLinks} />
      <br/>
    </div>
  );
};

export default Header;
