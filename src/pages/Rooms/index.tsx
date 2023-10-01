import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Sala, getRoomsByBlock } from "../../data/contexts/rooms";
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
  const [blockBSalas, setBlockBSalas] = useState<Sala[]>([]);
  const [blockCSalas, setBlockCSalas] = useState<Sala[]>([]);
  const [blockDSalas, setBlockDSalas] = useState<Sala[]>([]);
  const [blockESalas, setBlockESalas] = useState<Sala[]>([]);

  useEffect(() => {
    getRoomsByBlock("B")
      .then((data: Sala[]) => {
        setBlockBSalas(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar salas do bloco B:", error);
      });
  }, []);

  useEffect(() => {
    getRoomsByBlock("C")
      .then((data: Sala[]) => {
        setBlockCSalas(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar salas do bloco B:", error);
      });
  }, []);

  useEffect(() => {
    getRoomsByBlock("D")
      .then((data: Sala[]) => {
        setBlockDSalas(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar salas do bloco B:", error);
      });
  }, []);

  useEffect(() => {
    getRoomsByBlock("E")
      .then((data: Sala[]) => {
        setBlockESalas(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar salas do bloco B:", error);
      });
  }, []);



  useEffect(() => {
    const subscription = supabase
      .channel('any')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'Lock' }, payload => {
        console.log('Change received!', payload)
      })
      .subscribe()

    // Certifique-se de cancelar a assinatura quando o componente for desmontado
    return () => {
      subscription.unsubscribe();
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
        {/* <RoomsCards>
          <CardsTitles>Bloco A</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            <RoomsSquares
              color="#42BC37"
              onClick={() => handleClick(0, "#42BC37")}
            >
              102
            </RoomsSquares>
            <RoomsSquares
              color="#EF835F"
              onClick={() => handleClick(1, "#EF835F")}
            >
              103
            </RoomsSquares>
            <RoomsSquares
              color="#42BC37"
              onClick={() => handleClick(2, "#42BC37")}
            >
              104
            </RoomsSquares>
            <RoomsSquares
              color="#EF835F"
              onClick={() => handleClick(3, "#EF835F")}
            >
              105
            </RoomsSquares>
          </WrapRooms>
        </RoomsCards> */}
        <RoomsCards>
          <CardsTitles>Bloco B</CardsTitles>
          <CardRoomTitle>Salas</CardRoomTitle>
          <WrapRooms>
            {blockBSalas.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                color="#42BC37"
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
            {blockCSalas.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                color="#42BC37"
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
            {blockDSalas.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                color="#42BC37"
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
            {blockESalas.map((sala, index) => (
              <RoomsSquares
                key={sala.id}
                color="#42BC37"
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
