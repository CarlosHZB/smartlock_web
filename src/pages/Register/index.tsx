import { FormContainer, InputInfo, LeftBlock, LoginImg, RegisterButtonEnter, RegisterContainer, RegisterForm, RegisterInput, RegisterSubText, RegisterTitle } from "../../styles/Register";
import LOGINIMG from "../../assets/img/loginImg.png";

export default function Register(){
    return(
        <RegisterContainer>
            <LeftBlock>
                <LoginImg src={LOGINIMG}></LoginImg>
            </LeftBlock>
            <RegisterForm>
                <RegisterTitle>Criar nova conta</RegisterTitle>
                <RegisterSubText>Crie uma nova conta para acessar o</RegisterSubText>
                <RegisterSubText>Smartlock Dashboard do IFSP Birigui</RegisterSubText>
                <FormContainer>
                    <InputInfo>Nome completo</InputInfo>
                    <RegisterInput></RegisterInput>
                    <InputInfo>Prontuário</InputInfo>
                    <RegisterInput></RegisterInput>
                    <InputInfo>Email</InputInfo>
                    <RegisterInput></RegisterInput>
                    <InputInfo>Telefone</InputInfo>
                    <RegisterInput></RegisterInput>
                    <InputInfo>Senha</InputInfo>
                    <RegisterInput></RegisterInput>
                    <RegisterButtonEnter>Criar conta</RegisterButtonEnter>
                </FormContainer>
            </RegisterForm>
        </RegisterContainer>
    );
}