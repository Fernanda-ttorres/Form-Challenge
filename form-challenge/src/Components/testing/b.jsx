import Button from "./button";
function B({fun}) {

  
  return (
    
    <div>
        <img src="https://image.shutterstock.com/image-photo/american-staffordshire-terrier-puppies-sitting-600w-1048123303.jpg" />
        <Button text={"NEXT"} page={3}  fun={fun}/>
    </div>
  );
}

export default B;
