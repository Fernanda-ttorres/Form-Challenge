import React from "react";
import Button from "../Button/Button";

export const Sucess = ({unLock}) => {

    const unLockNav = () => {
        unLock(0)
      }

  return (
    <div className="form">
      <img src="https://image.shutterstock.com/image-photo/white-jack-russell-terrier-puppy-600w-757946224.jpg" />
      <div className="button-div">
        <Button id="next" text={"Return"} pageState={0} unLockNav={unLockNav}/>
      </div>
    </div>
  );
};

export default Sucess;
