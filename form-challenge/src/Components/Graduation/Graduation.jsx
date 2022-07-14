import {Input} from '../Input/Input'
import { GraduationDiv } from './Graduation.styled';

export const Graduation = ({register}) => {
    return (
        <GraduationDiv>
           <Input id="team" type="text"  label="Team Name *" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" register={register} />
           <Input id="institution" type="text"  label="Institution *" placeholder="Universidade Federal da Paraíba" register={register} />
           <Input id="graduation" type="text"  label="Graduation *" placeholder="Ciências da Computação" register={register} />
        </GraduationDiv>
    );
};