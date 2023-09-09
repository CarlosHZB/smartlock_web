import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOMELOGGED, REGISTER } from "../../core/app-urls";
import {
  FormContainer,
  HideButton,
  HomeContainer,
  InputButtonDiv,
  InputInfo,
  LeftBlock,
  LoginButtonEnter,
  LoginButtonNew,
  LoginForgot,
  LoginForm,
  LoginImg,
  LoginInput,
  LoginSubText,
  LoginTitle,
} from "../../styles/Login";
import LOGINIMG from "../../assets/img/loginImg.png";
import showPasswordImg from "../../assets/img/hide.svg";
import hidePasswordImg from "../../assets/img/show.svg";
import { loginUser } from "../../contexts/auth";
import { CircularProgress } from "@mui/material";


export default function Login() {
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const [userData, setUserData] = useState({
    code: "",
    password: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };


  const handleLogin = async () => {
    try {
      setLoading(true);
      const data = await loginUser(userData);
  
      // Salvar o token de autenticação em localStorage ou sessionStorage.
  
      history(HOMELOGGED);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
    setLoading(false);
  };

  return (
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
          <LoginInput
            type="text"
            name="code"
            value={userData.code}
            onChange={handleInputChange}
          />
          <InputInfo>Senha</InputInfo>
          <InputButtonDiv>
            <LoginInput
              type={isRevealPassword ? "text" : "password"}
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <HideButton
              title={isRevealPassword ? "Hide password" : "Show password"}
              src={isRevealPassword ? hidePasswordImg : showPasswordImg}
              onClick={() => setIsRevealPassword((prevState) => !prevState)}
            />
          </InputButtonDiv>
          <LoginButtonEnter onClick={handleLogin}>
              {loading ? <CircularProgress size={20} color="inherit" /> : 'Entrar'}
          </LoginButtonEnter>
          <LoginButtonNew onClick={() => history(REGISTER)}>
            Criar uma conta
          </LoginButtonNew>
          <LoginForgot>Esqueci minha senha</LoginForgot>
        </FormContainer>
      </LoginForm>
    </HomeContainer>
  );
}
