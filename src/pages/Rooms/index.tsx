import { RealtimeChannel } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useClassroom } from "../../data/contexts";
import supabase from "../../data/services/supabase";
import {
  CardRoomTitle,
  CardsTitles,
  ClassAtMoment,
  ClassName,
  ClassTitle,
  ClassesDiv,
  DateStyle,
  DateTimeColumn,
  DisposeButton,
  DropDown,
  FirstRowOverlay,
  HeaderRooms,
  InformationColumn,
  NextCLassesTitle,
  OpenOrClosedTag,
  Overlay,
  OverlayMenu,
  OverlayTitle,
  RoomsCards,
  RoomsCardsContainer,
  RoomsContainer,
  RoomsSquares,
  SecondRow,
  SquareTexts,
  Squares,
  TimeStyle,
  Title,
  WrapDropDowns,
  WrapRooms,
  WrapSquares,
} from "../../styles/Rooms";



export default function Rooms() {
  const [sideOpt, setSideOpt] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(-1);
  const [selectedRoomColor, setSelectedRoomColor] = useState("");
  const { classroomsA, classroomsB, classroomsC, classroomsD, classroomsE, getAllClassrooms, updateClassroomState } = useClassroom()
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

    // Inicie a assinatura quando o componente for montado
    startSubscription();

    // Função de limpeza para desconectar a assinatura quando o componente for desmontado
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);


  const handleClick = (index: number, color: string) => {
    setSelectedRoom(index);
    setSelectedRoomColor(color);
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
        <RoomsCards>
          <CardsTitles>Bloco A</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            {classroomsA.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                state={sala.lock != null ? sala.lock?.state : null}
                onClick={() => handleClick(index, "#42BC37")}
              >
                {sala.name}
              </RoomsSquares>
            ))}
          </WrapRooms>
        </RoomsCards>
        <RoomsCards>
          <CardsTitles>Bloco B</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            {classroomsB.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                state={sala.lock != null ? sala.lock?.state : null}
                onClick={() => handleClick(index, "#42BC37")}
              >
                {sala.name}
              </RoomsSquares>
            ))}
          </WrapRooms>
        </RoomsCards>
        <RoomsCards>
          <CardsTitles>Bloco C</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            {classroomsC.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                state={sala.lock != null ? sala.lock?.state : null}
                onClick={() => handleClick(index, "#42BC37")}
              >
                {sala.name}
              </RoomsSquares>
            ))}
          </WrapRooms>
        </RoomsCards>
        <RoomsCards>
          <CardsTitles>Bloco D</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            {classroomsD.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                state={sala.lock != null ? sala.lock?.state : null}
                onClick={() => handleClick(index, "#42BC37")}
              >
                {sala.name}
              </RoomsSquares>
            ))}
          </WrapRooms>
        </RoomsCards>
        <RoomsCards>
          <CardsTitles>Bloco E</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            {classroomsE.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                state={sala.lock != null ? sala.lock?.state : null}
                onClick={() => handleClick(index, "#42BC37")}
              >
                {sala.name}
              </RoomsSquares>
            ))}
          </WrapRooms>
        </RoomsCards>
      </RoomsCardsContainer>
      {sideOpt && selectedRoom !== null && (
        <Overlay>
          <OverlayMenu>
            <FirstRowOverlay>
              <DisposeButton onClick={handleDispose}>
                <AiOutlineCloseCircle size={34} />
              </DisposeButton>
              <OpenOrClosedTag color={selectedRoomColor}>
                {selectedRoomColor === "#42BC37" ? "Aberta" : "Fechada"}
              </OpenOrClosedTag>
            </FirstRowOverlay>
            {selectedRoom + 102 <= 105 && (
              <OverlayTitle>Sala A{selectedRoom + 102}</OverlayTitle>
            )}
            {selectedRoom + 102 > 105 && selectedRoom + 102 < 110 && (
              <OverlayTitle>Sala B{selectedRoom + 102 - 4}</OverlayTitle>
            )}
            {selectedRoom + 102 >= 110 && selectedRoom + 102 < 115 && (
              <OverlayTitle>Sala C{selectedRoom + 102 - 8}</OverlayTitle>
            )}
            {selectedRoom + 102 > 115 && (
              <OverlayTitle>Sala D{selectedRoom + 102}</OverlayTitle>
            )}
            <SecondRow>
              <InformationColumn>
                <ClassAtMoment>Aula No Momento</ClassAtMoment>
                <ClassName>ProjetoIntegrador ll</ClassName>
              </InformationColumn>
              <InformationColumn>
                <ClassAtMoment>Professor</ClassAtMoment>
                <ClassName>Helen De Freitas</ClassName>
              </InformationColumn>
            </SecondRow>
            <NextCLassesTitle>Próximas aulas nessa sala</NextCLassesTitle>
            <ClassesDiv>
              <ClassTitle>PPJE6</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>16:00 - 17:15</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
            <ClassesDiv>
              <ClassTitle>MDAE9</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>18:00 - 19:00</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
            <ClassesDiv>
              <ClassTitle>POOE6</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>20:00 - 21:00</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
            <NextCLassesTitle>Últimos acessos</NextCLassesTitle>
            <ClassesDiv>
              <ClassTitle>PPJE6</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>16:00 - 17:15</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
            <ClassesDiv>
              <ClassTitle>MDAE9</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>18:00 - 19:00</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
          </OverlayMenu>
        </Overlay>
      )}
    </RoomsContainer>
  );
}
