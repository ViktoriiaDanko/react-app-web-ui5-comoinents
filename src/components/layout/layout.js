import React from "react";
import Header from "../header";

import './layout.css';

export default function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
