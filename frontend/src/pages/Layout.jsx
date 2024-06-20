import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <br />
      <br />
      <Sidebar />
      <br />
      <br />
      <div>
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
