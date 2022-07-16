import React from "react";
import Button from "../Button/Button";

export const C = ({unLock}) => {

  const unLockNav = () => {
    unLock(0)
  }

  return (
    <div className="form">
      <img src="https://image.shutterstock.com/image-photo/labrador-three-colour-puppies-black-600w-1685673742.jpg" />
      <div className="button-div">
        <Button id="next" text={"Finish"} pageState={3} unLockNav={unLockNav}/>
      </div>
    </div>
  );
};

export default C;
