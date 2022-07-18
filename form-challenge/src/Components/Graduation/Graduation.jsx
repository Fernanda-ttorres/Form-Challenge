import {Input} from '../Input/Input'
import { GraduationDiv } from './Graduation.styled';

export const Graduation = ({register, errors, text}) => {
    return (
        <GraduationDiv>
           <Input id="team" type="text" errors={errors} text={text}  label="Team Name *" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" register={register} />
           <Input id="institution" type="text" errors={errors} text={text}  label="Institution *" placeholder="Universidade Federal da Paraíba" register={register} />
           <Input id="graduation" type="text" errors={errors} text={text}  label="Graduation *" placeholder="Ciências da Computação" register={register} />
        </GraduationDiv>
    );
};