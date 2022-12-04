import React from "react";
import Clock from "../common/gadgets/Clock";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import ClickCounter from "../common/gadgets/ClickCounter";

const Page = () => {
  const sectionStyle = {
    marginLeft: "250px",
    marginTop: "30px",
  };

  const headerStyle = {
    padding: "5px",
    position: "sticky" as "sticky",
    top: "0",
    background: "black",
    textAlign: "center" as "center",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    opacity: "0.7",
  };

  return (
    <div id="page">
      <NavBar />
      <header style={headerStyle}>
        ZDFRONpol10 <Clock />
        <ClickCounter />
      </header>
      <section style={sectionStyle}>
        <Outlet />
      </section>
    </div>
  );
};

export default Page;
