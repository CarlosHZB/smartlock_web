import styled from "styled-components";

export const AlertsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 12px;

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
    width: 80%;
    border-radius: 12px;
    padding: 8px 12px;
    background-color: #2A5679;
    color: #FFFFFF;
`