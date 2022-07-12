import {Input} from '../Input/Input'
import { ContactDiv } from './Contact.styled';


export const Contact = ({register}) => {
    return (
        <ContactDiv>
           <Input id="form" type="email"  label="Email *" placeholder="foor@bar.com" register={register} />
           <Input id="form" type="tel"  label="Phone" placeholder="(83) 00000-0000" register={register} />
        </ContactDiv>
    );
};