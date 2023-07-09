import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
`

export const LeftBlock = styled.div`
    display: flex;
    width: 55%;
    height: 100vh;
    background-color: #2A5679;
    justify-content: center;
    align-items: center;
`

export const LoginImg = styled.img`
    height: 80%;
`

export const RegisterForm = styled.div`
    display: flex;
    width: 45%;
    flex-direction: column;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;
`

export const RegisterTitle = styled.h1`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 42px;
    color: #2A5679;
    margin: 0;
`

export const RegisterSubText = styled.h1`
    font-family: 'Montserrat';
    font-weight: 100;
    font-size: 20px;
    color: #2A5679;
    padding-bottom: 0.5rem;
    margin: 0;
`

export const FormContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const InputInfo = styled.p`
    padding-top: 0.7rem;
    padding-bottom: 0.3rem;
    margin: 0;
    font-family: 'Montserrat';
    font-size: 11px;
    color: rgba(42, 86, 121, 0.8);
`

export const RegisterInput = styled.input`
    width: 94%;
    padding: 15px;
    /* margin-top: 2.5rem; */
    background-color: white;
    border-color: rgba(42, 86, 121, 0.4);
    border-radius: 5px;
    font-family: 'Montserrat';
    font-weight: 500 ;
    color: #2A5679;
`


export const RegisterButtonEnter = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 2rem;
    background-color: #2A5679;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-family: 'Montserrat';
    font-weight: 500;
`
