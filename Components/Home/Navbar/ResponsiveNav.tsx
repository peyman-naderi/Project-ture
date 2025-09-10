"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setshowNav] = useState(false);
  const handelNavShow = () => setshowNav(true);
  const handelNavClose = () => setshowNav(false);

  return (
    <div>
      <Nav openNav={handelNavShow} />
      <MobileNav showNav={showNav} closeNav={handelNavClose} />
    </div>
  );
};

export default ResponsiveNav;
