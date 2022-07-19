import React from "react";
import { Names } from "../../Names/Names";
import {Contact} from "../../Contact/Contact";
import Checkbox from "../../Checkbox/Checkbox";
import { BasicForm, DivBtn, DivCheck } from "./Basic.styled";
import Button from '../../Button/Button';
import Image from '../../../Assets/right-arrow.png';
import Birthday from '../../Birthday/Birthday';
import Text from "../../Micro/Text/Text";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from "../../Containers/Page/Page";
import { maskPhone } from "../../../Utils/MaskPhone";
import {schema} from "../../../Utils/Validations";

const Basic = ({unLock}) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
    });

    const { name } = React.useContext(AuthContext); //page authcontext
    const [page,setPage] = name; //page state

    const saveLocal = (value) => {
        let localValues = Object.entries(value)
        for(let i = 0; i < localValues.length; i++) {
            localStorage.setItem(localValues[i][0],localValues[i][1])
        }
    }

    const onSubmit = data => {
    setPage(1)
    unLock(1)
    saveLocal(data)
    }
    
    return (
        <BasicForm  onSubmit={handleSubmit(onSubmit)}>
            <Names register={register} errors={errors} text="Please enter your Name"/>
            <Contact register={register} errors={errors} text="Please enter your Email" onChange={e => maskPhone(e)} /> 
            <Text container="birthday" text="Birthday *"/>
            <Birthday register={register} errors={errors} text="Please enter your Age"/> 
            <DivCheck>
                <Checkbox id="checkbox" type="checkbox" label="I accept the terms and privacy" register={register} errors={errors} text="Please confirm the terms"/>
            </DivCheck>
            <DivBtn>
                <Button nameDiv="next" id="next" type="submit"  text="Next" imageTwo={Image} unLock={unLock}/>
            </DivBtn>
        </BasicForm>
    );
};

export default Basic