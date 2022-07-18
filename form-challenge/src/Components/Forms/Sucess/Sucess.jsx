import { SucessPage, DivBtn } from "./Sucess.styled";
import Button from "../../Button/Button";
import Text from "../../Micro/Text/Text";
import { LocalText } from "../../Local-Text/LocalText";
const Sucess = () => {
  return (
    <SucessPage>
      <Text
        container={"sucess"}
        text={"Your data has been sent successfully! "}
      />

      <div className="local-content">
        <LocalText title={"Full Name: "} content={"Fulano"}/>
        <LocalText title={"Email: "} content={"qwewqe@wewqeq.ewqewq "}/>
        <LocalText title={"Birthday: "} content={"14/04/2008 "}/>
        <LocalText title={"Age: "} content={"13"}/>
        <LocalText title={"Github: "} content={"dsadsadsa"}/>
        <LocalText title={"Certificates: "} content={"https://cursos.alura.com.br/certificate/4ad81d87-33a3..."}/>
        <LocalText title={"Team Name: "} content={"asdas "}/>
        <LocalText title={"Institution: "} content={"asdsda"}/>
        <LocalText title={"Graduation: "} content={"saas"}/>

      </div>

      <DivBtn>
        <Button nameDiv="finish" id="finish" text="Finish" />
      </DivBtn>
    </SucessPage>
  );
};

export default Sucess;
