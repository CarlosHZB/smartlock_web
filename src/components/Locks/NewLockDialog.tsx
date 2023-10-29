import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'sonner';
import { useClassroom, useLock } from '../../data/contexts';
import { Classroom } from '../../data/models/classroom';
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

interface NewLockDialogProps {
    handleDispose(): void
}

export const NewLockDialog: React.FC<NewLockDialogProps> = ({
    handleDispose
}) => {

    const initialFormData = {
        name: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const { createLock, getAllLocks } = useLock()
    const { blocks, getClassroomsByBlock } = useClassroom()
    const [selectedClassroom, setSelectedClassroom] = useState<string>('');
    const [selectedBlock, setSelectedBlock] = useState<string>('');
    const [classroomAvailables, setClassroomAvailables] = useState<Classroom[]>([]);

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
    const handleClose = (event: any) => {
        setFormData(initialFormData)
        handleDispose()
    };

    function handleAddNewClass(): void {

        toast.promise(createLock(formData.name, selectedClassroom!), {
            loading: 'Adicionando...',
            success: (_) => {
                setFormData(initialFormData)
                handleDispose()
                getAllLocks()
                return `A fechadura ${formData.name} foi adicionada com sucesso!`;
            },
            error: (_) => {
                return `Ocorreu um erro ao adicionar a fechadura: ${formData.name}`;
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
                    <OverlayTitle>Adicionar nova fechadura</OverlayTitle>
                    <DisposeButton onClick={handleClose}>
                        <AiOutlineCloseCircle size={34} />
                    </DisposeButton>
                </FirstRowOverlay>
                <ColumnDialogNewClass>
                    <ClassesDivTitle>Nome da fechadura</ClassesDivTitle>
                    <ClassesEdit
                        type="text"
                        name="name"
                        maxLength={8}
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </ColumnDialogNewClass>
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
                        Salvar
                    </SaveButton>
                </WrapButton>
            </OverlayMenu>
        </Overlay>
    )
}