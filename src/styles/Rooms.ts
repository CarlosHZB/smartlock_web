import styled from "styled-components";

export const RoomsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 78%;
    background-color: #D2D9DE;
`

export const HeaderRooms = styled.div`
    display: flex;
    flex-direction: row;
    height: 90px;
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
   height: 35px;
   width: 35px;
   border-radius: 7px;
   border: none;
`

export const SquareTexts = styled.h1`
    color: white;
    font-family: 'Montserrat';
    font-size: 18px;
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
    font-size: 16px;
    text-align: center;
    width: ${(props) => props.width};
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 100;

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
    height: 110px;
    border-radius: 5px;
    margin-bottom: 35px;
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
`

interface RoomSquareProps {
    color: string;
}

export const RoomsSquares = styled.div<RoomSquareProps>`
   display: flex;
   margin-left: 1.2rem;
   background-color: ${(props) => props.color};
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
`
