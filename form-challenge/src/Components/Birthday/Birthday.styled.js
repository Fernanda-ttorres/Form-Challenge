import styled from "styled-components";

export const BirthStyled = styled.div`
    display: flex;
    width: 32.2rem;
    justify-content: space-between;
    div{
        display: flex;
        flex-direction: column;
    } 
    select{
        margin-top: 4px;
        cursor: pointer;
        font-size: 16px;
        padding-left: 10px;
        border: 2px solid #AAAAAA;
        border-radius: 4px;
        width: 115px;
        height: 40px;
        background-image: url('https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png');
        background-size: 0.95rem;
        background-repeat: no-repeat;
        background-position: 85%;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    input{
        margin-top: 4px;
        font-size: 16px;
        padding-left: 10px;
        border: 2px solid #AAAAAA;
        border-radius: 4px;
        width: 101px;
        height: 40px;
    }
`;