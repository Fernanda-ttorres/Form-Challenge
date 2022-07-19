import React from "react";
import { CertificatesForm, DivBtn } from "./Certificates.styled";
import {Graduation} from "../../Graduation/Graduation"
import Certificate from "../../Certificate/Certificate"
import Button from '../../Button/Button';
import Image from '../../../Assets/check.png';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from "../../Containers/Page/Page";
import {schemaThree} from "../../../Utils/Validations";

const Certificates = ({unLock}) => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schemaThree)
    });

    const { name } = React.useContext(AuthContext); //page authcontext
    const [page,setPage] = name; //page state

    const onSubmit = data => {
    setPage(3)
    unLock(0)
    console.log(data);
    }
    
    return (
        <CertificatesForm  onSubmit={handleSubmit(onSubmit)}>
            <Certificate register={register} errors={errors} text="Please enter your "/>
            <Graduation register={register} errors={errors} text="Please enter your Team Name"/>
            <DivBtn>
                <Button nameDiv="finish" id="finish" type="submit" text="Finish" image={Image} unLock={unLock}/>
            </DivBtn>
        </CertificatesForm>
    );
};

export default Certificates