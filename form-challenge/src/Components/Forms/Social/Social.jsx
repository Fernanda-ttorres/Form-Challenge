import { useForm } from  "react-hook-form";
import {Input} from '../../Input/Input';
import { SocialForm, DivBtn, Test } from "./Social.styled";
import Button from '../../Button/Button';

const Social = () => {
    const { register, handleSubmit, formState: { errors }, reset } =  useForm();
    return (
        <SocialForm>
            <Test>NavBar</Test>
            <Input id="linkedin" label="LindedIn" type="text" placeholder="https//www.linkedin.com/in/foo-bar-3a0560104/" register={register} />
            <Input id="github" label="Github *" type="text" placeholder="http://github.com/foobar" register={register} />
            <DivBtn>
                <Button nameDiv="next" id="next" type="submit"  text="Next" />
            </DivBtn>
        </SocialForm>
    );
};

export default Social