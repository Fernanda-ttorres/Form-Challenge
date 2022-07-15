import React from "react";
import Button from "../Button/Button";

export const B = ({unLock}) => {
  return (
    <div className="form">
      <img src="https://image.shutterstock.com/image-photo/golden-labrador-retriever-puppy-funny-600w-605379773.jpg" />
      <div className="button-div">
        <Button id="next" text={"Next"} pageState={2} />
      </div>
    </div>
  );
};

export default B;
