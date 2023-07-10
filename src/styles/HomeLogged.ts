import styled from "styled-components";

export const HomeLoggedContainer = styled.div`
    height: 100vh;
    flex-direction: row;
    display: flex;
`

export const LeftDrawer = styled.div`
    display: flex;
    flex-direction: column;
    width: 22%;
    height: 100vh;
    background-color: #2A5679;
    justify-content: flex-start;
`

export const DrawerTitle = styled.h1`
    padding-top: 0.7rem;
    padding-left: 2rem;
    padding-bottom: 0.5rem;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 20px;
    color: white;
`


export const DrawerButtons = styled.button`
    display: flex;
    margin-top: 0.7rem;
    margin-left: 1rem;
    width: 80%;
    border: none;
    padding: 12px;
    background-color: transparent;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Montserrat';
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    opacity: 0.8;

    &:hover {
        color: #EF835F;
        transform: scale(1.05);
        background-color: #26323899;
        cursor: pointer;
    }

    &.active {
        color: #EF835F;
        transform: scale(1.05);
        background-color: #26323899;
    }
`
export const LogoutButton = styled.button`
    margin-top: auto;
    margin-left: 1rem;
    margin-bottom: 1rem;
    display: flex;
    width: 80%;
    border: none;
    padding: 12px;
    background-color: transparent;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Montserrat';
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;

    &:hover {
        color: #EF835F;
        transform: scale(1.05);
        background-color: #26323899;
        cursor: pointer;
    }
`

export const UserInfoContainer = styled.div`
    flex-direction: row;
    display: flex;
    margin-left: 1.8rem;
    align-items: center;
    color: white;
    margin-bottom: 1rem;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

export const UserName = styled.h1`
    color: white;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 18px;
    margin: 0;
`

export const UserId = styled.h1`
    color: white;
    font-family: 'Montserrat';
    font-weight: 100;
    font-size: 15px;
    margin: 0;
`