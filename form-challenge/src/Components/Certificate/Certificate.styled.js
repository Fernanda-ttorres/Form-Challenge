import styled from "styled-components";

export const DivForAll = styled.div`
    margin-top: 1.125rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const DivSelect = styled.div`
    display: flex;
    flex-direction: column;
    .notView{
        display: none;
    }
`;

export const DivMore = styled.div`
    img{
        width: 12px;
        margin: 0;
    }
    display: flex;
    background-color: #074EE8;
    color: white;
    border: none;
    border-radius: 0.3125rem;
    width: 6.81rem;
    height: 2.5rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
`;

export const DivError = styled.div`
    width: 100%;
    &.notView{
        opacity: 0;
    }
    text-align: right;
    p{
        margin: 2px 0;
        color: red;
        font-size: 1rem;
        font-weight: 400;
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
    width: 85.2%;
`;

export const DivCertificates = styled.div`
    &.notView{
        opacity: 0;
        cursor: auto;
    }
    &.maior{
        width: 187px;
    }
    img{
        margin: 0;
    }
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    width: 129px;
    background-color: #074EE8;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    gap: 12%;
`;

export const DivGeral = styled.div`
    width: 205px;
    height: 20px;
    position: relative;
    border-radius: 4px;
    display: flex;
    z-index: 1;
`;

export const DivButton = styled.div`
    cursor: pointer;
    font-size: 11px;
    color: white;
    height: 100%;
    position: relative;
    bottom: 3px;
    background: rgba(7, 78, 232, 0.7);
    padding-top: 4px;
    padding-right: 5px;
`;