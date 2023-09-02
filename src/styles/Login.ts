import styled from "styled-components";

export const HomeContainer = styled.div`
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

export const LoginForm = styled.div`
    display: flex;
    width: 45%;
    flex-direction: column;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;
`

export const LoginTitle = styled.h1`
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 42px;
    color: #2A5679;
    margin: 0;
`

export const LoginSubText = styled.h1`
    font-family: 'Montserrat';
    font-weight: 100;
    font-size: 25px;
    color: #2A5679;
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
    padding-top: 1.5rem;
    padding-bottom: 0.3rem;
    margin: 0;
    font-family: 'Montserrat';
    font-size: 11px;
    color: rgba(42, 86, 121, 0.8);
`

export const HideButton = styled.img`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width:30px;
    height:30px;
    /* padding-left: 670px; */
`

export const LoginInput = styled.input`
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

export const InputButtonDiv = styled.div`
    position: relative;
    width: 100%;
`

export const LoginButtonEnter = styled.button`
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

export const LoginButtonNew = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 0.5rem;
    background-color: white;
    border-color: rgba(42, 86, 121, 0.4);
    border-radius: 8px;
    cursor: pointer;
    color: #2A5679;
    font-family: 'Montserrat';
    font-weight: 500;
`

export const LoginForgot = styled.a`
    padding-top: 0.7rem;
    font-family: 'Montserrat';
    font-size: 12px;
    color: #2A5679;
    cursor: pointer;
`