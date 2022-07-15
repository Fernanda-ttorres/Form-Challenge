import styled from "styled-components";

export const SelectCertificate = styled.select`
    &.length0{
        opacity: 0;
    }
    background-image: url('https://img.icons8.com/ios-filled/50/FFFFFF/expand-arrow--v1.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: 80%;
    cursor: pointer;
    padding-left: 20px;
    background: rgba(7, 78, 232, 0.8);
    min-width: 8.06rem;
    border: none;
    border-radius: 5px;
    height: 2.5rem;
    color: white;
    font-size: 1rem;
    max-width: 11.68rem;
    appearance: none;
    outline: none;
`;
export const DivSelect = styled.div`
    margin-top: 1.125rem;
    display: flex;
    justify-content: space-between;
`;

export const OptionStyle = styled.option`
    background: rgba(7, 78, 232, 0.8);
    color: white;
`;