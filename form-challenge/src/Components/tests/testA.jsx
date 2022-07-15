import React from "react";
import Button from "../Button/Button";

export const A = ({unLock}) => {
 
  const unLockNav = () => {
    unLock(1)
  }


  return (
    <div className="form">
      <img src="https://image.shutterstock.com/image-photo/small-havanese-dog-portrait-garden-600w-1120762775.jpg" />
      <div className="button-div">
        <Button id="next" text={"Next"} pageState={1} unLockNav={unLockNav}/>
      </div>
    </div>
  );
};

export default A;
