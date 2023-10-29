import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { LocksTable } from "../../components/Locks/LocksTable";
import { NewLockDialog } from "../../components/Locks/NewLockDialog";
import { useLock } from "../../data/contexts";
import { Lock } from "../../data/models/lock";
import {
    AddTeacher,
    InfoTable,
    TeacherContainer,
    TeacherHeader,
    TeacherTitle
} from "../../styles/Teachers";

export default function Locks() {

    const { locks, loading } = useLock()
    const [addOpt, setAddOpt] = useState(false);
    const [detailsOpt, setDetailsOpt] = useState(false);
    const [dialogDeleteOpen, setDialogDelete] = useState(false);
    const [indexDeleteSelected, setIndexDeleteSelected] = useState<number | null>(null);
    const [lockSelected, setLockSelected] = useState<Lock | null>(null);

    const initialFormData = {
        name: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleClick = () => {
        setAddOpt(true);
        setDetailsOpt(false);
    };

    const handleClickDetails = (classe: Lock) => {
        setLockSelected(classe)
        setDetailsOpt(true);
        setAddOpt(false);
    };

    const handleDispose = () => {
        setAddOpt(false);
        setDetailsOpt(false);
    };

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleDeleteClass = async (index: number) => {

        // setDialogDelete(false)

        // toast.promise(deleteClass(index, classes[index].id!), {
        //     loading: 'Deletando aula...',
        //     success: (_) => {
        //         setIndexDeleteSelected(null)
        //         return `A aula ${classes[index].name} foi deletado com sucesso!`;
        //     },
        //     error: (_) => {
        //         return `Ocorreu um erro ao deletar a aula ${classes[index].name}`;
        //     },
        // });
    };

    return (
        <>
            {/* <DeleteTeacherDialog onClose={() => setDialogDelete(false)} onDelete={handleDeleteTeacher} open={dialogDeleteOpen} index={indexDeleteSelected!} /> */}
            <TeacherContainer>
                <TeacherHeader>
                    <TeacherTitle>Fechaduras</TeacherTitle>
                    <AddTeacher onClick={handleClick}>
                        Adicionar <MdAdd />{" "}
                    </AddTeacher>
                </TeacherHeader>
                <InfoTable>Clique no nome para expandir as informações da fechadura</InfoTable>
                <LocksTable
                    data={locks}
                    onClickDetails={handleClickDetails}
                    isExpanded={!addOpt && !detailsOpt}
                    loading={loading}
                    onClickDelete={(index) => {
                        setIndexDeleteSelected(index)
                        setDialogDelete(true)
                    }}
                />
                {addOpt && (
                   <NewLockDialog handleDispose={handleDispose} />
                )}

                {/* 
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
                        </OverlayMenu>
                    </Overlay>
                )} */}
            </TeacherContainer>
        </>
    );
}