import { AiOutlineCloseCircle } from "react-icons/ai";
import { Classroom } from "../../data/models/classroom";
import { formatDateToDDMMYYYY } from "../../helpers/date";
import { formatDateToHHMM } from "../../helpers/time";
import {
    ClassTitle,
    ClassesDiv,
    DateStyle,
    DateTimeColumn,
    DisposeButton,
    FirstRowOverlay,
    LastAccess,
    NextCLassesTitle,
    OpenOrClosedTag,
    Overlay,
    OverlayMenu,
    OverlayTitle,
    TimeStyle
} from "../../styles/Rooms";

interface ClassroomSelectedProps {
    handleDispose: () => void;
    classroom: Classroom,
    block: string
}

const ClassroomSelected: React.FC<ClassroomSelectedProps> = ({ handleDispose, classroom, block }) => {
    return (
        <Overlay>
            <OverlayMenu>
                <FirstRowOverlay>
                    <DisposeButton onClick={handleDispose}>
                        <AiOutlineCloseCircle size={34} />
                    </DisposeButton>
                    <OpenOrClosedTag color={classroom.lock != null ? classroom.lock.state ? "#EF835F" : "#42BC37" : "#797979"}>
                        {classroom.lock != null ? classroom.lock.state ? "Fechada" : "Aberta" : "Sem Fechadura"}
                    </OpenOrClosedTag>
                </FirstRowOverlay>
                <OverlayTitle>Sala {block}{classroom.name}</OverlayTitle>
                {/* {
                    classroom.lock != null && !classroom.lock.state && (
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
                    )
                } */}

                <NextCLassesTitle>Últimos Acessos</NextCLassesTitle>
                <LastAccess>
                    {
                        classroom.access.map((access) =>
                        (
                            <ClassesDiv key={access.id}>
                                <ClassTitle>{access.user.name} - {access.accessType}</ClassTitle>
                                <DateTimeColumn>
                                    <DateStyle>{formatDateToDDMMYYYY(access.openTime)}</DateStyle>
                                    <TimeStyle>{`${formatDateToHHMM(access.openTime)}h - ${formatDateToHHMM(access.closeTime)}h`}</TimeStyle>
                                </DateTimeColumn>
                            </ClassesDiv>
                        ))
                    }
                </LastAccess>
            </OverlayMenu>
        </Overlay>
    )
}

export default ClassroomSelected;