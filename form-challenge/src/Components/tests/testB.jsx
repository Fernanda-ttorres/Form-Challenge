import React from "react";
import Button from "../Button/Button";

export const B = ({unLock}) => {

  const unLockNav = () => {
    unLock(2)
  }


  return (
    <div className="form">
      <img src="https://image.shutterstock.com/image-photo/golden-labrador-retriever-puppy-funny-600w-605379773.jpg" />
      <div className="button-div">
        <Button id="next" text={"Next"} pageState={2} unLockNav={unLockNav}/>
      </div>
    </div>
  );
};

export default B;
