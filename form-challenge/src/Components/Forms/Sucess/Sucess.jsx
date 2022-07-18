import { SucessPage, DivBtn } from "./Sucess.styled";
import Button from "../../Button/Button";
import Text from "../../Micro/Text/Text";
const Sucess = () => {
  return (
    <SucessPage>
      <Text
        container={"sucess"}
        text={"Your data has been sent successfully! "}
      />
      <div className="local-content">
        <Text container={"sucess"} text={"Full Name: ewqeqwe"} />
        <Text container={"sucess"} text={"Email: qwewqe@wewqeq.ewqewq"} />
        <Text container={"sucess"} text={"Birthday: 14/04/2008 "} />
        <Text container={"sucess"} text={"Age: 13"} />
        <Text container={"sucess"} text={"13 GitHub: dsadsadsa"} />
        <Text container={"sucess"} text={"Team Name: asdas"} />
        <Text container={"sucess"} text={"Institution: asdsda "} />
        <Text container={"sucess"} text={"Graduation: saas"} />
      </div>

      <DivBtn>
        <Button nameDiv="finish" id="finish" text="Finish" />
      </DivBtn>
    </SucessPage>
  );
};

export default Sucess;
