import {React, useState } from "react";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Image from "../../Assets/plus.png";
import ImageTwo from "../../Assets/right-arrow.png";
import Vetor from '../../Assets/Vector.png'
import { DivSelect, DivForAll, DivOption, DivGeral, DivButton} from "./Certificate.styled";

const Certificate = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [certificado, setCertificado] = useState({ certificado: "" });
  const [arrayCertificado, setArrayCertificado] = useState([]);
  const [viewOptions, setViewOptions] = useState('notView')

  const adding = () => {
    if(arrayCertificado.length<5 && certificado.certificado!=='')
      setArrayCertificado([...arrayCertificado, certificado]);
  };

  let stateOptions = 1

  const lookOptions = () => {
    if (stateOptions === 1){
      setViewOptions('view')
      stateOptions = 0
    }
    else{
      setViewOptions('notView')
      stateOptions = 1
    }
  }

  return (
    <div>
      <Input type="text" id="certificate" label="Certificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" onChange={(e) => setCertificado({ certificado: e.target.value })} register={register}/>
      <DivForAll>
        <DivSelect>
          <Button id={"length"+arrayCertificado.length} text="Certificates" type="" imageTwo={Vetor} onClick={lookOptions}/>
            {arrayCertificado.map((rdm) => 
              <DivGeral className={viewOptions}><DivOption>{rdm.certificado}</DivOption><DivButton><Button id="deletButton" text="... X"/></DivButton></DivGeral>
            )}
        </DivSelect>
        <Button id="more" image={Image} text="More" type="" imageTwo={ImageTwo} onClick={adding}/>
      </DivForAll>
    </div>
  );
};

export default Certificate;
