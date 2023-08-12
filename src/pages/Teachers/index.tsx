import { MdAdd } from "react-icons/md";
import { RxTrash } from "react-icons/rx";
import {
  AddTeacher,
  ClassesEdit,
  ClassesDivTitle,
  ClassesLogo,
  DisposeButton,
  EditButton,
  EmailStyle,
  EmailTitle,
  FirstRowOverlay,
  InformationColumn,
  Overlay,
  OverlayMenu,
  OverlayTitle,
  SaveButton,
  TableHeader,
  TableRow,
  TableRowContent,
  TableRowContentName,
  TableTitleRows,
  TeacherContainer,
  TeacherHeader,
  TeacherTitle,
  TrashButton,
  WrapButton,
  WrapClassesLogo,
  WrapDetailsButton,
  NextCLassesTitle,
  ClassesDiv,
  ClassTitle,
  DateTimeColumn,
  DateStyle,
  TimeStyle,
} from "../../styles/Teachers";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { useState } from "react";

export default function Teachers() {
  const [addOpt, setAddOpt] = useState(false);
  const [detailsOpt, setDetailsOpt] = useState(false);

  const handleClick = () => {
    setAddOpt(true);
    setDetailsOpt(false);
  };

  const handleClickDetails = () => {
    setDetailsOpt(true);
    setAddOpt(false);
  };

  const handleDispose = () => {
    setAddOpt(false);
    setDetailsOpt(false);
  };

  return (
    <TeacherContainer>
      <TeacherHeader>
        <TeacherTitle>Professores</TeacherTitle>
        <AddTeacher onClick={handleClick}>
          Adicionar <MdAdd />{" "}
        </AddTeacher>
      </TeacherHeader>
      <TableHeader>
        <TableTitleRows>Nome</TableTitleRows>
        <TableTitleRows>Email</TableTitleRows>
        <TableTitleRows>Aulas</TableTitleRows>
        <TableTitleRows>Prontuário</TableTitleRows>
      </TableHeader>
      <TableRow>
        <TableRowContentName onClick={handleClickDetails}>
          Murilo Varges
        </TableRowContentName>
        <TableRowContent>murilovarges@gmail.com</TableRowContent>
        <TableRowContent>X</TableRowContent>
        <TableRowContent>BI300XXXX</TableRowContent>
      </TableRow>
      <TableRow>
        <TableRowContentName onClick={handleClickDetails}>
          Murilo Varges
        </TableRowContentName>
        <TableRowContent>murilovarges@gmail.com</TableRowContent>
        <TableRowContent>X</TableRowContent>
        <TableRowContent>BI300XXXX</TableRowContent>
      </TableRow>
      <TableRow>
        <TableRowContentName onClick={handleClickDetails}>
          Murilo Varges
        </TableRowContentName>
        <TableRowContent>murilovarges@gmail.com</TableRowContent>
        <TableRowContent>X</TableRowContent>
        <TableRowContent>BI300XXXX</TableRowContent>
      </TableRow>

      {addOpt && (
        <Overlay>
          <OverlayMenu>
            <FirstRowOverlay>
              <OverlayTitle>Adicionar novo professor</OverlayTitle>
              <DisposeButton onClick={handleDispose}>
                <AiOutlineCloseCircle size={34} />
              </DisposeButton>
            </FirstRowOverlay>
            <ClassesDivTitle>Prontuário</ClassesDivTitle>
            <ClassesEdit />
            <ClassesDivTitle>Nome completo</ClassesDivTitle>
            <ClassesEdit />
            <ClassesDivTitle>Email</ClassesDivTitle>
            <ClassesEdit />
            <WrapButton>
              <SaveButton onClick={handleDispose}>Salvar</SaveButton>
            </WrapButton>
          </OverlayMenu>
        </Overlay>
      )}

      {detailsOpt && (
        <Overlay>
          <OverlayMenu>
            <FirstRowOverlay>
              <OverlayTitle>Murilo Varges</OverlayTitle>
              <WrapDetailsButton>
                <EditButton> <GoPencil size={34}/> </EditButton>
                <DisposeButton onClick={handleDispose}>
                    <AiOutlineCloseCircle size={34} />
                </DisposeButton>
              </WrapDetailsButton>
            </FirstRowOverlay>
            <InformationColumn>
                <EmailTitle>Email</EmailTitle>
                <EmailStyle>carlosziliolibraga@hotmail.com</EmailStyle>
            </InformationColumn>
            <InformationColumn>
                <EmailTitle>Aulas</EmailTitle>
                <WrapClassesLogo>
                <ClassesLogo>ROBO9</ClassesLogo>
                <ClassesLogo>REDE9</ClassesLogo>
                </WrapClassesLogo>
            </InformationColumn>
            <NextCLassesTitle>Próximas aulas</NextCLassesTitle>
            <ClassesDiv>
              <ClassTitle>PPJE6</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>16:00 - 17:15</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
            <ClassesDiv>
              <ClassTitle>PPJE6</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>16:00 - 17:15</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
            <ClassesDiv>
              <ClassTitle>PPJE6</ClassTitle>
              <DateTimeColumn>
                <DateStyle>20/05/2023</DateStyle>
                <TimeStyle>16:00 - 17:15</TimeStyle>
              </DateTimeColumn>
            </ClassesDiv>
          </OverlayMenu>
        </Overlay>
      )}
    </TeacherContainer>
  );
}
