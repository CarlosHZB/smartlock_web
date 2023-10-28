import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'sonner';
import { useClassroom, useTeacher } from '../../data/contexts';
import { useClass } from '../../data/contexts/class';
import { Classroom } from '../../data/models/classroom';
import { daysOfWeek } from '../../helpers/date';
import {
    ClassesDivTitle,
    ClassesEdit,
    ColumnDialogNewClass,
    DisposeButton,
    FirstRowOverlay,
    Overlay,
    OverlayMenu,
    OverlayTitle,
    RowDialogNewClass,
    SaveButton,
    TeacherOption,
    TeacherSelect,
    WrapButton
} from "../../styles/Class";

interface NewClassDialogProps {
    handleDispose(): void
}

export const NewClassDialog: React.FC<NewClassDialogProps> = ({
    handleDispose
}) => {

    const initialFormData = {
        name: '',
        subject: '',
        initialDate: '',
        endDate: '',
        initialTime: '',
        endTime: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const { teachers } = useTeacher()
    const { createNewClass, getAllClasses } = useClass()
    const { blocks, getClassroomsByBlock } = useClassroom()
    const [selectedClassroom, setSelectedClassroom] = useState<string>('');
    const [selectedBlock, setSelectedBlock] = useState<string>('');
    const [weekDay, setWeekDay] = useState<string>('');
    const [classroomAvailables, setClassroomAvailables] = useState<Classroom[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<string>(''); // Initialize the selected teacher state

    // Function to handle the selection change
    const handleBlockChange = (event: any) => {
        setSelectedBlock(event.target.value);
        const classroomAva = getClassroomsByBlock(event.target.value)
        setClassroomAvailables(classroomAva)
    };

    // Function to handle the selection change
    const handleClassroomChange = (event: any) => {
        setSelectedClassroom(event.target.value);
    };

    // Function to handle the selection change
    const handleWeekDayChange = (event: any) => {
        setWeekDay(event.target.value);
    };

    // Function to handle the selection change
    const handleClose = (event: any) => {
        setFormData(initialFormData)
        handleDispose()
    };

    // Function to handle the selection change
    const handleTeacherChange = (event: any) => {
        setSelectedTeacher(event.target.value);
    };

    function handleAddNewClass(): void {
        toast.promise(
            createNewClass({
                name: formData.name,
                subject: formData.subject,
                dayOfWeek: weekDay,
                initialDate: formData.initialDate,
                endDate: formData.endDate,
                initialTime: formData.initialTime,
                endTime: formData.endTime,
                classroomId: selectedClassroom,
                teacherId: selectedTeacher
            })
            , {
                loading: 'Criando nova aula...',
                success: (_) => {
                    setFormData(initialFormData)
                    handleDispose()
                    getAllClasses()
                    return `A aula ${formData.name} foi criada com sucesso!`;
                },
                error: (_) => {
                    return `Ocorreu um erro ao criar a aula ${formData.name}`;
                },
            });
    }

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <Overlay>
            <OverlayMenu>
                <FirstRowOverlay>
                    <OverlayTitle>Adicionar nova aula</OverlayTitle>
                    <DisposeButton onClick={handleClose}>
                        <AiOutlineCloseCircle size={34} />
                    </DisposeButton>
                </FirstRowOverlay>
                <RowDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Sigla da Aula</ClassesDivTitle>
                        <ClassesEdit
                            type="text"
                            name="name"
                            maxLength={6}
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </ColumnDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Nome da Matéria</ClassesDivTitle>
                        <ClassesEdit
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                        />
                    </ColumnDialogNewClass>
                </RowDialogNewClass>
                <RowDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Dia Inicial</ClassesDivTitle>
                        <ClassesEdit
                            type="date"
                            name="initialDate"
                            value={formData.initialDate}
                            onChange={handleInputChange}
                        />
                    </ColumnDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Dia Inicial</ClassesDivTitle>
                        <ClassesEdit
                            type="date"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                        />
                    </ColumnDialogNewClass>
                </RowDialogNewClass>
                <RowDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Horário de Início</ClassesDivTitle>
                        <ClassesEdit
                            type="time"
                            name="initialTime"
                            value={formData.initialTime}
                            onChange={handleInputChange}
                        />
                    </ColumnDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Horário de Fim</ClassesDivTitle>
                        <ClassesEdit
                            type="time"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleInputChange}
                        />
                    </ColumnDialogNewClass>
                </RowDialogNewClass>
                <ColumnDialogNewClass>
                    <ClassesDivTitle>Dia da Semana</ClassesDivTitle>
                    <TeacherSelect onChange={handleWeekDayChange} value={weekDay}>
                        <TeacherOption>Dia da Semana</TeacherOption>
                        {
                            daysOfWeek.map((day) => (
                                <TeacherOption value={day} >{day}</TeacherOption>
                            ))
                        }
                    </TeacherSelect>
                </ColumnDialogNewClass>
                <ClassesDivTitle>Professor</ClassesDivTitle>
                <TeacherSelect onChange={handleTeacherChange} value={selectedTeacher}>
                    <TeacherOption >Selecione um professor</TeacherOption>
                    {
                        teachers.map((teacher) => (
                            <TeacherOption value={teacher.id} >{teacher.name}</TeacherOption>
                        ))
                    }
                </TeacherSelect>
                <RowDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Bloco</ClassesDivTitle>
                        <TeacherSelect onChange={handleBlockChange} value={selectedBlock}>
                            <TeacherOption >Selecione um Bloco</TeacherOption>
                            {
                                blocks.map((block) => (
                                    <TeacherOption value={block.name}>{block.name}</TeacherOption>
                                ))
                            }
                        </TeacherSelect>
                    </ColumnDialogNewClass>
                    <ColumnDialogNewClass>
                        <ClassesDivTitle>Sala de Aula</ClassesDivTitle>
                        <TeacherSelect onChange={handleClassroomChange} value={selectedClassroom}>
                            <TeacherOption >Selecione uma Sala</TeacherOption>
                            {
                                classroomAvailables.map((classroom) => (
                                    <TeacherOption value={classroom.id}>{classroom.name}</TeacherOption>
                                ))
                            }
                        </TeacherSelect>
                    </ColumnDialogNewClass>
                </RowDialogNewClass>
                <WrapButton>
                    <SaveButton onClick={handleAddNewClass}>
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