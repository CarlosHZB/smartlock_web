import { useNavigate } from "react-router-dom";
import { HOMELOGGED, REGISTER } from "../../core/app-urls";
import { FormContainer, HomeContainer, InputInfo, LeftBlock, LoginButtonEnter, LoginButtonNew, LoginForgot, LoginForm, LoginImg, LoginInput, LoginSubText, LoginTitle } from "../../styles/Login";
import LOGINIMG from "../../assets/img/loginImg.png";

export default function Login(){
    const history = useNavigate()
    return(
        <HomeContainer>
            <LeftBlock>
                <LoginImg src={LOGINIMG} alt=""></LoginImg>
            </LeftBlock>
            <LoginForm>
                <LoginTitle>Bem vindo(a),</LoginTitle>
                <LoginSubText>possui alguma</LoginSubText>
                <LoginSubText>conta registrada?</LoginSubText>
                <FormContainer>
                    <InputInfo>Prontuário</InputInfo>
                    <LoginInput></LoginInput>
                    <InputInfo>Senha</InputInfo>
                    <LoginInput></LoginInput>
                    <LoginButtonEnter onClick={() => history(HOMELOGGED)}>Entrar</LoginButtonEnter>
                    <LoginButtonNew onClick={() => history(REGISTER)}>Criar uma conta</LoginButtonNew>
                    <LoginForgot>Esqueci minha senha</LoginForgot>
                </FormContainer>
            </LoginForm>
        </HomeContainer>
    );
}