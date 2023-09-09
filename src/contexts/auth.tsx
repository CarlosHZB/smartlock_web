import { api } from "../services/api";

export const loginUser = async (userData: any) => {
    try {
      const response = await fetch(`${api}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data; 
      } else {
        throw new Error("Erro ao fazer login");
      }
    } catch (error) {
      throw error;
    }
  };