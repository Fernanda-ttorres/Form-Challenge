import React from "react";
import { useState } from "react";

import { PageStyled } from "./Page.styled";

import Card from "../../Card/Card";
import Header from "../Header/Header";
import Navbar from "../../Navbar/Navbar";
import Basic from "../../Forms/Basic/Basic";
import Social from "../../Forms/Social/Social";

export const AuthContext = React.createContext();

export const Page = () => {
  let [page, setPage] = useState(0); //state that sets witch page we are
  
  let [lock, setLock] = useState(0) //state that sets the lock on the navbar. only unlockd after submit   

  const Titles = ["First Tab", "Second Tab", "Third Tab", "Sucess"]; //title for each page, using the page state as index
  
  const PageDisplay = () => {
    //returns a diferent internal content based on the page state
    if (page === 0) {
      return <Basic unLock={setLock} />;
   } else if (page === 1) {
      return <Social unLock={setLock}/>;
    } /*else if (page === 2) {
      return <C />;
    } else if (page === 3) {
      return <Sucess />
    }
    }*/
  };


  return (
    <AuthContext.Provider value={{ name: [page, setPage] }}>
      <PageStyled>
        <Header tab={Titles[page]} />
        <Card nav={<Navbar lock={lock}/>} form={PageDisplay()} page={page}/>
      </PageStyled>
    </AuthContext.Provider>
  );
};

export default Page;