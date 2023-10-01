import { AiOutlineCloseCircle } from "react-icons/ai";
import { Classroom } from "../../data/models/classroom";
import {
    ClassAtMoment,
    ClassName,
    ClassTitle,
    ClassesDiv,
    DateStyle,
    DateTimeColumn,
    DisposeButton,
    FirstRowOverlay,
    InformationColumn,
    NextCLassesTitle,
    OpenOrClosedTag,
    Overlay,
    OverlayMenu,
    OverlayTitle,
    SecondRow,
    TimeStyle,
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
    )
}

export default ClassroomSelected;