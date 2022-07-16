import React from "react";
import Button from "../Button/Button";
import { Names } from "../Names/Names";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AuthContext } from "../Containers/Page/Page";

export const A = ({unLock}) => {

  const schema = yup.object({
    fullname: yup.string().required(),
    nickname: yup.string(),
  }).required();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { name } = React.useContext(AuthContext); //page authcontext
  const [page,setPage] = name; //page state

  let pageState;
  const onSubmit = data => {
    pageState=1;
    setPage(pageState)
    unLock(1)
    console.log(data);
  }

  return (
    <div className="form">
      <form id="firstForm" onSubmit={handleSubmit(onSubmit)}>
      <Names register={register} errors={errors} text="Please enter your Name" />
      </form>
      <div className="button-div">
        <Button form="firstForm" id="next" text={"Next"} unLock={unLock}/>
      </div>
    </div>
  );
};

export default A;
