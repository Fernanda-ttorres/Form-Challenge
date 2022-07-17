import {Input} from '../Input/Input'
import {NamesDiv} from './Name.styled'

export const Names = ({register, errors, text}) => {
    return (
        <NamesDiv>
           <Input id="fullname" type="text" errors={errors} text={text} label="Full Name *" placeholder="Foor Bar" register={register} />
           <Input id="nickname" type="text" errors={errors} text={text} label="Nickname" placeholder="Juanito" register={register} />
        </NamesDiv>
    );
};