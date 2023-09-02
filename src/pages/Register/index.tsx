import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, InputInfo, LeftBlock, LoginImg, RegisterButtonEnter, RegisterContainer, RegisterForm, RegisterInput, RegisterSubText, RegisterTitle } from "../../styles/Register";
import LOGINIMG from "../../assets/img/loginImg.png";
import { api } from "../../services/api";
import { LOGIN } from "../../core/app-urls";

export default function Register() {
  const history = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    code: "",
    userTypeId: "2ba79091-5909-49d0-a38f-09d247bcef8b", // Defina o userTypeId conforme necessário
  });

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const response = await fetch(`${api}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Conta criada com sucesso!");
        // Redirecionar para a página de login após o registro bem-sucedido.
        history(LOGIN);
      } else {
        // Lidar com erros de registro, por exemplo, exibir uma mensagem de erro.
        console.error("Erro ao criar conta:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao criar conta:", error);
    }
  };

  return (
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
          <RegisterInput
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <InputInfo>Prontuário</InputInfo>
          <RegisterInput
            type="text"
            name="code"
            value={userData.code}
            onChange={handleInputChange}
          />
          <InputInfo>Email</InputInfo>
          <RegisterInput
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
          <InputInfo>Senha</InputInfo>
          <RegisterInput
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <RegisterButtonEnter onClick={handleRegister}>Criar conta</RegisterButtonEnter>
        </FormContainer>
      </RegisterForm>
    </RegisterContainer>
  );
}
