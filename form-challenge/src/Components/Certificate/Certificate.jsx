import {React, useState } from "react";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import Image from "../../Assets/plus.png";
import ImageTwo from "../../Assets/right-arrow.png";
import ImageSelect from '../../Assets/icons8-expand-arrow-50.png'
import { SelectCertificate, DivSelect, OptionStyle} from "./Certificate.styled";

const Certificate = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [certificado, setCertificado] = useState({ certificado: "" });
  const [arrayCertificado, setArrayCertificado] = useState([]);

  const adding = () => {
    if(arrayCertificado.length<5 && certificado.certificado!=='')
      setArrayCertificado([...arrayCertificado, certificado]);
  };

  return (
    <div>
      <Input type="text" id="certificate" label="Certificates" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" onChange={(e) => setCertificado({ certificado: e.target.value })} register={register}/>
      <DivSelect>
          <SelectCertificate className={"length"+arrayCertificado.length} name="select-certificates" id="select-certificates">
            {arrayCertificado.map((rdm, i) => 
              <OptionStyle key={i}>{rdm.certificado}</OptionStyle>
            )}
          </SelectCertificate>
        <Button id="more" image={Image} text="More" type="" imageTwo={ImageTwo} onClick={adding}/>
      </DivSelect>
    </div>
  );
};

export default Certificate;
