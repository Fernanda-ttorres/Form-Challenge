import { Names } from "../../Names/Names";
import {Contact} from "../../Contact/Contact";
import Checkbox from "../../Checkbox/Checkbox";
import { BasicForm, DivBtn, DivCheck } from "./Basic.styled";
import Button from '../../Button/Button';
import Image from '../../../Assets/right-arrow.png';
import Birthday from '../../Birthday/Birthday';
import Text from "../../Micro/Text/Text";

const Basic = () => {
    
    return (
        <BasicForm>
            <Names register={register} />
            <Contact register={register} />
            <DivCheck>
                <Checkbox id="checkbox" type="checkbox" label="I accept the terms and privacy" register={register} />
            </DivCheck>
            <Text container="birthday" text="Birthday *"/>
            <Birthday register={register}/>
            <DivBtn>
                <Button nameDiv="next" id="next" type="submit"  text="Next" imageTwo={Image} />
            </DivBtn>
        </BasicForm>
    );
};

export default Basic