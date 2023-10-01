import { RealtimeChannel } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import ClassroomSelected from "../../components/Classroom/Classroom_selected";
import { useClassroom } from "../../data/contexts";
import { Classroom } from "../../data/models/classroom";
import supabase from "../../data/services/supabase";
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
  const { blocks, getAllClassrooms, updateClassroomState } = useClassroom()
  const [subscription, setSubscription] = useState<RealtimeChannel | null>(null);

  useEffect(() => {
    getAllClassrooms()
  }, []);

  useEffect(() => {
    // Função para iniciar a assinatura
    const startSubscription = async () => {
      const newSubscription = supabase
        .channel('lock-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'Lock',
          },
          (payload: any) => {
            updateClassroomState(payload.new.classroom_id, payload.new.isClosed)
          }
        )
        .subscribe();

      setSubscription(newSubscription);
    };

    startSubscription();

    // Função de limpeza para desconectar a assinatura quando o componente for desmontado
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);


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
          </DropDown>
          <DropDown width="100px">
            <option>Todas</option>
          </DropDown>
        </WrapDropDowns>
      </HeaderRooms>
      <RoomsCardsContainer>
        <Title>Salas</Title>
        {blocks.map((classrooms, blockIndex) => (
          <RoomsCards key={`block-${blockIndex}`}>
            <CardsTitles>{`Bloco ${String.fromCharCode(65 + blockIndex)}`}</CardsTitles>
            <CardRoomTitle>Salas</CardRoomTitle>
            <WrapRooms>
              {classrooms.map((sala, index) => (
                <RoomsSquares
                  key={sala.id}
                  state={sala.lock != null ? sala.lock?.state : null}
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
       <ClassroomSelected handleDispose={handleDispose} block="D" classroom={selectedRoom} />
      )}
    </RoomsContainer>
  );
}
