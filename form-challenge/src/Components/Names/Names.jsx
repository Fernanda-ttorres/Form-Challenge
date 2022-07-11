import {Input} from '../Input/Input'
import {NamesDiv} from './Name.styled'

export const Names = ({register}) => {
    return (
        <NamesDiv>
           <Input id="form" type="text"  label="Full Name *" placeholder="Foor Bar" register={register} />
           <Input id="form" type="text"  label="Nickname" placeholder="Juanito" register={register} />
        </NamesDiv>
    );
};