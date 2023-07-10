import { HeaderRooms, RoomsContainer, Squares, WrapSquaresAndDrops } from "../../styles/Rooms";

export default function Rooms(){
    return(
        <RoomsContainer>
            <HeaderRooms>
                <WrapSquaresAndDrops>
                    <Squares/>
                    {/* <Squares/> */}
                    <div>Opa</div>
                </WrapSquaresAndDrops>
            </HeaderRooms>
        </RoomsContainer>
    );
}