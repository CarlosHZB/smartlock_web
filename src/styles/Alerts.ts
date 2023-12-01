import styled from "styled-components";

export const AlertsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    overflow: scroll;
    overflow-x: hidden;
    padding-bottom: 15px;
    padding-right: 15px;

    scrollbar-width: thin;
    scrollbar-color: transparent transparent; /* Define a cor da barra de rolagem e a cor do fundo da barra de rolagem */
    
    /* Adicione a seguinte regra para navegadores baseados em WebKit (como o Chrome e o Safari) */
    &::-webkit-scrollbar {
        width: 12px; /* Largura da barra de rolagem */
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent; /* Cor da barra de rolagem */
    }
    
    p {
    }

`

export const AlertMessage = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 8px;
    margin-bottom: 8px;
`

export const AlertCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    border-radius: 12px;
    padding: 8px 12px;
    background-color: #2A5679;
    color: #FFFFFF;
`