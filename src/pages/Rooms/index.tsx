import { useState } from "react";
import ClassroomSelected from "../../components/Classroom/Classroom_selected";
import LoadingBlocksSkeleton from "../../components/Skeletons/LoadingBlocksSkeleton";
import { useClassroom } from "../../data/contexts";
import { Classroom } from "../../data/models/classroom";
import {
  CardRoomTitle,
  CardsTitles,
  DropDown,
  HeaderRooms,
  RoomsCards,
  RoomsCardsContainer,
  RoomsContainer,
  RoomsSquares,
  SquareTexts,
  Squares,
  Title,
  WrapDropDowns,
  WrapRooms,
  WrapSquares
} from "../../styles/Rooms";



export default function Rooms() {
  const [sideOpt, setSideOpt] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Classroom | null>(null);
  const { loading, blocks } = useClassroom()


  const handleClick = (classroom: Classroom) => {
    setSelectedRoom(classroom);
    setSideOpt(true);
  };

  const handleDispose = () => {
    setSideOpt(false);
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
            <option>Bloco A</option>
            <option>Bloco B</option>
            <option>Bloco C</option>
            <option>Bloco D</option>
            <option>Bloco E</option>
          </DropDown>
          <DropDown width="150px">
            <option>Todas</option>
            <option>Abertas</option>
            <option>Fechadas</option>
          </DropDown>
        </WrapDropDowns>
      </HeaderRooms>
      <RoomsCardsContainer>
        <Title>Salas</Title>
        {loading ? (
          <>
            <LoadingBlocksSkeleton />
            <LoadingBlocksSkeleton />
            <LoadingBlocksSkeleton />
            <LoadingBlocksSkeleton />
            <LoadingBlocksSkeleton />
          </>) :
          blocks.map((block) => (
            <RoomsCards key={`block-${block.name}`}>
              <CardsTitles>{`Bloco ${block.name}`}</CardsTitles>
              <CardRoomTitle>Salas</CardRoomTitle>
              <WrapRooms>
                {block.classrooms.map((sala) => (
                  <RoomsSquares
                    key={sala.id}
                    state={sala.lock != null ? sala.lock?.state : null }

                    
                    onClick={() => handleClick(sala)}
                  >
                    {sala.name}
                  </RoomsSquares>
                ))}
              </WrapRooms>
            </RoomsCards>
          ))}
      </RoomsCardsContainer>
      {sideOpt && selectedRoom !== null && (
        <ClassroomSelected handleDispose={handleDispose} block={selectedRoom.block} classroom={selectedRoom} />
      )}
    </RoomsContainer>
  );
}
