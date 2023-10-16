import { useState } from "react";
import { MdAdd } from "react-icons/md";
import ClassDetails from "../../components/Class/ClassDetails";
import { NewClassDialog } from "../../components/Class/NewClassDialog";
import { TableClasses } from "../../components/Class/TableClasses";
import { DeleteClassDialog } from "../../components/Dialogs/DeleteClassDialog";
import { useClass } from "../../data/contexts/class";
import { Class } from "../../data/models/class";
import {
    AddClass,
    ClassContainer,
    ClassHeader,
    ClassTitle
} from "../../styles/Class";
import { InfoTable } from "../../styles/Teachers";

export default function Classes() {
    const [addOpt, setAddOpt] = useState(false);
    const [detailsOpt, setDetailsOpt] = useState(false);
    const [dialogDeleteOpen, setDialogDelete] = useState(false);
    const [indexDeleteSelected, setIndexDeleteSelected] = useState<number | null>(null);
    const [classSelected, setClassSelected] = useState<Class | null>(null);
    const { loading, classes } = useClass()


    const handleClick = () => {
        setAddOpt(true);
        setDetailsOpt(false);
    };

    const handleClickDetails = (classe: Class) => {
        setClassSelected(classe)
        setDetailsOpt(true);
        setAddOpt(false);
    };

    const handleDispose = () => {
        setAddOpt(false);
        setDetailsOpt(false);
    };


    const handleDeleteTeacher = async (index: number) => {

        setDialogDelete(false)

        // toast.promise(deleteTeacher(teachers[index].id!), {
        //     loading: 'Deletando...',
        //     success: (_) => {
        //         setIndexDeleteSelected(null)
        //         return `O professor ${teachers[index].name} foi deletado`;
        //     },
        //     error: (_) => {
        //         return `Ocorreu um erro ao deletar o professor ${teachers[index].name}`;
        //     },
        // });
    };

    return (
        <>
            <DeleteClassDialog onClose={() => setDialogDelete(false)} onDelete={handleDeleteTeacher} open={dialogDeleteOpen} index={indexDeleteSelected!} />
            <ClassContainer>
                <ClassHeader>
                    <ClassTitle>Aulas</ClassTitle>
                    <AddClass onClick={handleClick}>
                        Adicionar <MdAdd />{" "}
                    </AddClass>
                </ClassHeader>

                <InfoTable>Clique no nome para expandir as informações de uma aula</InfoTable>
                <TableClasses
                    data={classes}
                    onClickDetails={handleClickDetails}
                    isExpanded={!addOpt && !detailsOpt}
                    loading={loading}
                    onClickDelete={(index) => {
                        setIndexDeleteSelected(index)
                        setDialogDelete(true)
                    }}
                />

                {addOpt && (
                    <NewClassDialog handleDispose={handleDispose} />
                )}

                {(detailsOpt && classSelected) && (
                    <ClassDetails classe={classSelected} handleDispose={handleDispose} />
                )}
            </ClassContainer>

        </>
    );
}