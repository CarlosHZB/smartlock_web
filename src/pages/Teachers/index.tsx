import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { Toaster, toast } from "sonner";
import { useTeacher } from "../../data/contexts";
import {
  AddTeacher,
  ClassTitle,
  ClassesDiv,
  ClassesDivTitle,
  ClassesEdit,
  ClassesLogo,
  DateStyle,
  DateTimeColumn,
  DisposeButton,
  EditButton,
  EmailStyle,
  EmailTitle,
  FirstRowOverlay,
  InformationColumn,
  NextCLassesTitle,
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
  TimeStyle,
  WrapButton,
  WrapClassesLogo,
  WrapDetailsButton
} from "../../styles/Teachers";

export default function Teachers() {
  const [addOpt, setAddOpt] = useState(false);
  const [detailsOpt, setDetailsOpt] = useState(false);
  const { loadingNewTeacher, teachers, createNewTeacher } = useTeacher()

  const initialFormData = {
    name: '',
    email: '',
    prontuario: ''
  };

  const [formData, setFormData] = useState(initialFormData);


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
    // Clear the form data after submission
    setFormData(initialFormData);
  };

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSaveTeacher = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    toast.promise(createNewTeacher(formData.name, formData.email, formData.prontuario), {
      loading: 'Adicionando...',
      success: (_) => {
        setAddOpt(false);
        setDetailsOpt(false);
        setFormData(initialFormData);
        return `O professor ${formData.name} foi adicionado`;
      },
      error: (_) => {
        return `Ocorreu um erro ao adicionar o professor ${formData.name}`;
      },
    });

  };

  return (
    <TeacherContainer>
      <Toaster richColors />
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
      {teachers.map((teacher) => (
        <TableRow key={teacher.id}>
          <TableRowContentName onClick={handleClickDetails}>
            {teacher.name}
          </TableRowContentName>
          <TableRowContent>{teacher.email}</TableRowContent>
          <TableRowContent>

          </TableRowContent>
          <TableRowContent>{teacher.code}</TableRowContent>
        </TableRow>
      ))}
      {addOpt && (
        <Overlay>
          <OverlayMenu>
            <FirstRowOverlay>
              <OverlayTitle>Adicionar novo professor</OverlayTitle>
              <DisposeButton onClick={handleDispose}>
                <AiOutlineCloseCircle size={34} />
              </DisposeButton>
            </FirstRowOverlay>
            <ClassesDivTitle>Nome completo</ClassesDivTitle>
            <ClassesEdit
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <ClassesDivTitle>Email</ClassesDivTitle>
            <ClassesEdit
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <ClassesDivTitle>Prontuário</ClassesDivTitle>
            <ClassesEdit
              type="text"
              name="prontuario"
              value={formData.prontuario}
              onChange={handleInputChange}
            />
            <WrapButton>
              <SaveButton onClick={handleSaveTeacher}>
                {loadingNewTeacher &&
                  (<CircularProgress
                    size={16}
                    sx={{
                      color: "white",
                    }} />)}
                Salvar
              </SaveButton>
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
                <EditButton> <GoPencil size={34} /> </EditButton>
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
