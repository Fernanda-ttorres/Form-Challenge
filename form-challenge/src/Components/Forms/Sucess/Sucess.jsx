import { SucessPage, DivBtn } from "./Sucess.styled";
import Button from "../../Button/Button";
import React from "react";
import Text from "../../Micro/Text/Text";
import { LocalText } from "../../Local-Text/LocalText";
import { AuthContext } from "../../Containers/Page/Page";
import { useContext } from "react";
import Image from "../../../Assets/check.png"
const Sucess = () => {

  /*localStorage.setItem("fullname","nome")
  localStorage.setItem("nickname","nome")
  localStorage.setItem("email","nome")
  localStorage.setItem("phone","nome")
  localStorage.setItem("selectday","nome")
  localStorage.setItem("selectmonth","nome")
  localStorage.setItem("github","nome")
  localStorage.setItem("certificate","nome")
  localStorage.setItem("team","nome")
  localStorage.setItem("institution","nome")
  localStorage.setItem("graduation","nome")*/

  
  const { name } = React.useContext(AuthContext); //page authcontext
  const [page,setPage] = name; //page state

  const returnPage = () => {
    setPage(0)
  }

   
  return (
    <SucessPage>
      <Text
        container={"sucess"}
        text={"Your data has been sent successfully! "}
      />

      <div className="local-content">
        <LocalText title={"Full Name: "} content={localStorage.getItem("fullname")}/>
        <LocalText title={"Nickname: "} content={localStorage.getItem("nickname")}/>
        <LocalText title={"Email: "} content={localStorage.getItem("email")}/>
        <LocalText title={"Phone: "} content={localStorage.getItem("phone")}/>
        <LocalText title={"Birthday: "} content={localStorage.getItem("selectday") + "/" 
        + localStorage.getItem("selectmonth") + "/" + "1998"}/>
        <LocalText title={"Linkedin: "} content={localStorage.getItem("linkedin")}/>
        <LocalText title={"Github: "} content={localStorage.getItem("github")}/>
        <LocalText title={"Certificates: "} content={localStorage.getItem("certificate")}/>
        <LocalText title={"Team Name: "} content={localStorage.getItem("team")}/>
        <LocalText title={"Institution: "} content={localStorage.getItem("institution")}/>
        <LocalText title={"Graduation: "} content={localStorage.getItem("graduation")}/>
      </div>

      <DivBtn>
        <Button nameDiv="finish" id="finish" text="Finish" image={Image}  onClick={returnPage}/>
      </DivBtn>
    </SucessPage>
  );
};

export default Sucess;
