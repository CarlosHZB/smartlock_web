import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { Class } from "../../data/models/class";
import { formatDateToDDMMYYYY } from "../../helpers/date";
import {
    DisposeButton,
    EditButton,
    EmailStyle,
    EmailTitle,
    FirstRowOverlay,
    InformationColumn,
    Overlay,
    OverlayMenu,
    OverlayTitle,
    WrapDetailsButton
} from "../../styles/Class";
import { OpenOrClosedTag } from "../../styles/Rooms";

interface ClassDetailsProps {
    classe: Class,
    handleDispose(): void
}
export const ClassDetails: React.FC<ClassDetailsProps> = ({
    classe,
    handleDispose
}) => {
    return (
        <Overlay>
            <OverlayMenu>
                <FirstRowOverlay>
                    <OverlayTitle>{classe.name}</OverlayTitle>
                    <WrapDetailsButton>
                        <EditButton> <GoPencil size={24} /> </EditButton>
                        <DisposeButton onClick={handleDispose}>
                            <AiOutlineCloseCircle size={34} />
                        </DisposeButton>
                    </WrapDetailsButton>
                </FirstRowOverlay>
                <InformationColumn>
                    <EmailTitle>Máteria</EmailTitle>
                    <EmailStyle>{classe.subject}</EmailStyle>
                </InformationColumn>
                <InformationColumn>
                    <EmailTitle>Professor</EmailTitle>
                    <EmailStyle>{classe.teacher?.name}</EmailStyle>
                </InformationColumn>
                <InformationColumn>
                    <EmailTitle>Data de Início</EmailTitle>
                    <EmailStyle>{formatDateToDDMMYYYY(classe.initialDay)}</EmailStyle>
                </InformationColumn>
                <InformationColumn>
                    <EmailTitle>Data de Fim</EmailTitle>
                    <EmailStyle>{formatDateToDDMMYYYY(classe.endDay)}</EmailStyle>
                </InformationColumn>
                <InformationColumn>
                    <EmailTitle>Sala</EmailTitle>
                    <EmailStyle>{classe.classroom?.block}{classe.classroom?.name}</EmailStyle>
                </InformationColumn>
                <InformationColumn>
                    <EmailTitle>Fechadura</EmailTitle>
                    <EmailStyle>{classe.classroom?.lock?.name}</EmailStyle>
                    <OpenOrClosedTag color={classe.classroom?.lock != null ? classe.classroom?.lock?.state ? "#EF835F" : "#42BC37" : "#797979"}>
                        {classe.classroom?.lock != null ? classe.classroom?.lock.state ? "Fechada" : "Aberta" : "Sem Fechadura"}
                    </OpenOrClosedTag>
                </InformationColumn>
                {/* <InformationColumn>
                    <EmailTitle>Acessos</EmailTitle>
                    <AccessWrapper>
                        {
                            classe.classroom?.access.map((access: {id: string, open_time: Date}) => (
                                <AccessItem key={access.id}> 
                                    {formatDateToDDMMYYYY(new Date(classe.endDay.toString()))} - 
                                </AccessItem>
                            ))
                        }
                    </AccessWrapper>
                </InformationColumn> */}
            </OverlayMenu>
        </Overlay>
    )
}

export default ClassDetails