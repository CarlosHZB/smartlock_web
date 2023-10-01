import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import showPasswordImg from "../../assets/img/hide.svg";
import LOGINIMG from "../../assets/img/loginImg.png";
import hidePasswordImg from "../../assets/img/show.svg";
import { HOMELOGGED, REGISTER } from "../../core/app-urls";
import { useUser } from "../../data/contexts/auth";
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


export default function Login() {
  const history = useNavigate();

  const {  } = useUser()
  const [isRevealPassword, setIsRevealPassword] = useState(false);
  const [loading, setLoading] = useState(false);
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
      // const data = await userContext.
  
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
        <LoginImg src={LOGINIMG} alt="Logo"></LoginImg>
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
