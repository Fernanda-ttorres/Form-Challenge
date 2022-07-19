import React from "react";
import { useForm } from  "react-hook-form";
import {Input} from '../../Input/Input';
import { SocialForm, DivBtn } from "./Social.styled";
import Button from '../../Button/Button';
import Image from '../../../Assets/right-arrow.png'

import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from "../../Containers/Page/Page";
import {schemaTwo} from "../../../Utils/Validations";

const Social = ({unLock}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schemaTwo)
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
    setPage(2)
    unLock(2)
    saveLocal(data)
    }

    return (
        <SocialForm onSubmit={handleSubmit(onSubmit)}>
            <Input id="linkedin" errors={errors}  label="LindedIn" type="text" placeholder="https//www.linkedin.com/in/foo-bar-3a0560104/" register={register} />
            <Input id="github" errors={errors} text="Please enter your GutHub Link" label="Github *" type="text" placeholder="http://github.com/foobar" register={register} unLock={unLock} />
            <DivBtn>
                <Button nameDiv="next" id="next" type="submit"  text="Next"  imageTwo={Image}/>
            </DivBtn>
        </SocialForm>
    );
};

export default Social