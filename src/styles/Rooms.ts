import styled from "styled-components";

export const RoomsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    background-color: #D2D9DE;
`

export const HeaderRooms = styled.div`
    display: flex;
    flex-direction: row;
    height: 8vh;
    background-color: #263238;
    align-items: center;
`

export const WrapSquares = styled.div`
    display: flex;
    margin-right: auto;
    flex-direction: row;
    align-items: center;
`

export const WrapDropDowns = styled.div`
    display: flex;
    margin-left: auto;
    flex-direction: row;
    align-items: center;
`

interface SquareProps {
    color: string;
}

export const Squares = styled.div<SquareProps>`
   margin-left: 3rem;
   background-color: ${(props) => props.color};
   height: 30px;
   width: 30px;
   border-radius: 5px;
   border: none;
`

export const SquareTexts = styled.h1`
    color: white;
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 100;
    margin-left: 0.5rem;
`

interface DropProps {
    width: string;
}

export const DropDown = styled.select<DropProps>`
    margin-right: 3rem;
    background-color: #F2F8FD;
    border: none;
    border-radius: 6px;
    padding: 8px;
    text-align: start;
    width: ${(props) => props.width};
    font-family: 'Montserrat';
    font-size: 16px;
    font-weight: 300;

    option {
    &:hover {
      background-color: #42BC37;
      color: white;
    }
  }
`

export const RoomsCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    height: 92vh;
    overflow: scroll;
    overflow-x: hidden;
`

export const Title = styled.h1`
    color: #263238;
    font-family: 'Montserrat';
    font-size: 25px;
    font-weight: 700;
`

export const RoomsCards = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F2F8FD;
    width: 95%;
    border-radius: 5px;
    margin-bottom: 35px;
    padding-bottom: 1rem;
`

export const CardsTitles = styled.h1`
    color: #263238;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 700;
    margin-left: 1rem;
`

export const CardRoomTitle = styled.h1`
    margin-top: 0;
    color: #263238;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 500;
    margin-left: 1rem;
`

export const WrapRooms = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
`

interface RoomSquareProps {
    state: boolean | null;
}

export const RoomsSquares = styled.button<RoomSquareProps>`
    display: flex;
    margin-left: 1.2rem;
    background-color: ${(props) => props.state != null ? props.state ? "#EF835F" : "#42BC37" : "#797979"};
    height: 38px;
    width: 38px;
    border-radius: 5px;
    border: none;
    color: white;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;
`

export const Overlay = styled.div`
    position: fixed;
    top: 90px;
    right: 50px;
    width: 38%;
    height: 100%;
    /* background-color: rgba(0, 0, 0, 0.8); */
    background-color: #D2D9DE;
    /* z-index: 999; */
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const OverlayMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 85px;
    margin-left: 30px;
    width: 90%;
    height: 70%;
    background-color: #F2F8FD;
    border-radius: 10px;
`

export const FirstRowOverlay = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
    width: 95%;
`

export const DisposeButton = styled.button`
    border: none;
    background-color: transparent;
    margin-left: 8px;
    margin-top: 8px;
    cursor: pointer;
`

interface OpenOrClosedTagProps {
    color: string;
}

export const OpenOrClosedTag = styled.span<OpenOrClosedTagProps>`
    display: flex;
    background-color: ${(props) => props.color};
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 2px 8px; 
    width: 50px; 
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 100;
`

export const OverlayTitle = styled.h1`
    padding-left: 18px;
    font-family: 'Montserrat';
    font-size: 30px;
    font-weight: 700;
    color: #263238;
`

export const SecondRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
`

export const InformationColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const ClassAtMoment = styled.h1`
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 100;
    color: #2A567966;
`

export const ClassName = styled.h1`
    margin-top: 0;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: #2A5679;
`

export const NextCLassesTitle = styled.p`
    padding-top: 2px;
    margin-left: 20px;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: #263238;
`

export const LastAccess = styled.div`
    height: 60%;
    overflow: scroll;
    overflow-x: hidden;

    /* This targets Webkit-based browsers (e.g., Chrome, Safari) */
    /* You can add similar rules for Firefox and other browsers if needed */
    &::-webkit-scrollbar {
        width: 8px; /* Adjust the width as needed */
        background-color: transparent; /* Sets the scroll bar background to transparent */
    }

    &::-webkit-scrollbar-thumb {
        background-color: #2A5679; /* Sets the scroll bar indicator color to blue */
        border-radius: 5px; /* Adds rounded corners to the indicator */
    }

    /* Optional: To style the track (the area behind the indicator) */
    &::-webkit-scrollbar-track {
        background: transparent; /* You can adjust this as needed */
    }

`

export const ClassesDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 25px;
    margin-bottom: 7px;
    background-color: #F2F8FD;
    border: 1px solid #2A567999;
    border-radius: 5px;
    height: 35px;
    width: 90%;
`

export const ClassTitle = styled.h1`
    margin-left: 12px;
    font-family: 'Montserrat';
    font-size: 15px;
    font-weight: 500;
    color: #2A5679;
`

export const DateTimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 12px;
`

export const DateStyle = styled.h1`
    margin-bottom: 0;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 100;
    color: #2A567999;
`

export const TimeStyle = styled.h1`
    margin-top: 0;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 700;
    color: #2A567999;
` 