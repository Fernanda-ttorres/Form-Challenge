import styled from "styled-components";

export const DivForAll = styled.div`
    margin-top: 1.125rem;
    display: flex;
    justify-content: space-between;
`;

export const DivSelect = styled.div`
    display: flex;
    flex-direction: column;
    .notView{
        display: none;
    }
`;

export const DivOption = styled.div`
    padding-left: 8px;
    display: flex;
    align-items: center;
    background: rgba(7, 78, 232, 0.7);
    color: #ECEEF2;
    font-size: 11px;
    height: 100%;
    position: relative;
    bottom: 3px;
    width: 80%;
`;

export const DivGeral = styled.div`
    width: 205px;
    height: 20px;
    position: relative;
    border-radius: 4px;
    display: flex;
`;

export const DivButton = styled.div`
    height: 100%;
    position: relative;
    bottom: 3px;
    background: rgba(7, 78, 232, 0.7);
`;