import {Input} from '../Input/Input'
import { ContactDiv } from './Contact.styled';


export const Contact = ({register, errors, text}) => {
    return (
        <ContactDiv>
           <Input id="email" type="email" errors={errors} text={text} label="Email *" placeholder="foor@bar.com" register={register} />
           <Input id="phone" type="tel" errors={errors} text={text}  label="Phone" placeholder="(83) 00000-0000" register={register} />
        </ContactDiv>
    );
};