import { useState } from "react";
import {
  CardRoomTitle,
  CardsTitles,
  DropDown,
  HeaderRooms,
  Overlay,
  RoomsCards,
  RoomsCardsContainer,
  RoomsContainer,
  RoomsSquares,
  SquareTexts,
  Squares,
  Title,
  WrapDropDowns,
  WrapRooms,
  WrapSquares,
} from "../../styles/Rooms";

export default function Rooms() {
  const [sideOpt, setSideOpt] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedRoom(index);
    setSideOpt(true);
  };

  return (
    <RoomsContainer>
      <HeaderRooms>
        <WrapSquares>
          <Squares color="#42BC37" />
          <SquareTexts>Aberto</SquareTexts>
          <Squares color="#EF835F" />
          <SquareTexts>Fechado</SquareTexts>
        </WrapSquares>
        <WrapDropDowns>
          <DropDown width="200px">
            <option>Todos os blocos</option>
          </DropDown>
          <DropDown width="100px">
            <option>Todas</option>
          </DropDown>
        </WrapDropDowns>
      </HeaderRooms>
      <RoomsCardsContainer>
        <Title>Salas</Title>
        <RoomsCards>
          <CardsTitles>Bloco A</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            <RoomsSquares color="#42BC37" onClick={() => handleClick(0)}>
              102
            </RoomsSquares>
            <RoomsSquares color="#EF835F" onClick={() => handleClick(1)}>
              103
            </RoomsSquares>
            <RoomsSquares color="#42BC37" onClick={() => handleClick(2)}>
              104
            </RoomsSquares>
            <RoomsSquares color="#EF835F" onClick={() => handleClick(3)}>
              105
            </RoomsSquares>
          </WrapRooms>
        </RoomsCards>
        <RoomsCards>
          <CardsTitles>Bloco B</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            <RoomsSquares color="#42BC37" onClick={() => handleClick(4)}>
              102
            </RoomsSquares>
            <RoomsSquares color="#EF835F" onClick={() => handleClick(5)}>
              103
            </RoomsSquares>
            <RoomsSquares color="#42BC37" onClick={() => handleClick(6)}>
              104
            </RoomsSquares>
            <RoomsSquares color="#EF835F" onClick={() => handleClick(7)}>
              105
            </RoomsSquares>
          </WrapRooms>
        </RoomsCards>
        <RoomsCards>
          <CardsTitles>Bloco C</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            <RoomsSquares color="#42BC37" onClick={() => handleClick(8)}>
              102
            </RoomsSquares>
            <RoomsSquares color="#EF835F" onClick={() => handleClick(9)}>
              103
            </RoomsSquares>
            <RoomsSquares color="#42BC37" onClick={() => handleClick(10)}>
              104
            </RoomsSquares>
            <RoomsSquares color="#EF835F" onClick={() => handleClick(11)}>
              105
            </RoomsSquares>
          </WrapRooms>
        </RoomsCards>
      </RoomsCardsContainer>
      {sideOpt && selectedRoom !== null && (
        <Overlay>
          <h3>Sala {selectedRoom + 102}</h3>
          
        </Overlay>
      )}
    </RoomsContainer>
  );
}
