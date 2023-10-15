import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { MdAdd } from "react-icons/md";
import { toast } from "sonner";
import { DeleteTeacherDialog } from "../../components/Dialogs/DeleteTeacherDialog";
import { TableTeachers } from "../../components/Teachers/CustomTable";
import { useTeacher } from "../../data/contexts";
import { Teacher } from "../../data/models/teacher";
import {
  AddTeacher,
  ClassesDivTitle,
  ClassesEdit,
  ClassesLogo,
  DisposeButton,
  EditButton,
  EmailStyle,
  EmailTitle,
  FirstRowOverlay,
  InfoTable,
  InformationColumn,
  Overlay,
  OverlayMenu,
  OverlayTitle,
  SaveButton,
  TeacherContainer,
  TeacherHeader,
  TeacherTitle,
  WrapButton,
  WrapClassesLogo,
  WrapDetailsButton
} from "../../styles/Teachers";

export default function Teachers() {
  const [addOpt, setAddOpt] = useState(false);
  const [detailsOpt, setDetailsOpt] = useState(false);
  const [dialogDeleteOpen, setDialogDelete] = useState(false);
  const [indexDeleteSelected, setIndexDeleteSelected] = useState<number | null>(null);
  const [teacherSelected, setTeacherSelected] = useState<Teacher | null>(null);
  const { loading, loadingNewTeacher, teachers, createNewTeacher, deleteTeacher } = useTeacher()

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

  const handleClickDetails = (teacher: Teacher) => {
    setTeacherSelected(teacher)
    setDetailsOpt(true);
    setAddOpt(false);
  };

  const handleDispose = () => {
    setAddOpt(false);
    setDetailsOpt(false);
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

  const handleDeleteTeacher = async (index: number) => {

    setDialogDelete(false)

    toast.promise(deleteTeacher(teachers[index].id!), {
      loading: 'Deletando...',
      success: (_) => {
        setIndexDeleteSelected(null)
        return `O professor ${teachers[index].name} foi deletado`;
      },
      error: (_) => {
        return `Ocorreu um erro ao deletar o professor ${teachers[index].name}`;
      },
    });
  };

  return (
    <>
      <DeleteTeacherDialog onClose={() => setDialogDelete(false)} onDelete={handleDeleteTeacher} open={dialogDeleteOpen} index={indexDeleteSelected!} />
      <TeacherContainer>
        <TeacherHeader>
          <TeacherTitle>Professores</TeacherTitle>
          <AddTeacher onClick={handleClick}>
            Adicionar <MdAdd />{" "}
          </AddTeacher>
        </TeacherHeader>
        <InfoTable>Clique no nome para expandir as informações o professor</InfoTable>
        <TableTeachers
          data={teachers}
          onClickDetails={handleClickDetails}
          isExpanded={!addOpt && !detailsOpt}
          loading={loading}
          onClickDelete={(index) => {
            setIndexDeleteSelected(index)
            setDialogDelete(true)
          }}
        />
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

        {(detailsOpt && teacherSelected) && (
          <Overlay>
            <OverlayMenu>
              <FirstRowOverlay>
                <OverlayTitle>{teacherSelected?.name}</OverlayTitle>
                <WrapDetailsButton>
                  <EditButton> <GoPencil size={24} /> </EditButton>
                  <DisposeButton onClick={handleDispose}>
                    <AiOutlineCloseCircle size={34} />
                  </DisposeButton>
                </WrapDetailsButton>
              </FirstRowOverlay>
              <InformationColumn>
                <EmailTitle>Email</EmailTitle>
                <EmailStyle>{teacherSelected?.email}</EmailStyle>
              </InformationColumn>
              <InformationColumn>
                <EmailTitle>Aulas</EmailTitle>
                <WrapClassesLogo>
                  {
                    teacherSelected?.classes.map((classU) => (
                      <ClassesLogo key={classU.id} >{classU.name}</ClassesLogo>
                    ))
                  }
                </WrapClassesLogo>
              </InformationColumn>
              {/* <NextCLassesTitle>Próximas aulas</NextCLassesTitle>
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
              </ClassesDiv> */}
            </OverlayMenu>
          </Overlay>
        )}
      </TeacherContainer>
    </>
  );
}
