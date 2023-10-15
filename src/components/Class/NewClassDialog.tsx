import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useClassroom, useTeacher } from '../../data/contexts';
import {
    ClassesDivTitle,
    ClassesEdit,
    DisposeButton,
    FirstRowOverlay,
    Overlay,
    OverlayMenu,
    OverlayTitle,
    SaveButton,
    TeacherOption,
    TeacherSelect,
    WrapButton
} from "../../styles/Class";


function NewClassDialog() {

    const initialFormData = {
        name: '',
        subject: '',
        email: '',
        prontuario: ''
    };

    const [selectedClassroom, setSelectedClassroom] = useState<string>('');

    // Function to handle the selection change
    const handleClassroomChange = (event: any) => {
        setSelectedClassroom(event.target.value);
    };

    const [selectedTeacher, setSelectedTeacher] = useState<string>(''); // Initialize the selected teacher state

    // Function to handle the selection change
    const handleTeacherChange = (event: any) => {
        setSelectedTeacher(event.target.value);
    };


    const [formData, setFormData] = useState(initialFormData);

    const { teachers } = useTeacher()
    const { blocks } = useClassroom()

    function handleDispose(): void {
        throw new Error('Function not implemented.');
    }

    function handleInputChange(): void {
        throw new Error('Function not implemented.');
    }

    function handleSaveTeacher(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Overlay>
            <OverlayMenu>
                <FirstRowOverlay>
                    <OverlayTitle>Adicionar nova aula</OverlayTitle>
                    <DisposeButton onClick={handleDispose}>
                        <AiOutlineCloseCircle size={34} />
                    </DisposeButton>
                </FirstRowOverlay>
                <ClassesDivTitle>Sigla da Aula</ClassesDivTitle>
                <ClassesEdit
                    type="text"
                    name="name"
                    maxLength={5}
                    value={formData.name}
                />
                <ClassesDivTitle>Nome da Matéria</ClassesDivTitle>
                <ClassesEdit
                    type="email"
                    name="email"
                    value={formData.email}
                />
                <ClassesDivTitle>Dia da Semana</ClassesDivTitle>
                <ClassesEdit
                    type="text"
                    name="prontuario"
                    value={formData.prontuario}
                />
                <ClassesDivTitle>Dia Inicial</ClassesDivTitle>
                <ClassesEdit
                    type="date"
                    name="prontuario"
                    value={formData.prontuario}
                />
                <ClassesDivTitle>Dia Final</ClassesDivTitle>
                <ClassesEdit
                    type="date"
                    name="prontuario"
                    value={formData.prontuario}
                />
                <ClassesDivTitle>Horário de Início</ClassesDivTitle>
                <ClassesEdit
                    type="time"
                    name="prontuario"
                    value={formData.prontuario}
                />
                <ClassesDivTitle>Horário de Fim</ClassesDivTitle>
                <ClassesEdit
                    type="time"
                    name="prontuario"
                    value={formData.prontuario}
                />
                <ClassesDivTitle>Professor</ClassesDivTitle>
                <TeacherSelect>
                    <TeacherOption onChange={handleTeacherChange} value={selectedTeacher}>Select a teacher</TeacherOption>
                    {
                        teachers.map((teacher) => (
                            <TeacherOption value={teacher.id} >{teacher.name}</TeacherOption>
                        ))
                    }
                </TeacherSelect>
                <ClassesDivTitle>Sala de Aula</ClassesDivTitle>
                <TeacherSelect>
                    <TeacherOption onChange={handleClassroomChange} value={selectedClassroom}>Select a classroom</TeacherOption>
                    {
                        blocks.map((block) => (
                            <TeacherOption value={block.name}>{block.name}</TeacherOption>
                        ))
                    }
                </TeacherSelect>
                <WrapButton>
                    <SaveButton onClick={handleSaveTeacher}>
                        {/* {loadingNewTeacher &&
                    (<CircularProgress
                        size={16}
                        sx={{
                            color: "white",
                        }} />)} */}
                        Salvar
                    </SaveButton>
                </WrapButton>
            </OverlayMenu>
        </Overlay>
    )
}

export default NewClassDialog