
import { SucessPage, DivBtn } from "./Sucess.styled";
import Button from "../../Button/Button";
import Text from "../../Micro/Text/Text";
const Sucess = () => {
 
    return (
        <SucessPage>
            <Text container={"sucess"} text={"Your data has been sent successfully! "}/>
            
            <DivBtn>
                <Button nameDiv="finish" id="finish"  text="Finish"  />
            </DivBtn>
        </SucessPage>
    );
};

export default Sucess