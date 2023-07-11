import { CardRoomTitle, CardsTitles, DropDown, HeaderRooms, RoomsCards, RoomsCardsContainer, RoomsContainer, RoomsSquares, SquareTexts, Squares, Title, WrapDropDowns, WrapRooms, WrapSquares } from "../../styles/Rooms";

export default function Rooms(){
    return(
        <RoomsContainer>
            <HeaderRooms>
                <WrapSquares>
                    <Squares color="#42BC37"/>
                    <SquareTexts>Aberto</SquareTexts>
                    <Squares color="#EF835F"/> 
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
                        <RoomsSquares color="#42BC37">102</RoomsSquares>
                        <RoomsSquares color="#EF835F">103</RoomsSquares>
                        <RoomsSquares color="#42BC37">104</RoomsSquares>
                        <RoomsSquares color="#EF835F">105</RoomsSquares>
                    </WrapRooms>
                </RoomsCards>
                <RoomsCards>
                    <CardsTitles>Bloco B</CardsTitles>
                    <CardRoomTitle>Salas</CardRoomTitle>
                    <WrapRooms>
                        <RoomsSquares color="#42BC37">102</RoomsSquares>
                        <RoomsSquares color="#EF835F">103</RoomsSquares>
                        <RoomsSquares color="#42BC37">104</RoomsSquares>
                        <RoomsSquares color="#EF835F">105</RoomsSquares>
                    </WrapRooms>
                </RoomsCards>
                <RoomsCards>
                    <CardsTitles>Bloco C</CardsTitles>
                    <CardRoomTitle>Salas</CardRoomTitle>
                    <WrapRooms>
                        <RoomsSquares color="#42BC37">102</RoomsSquares>
                        <RoomsSquares color="#EF835F">103</RoomsSquares>
                        <RoomsSquares color="#42BC37">104</RoomsSquares>
                        <RoomsSquares color="#EF835F">105</RoomsSquares>
                    </WrapRooms>
                </RoomsCards>
                
            </RoomsCardsContainer>
        </RoomsContainer>
    );
}