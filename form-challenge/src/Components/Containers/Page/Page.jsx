import React from "react";
import { useState } from "react";

import { PageStyled } from "./PageStyled";

import Card from "../../Card/Card";
import Header from "../Header/Header";
import Navbar from "../../Navbar/Navbar";

import A from "../../tests/testA";
import B from "../../tests/testB";
import C from "../../tests/testC";

export const AuthContext = React.createContext();

export const Page = () => {
  let [page, setPage] = useState(0); //state that sets witch page we are

  const Titles = ["First Tab", "Second Tab", "Third Tab"]; //title for each page, using the page state as index

  const PageDisplay = () => {
    //returns a diferent form based on the page state
    if (page === 0) {
      return <A />;
    } else if (page === 1) {
      return <B />;
    } else if (page === 2) {
      return <C />;
    }
  };

  return (
    <AuthContext.Provider value={{ name: [page, setPage] }}>
      <PageStyled>
        <Header tab={Titles[page]} />
        <Card nav={<Navbar />} form={PageDisplay()} />
      </PageStyled>
    </AuthContext.Provider>
  );
};

export default Page;
