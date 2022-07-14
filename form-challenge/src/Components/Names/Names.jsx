import {Input} from '../Input/Input'
import {NamesDiv} from './Name.styled'

export const Names = ({register}) => {
    return (
        <NamesDiv>
           <Input id="fullname" type="text"  label="Full Name *" placeholder="Foor Bar" register={register} />
           <Input id="nickname" type="text"  label="Nickname" placeholder="Juanito" register={register} />
        </NamesDiv>
    );
};