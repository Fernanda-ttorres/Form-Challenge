import {React, useState } from "react";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import Image from "../../Assets/plus.png";
import ImageTwo from "../../Assets/right-arrow.png";
import Vetor from '../../Assets/Vector.png'
import { DivSelect, DivForAll, DivCertificates, DivOption, DivGeral, DivButton, DivError, DivMore} from "./Certificate.styled";

const Certificate = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [certificado, setCertificado] = useState({ certificado: "" });
  const [arrayCertificado, setArrayCertificado] = useState([]);
  const [viewOptions, setViewOptions] = useState('notView')
  const [viewError, setViewError] = useState('notView')
  const [viewCertificates, setViewCertificates] = useState('notView')

  const adding = () => {
    if(arrayCertificado.length<5 && certificado.certificado!=='')
      setArrayCertificado([...arrayCertificado, certificado]);
    if(certificado.certificado===''){
      setViewError('')
      setViewCertificates('notView')
    }
    else{
      setViewError('notView')
      setViewCertificates('')
    }
  };

  let stateOptions = 1

  const lookOptions = () => {
    if (stateOptions === 1){
      setViewCertificates('maior')
      setViewOptions('view')
      stateOptions = 0
    }
    else{
      setViewCertificates('')
      setViewOptions('notView')
      stateOptions = 1
    }
  }

  return (
    <>
      <Input type="text" errors={errors} id="certificate" label="Certificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" onChange={(e) => setCertificado({ certificado: e.target.value })} register={register}/>
      <DivForAll>
        <DivSelect>
          <DivCertificates className={viewCertificates} onClick={lookOptions}>Certificates <img src={Vetor}/></DivCertificates>
            {arrayCertificado.map((rdm, i) =>
              <DivGeral key={i} className={viewOptions}><DivOption>{rdm.certificado}</DivOption><DivButton>X</DivButton></DivGeral>
            )}
        </DivSelect>
        <DivMore onClick={adding}><img src={Image}/>More<img src={ImageTwo} /></DivMore>
      </DivForAll>
      <DivError className={viewError}><p>Empty certificate is not allowed.</p></DivError>
    </>
  );
};

export default Certificate;
