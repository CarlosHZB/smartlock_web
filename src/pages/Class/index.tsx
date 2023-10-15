import { useState } from "react";
import { MdAdd } from "react-icons/md";
import ClassDetails from "../../components/Class/ClassDetails";
import NewClassDialog from "../../components/Class/NewClassDialog";
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

export default function Classes() {
    const [addOpt, setAddOpt] = useState(false);
    const [detailsOpt, setDetailsOpt] = useState(false);
    const [dialogDeleteOpen, setDialogDelete] = useState(false);
    const [indexDeleteSelected, setIndexDeleteSelected] = useState<number | null>(null);
    const [classSelected, setClassSelected] = useState<Class | null>(null);
    const { loading, classes } = useClass()

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

    const handleClickDetails = (classe: Class) => {
        setClassSelected(classe)
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

        // toast.promise(createNewTeacher(formData.name, formData.email, formData.prontuario), {
        //     loading: 'Adicionando...',
        //     success: (_) => {
        //         setAddOpt(false);
        //         setDetailsOpt(false);
        //         setFormData(initialFormData);
        //         return `O professor ${formData.name} foi adicionado`;
        //     },
        //     error: (_) => {
        //         return `Ocorreu um erro ao adicionar o professor ${formData.name}`;
        //     },
        // });
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
                    <NewClassDialog />
                )}

                {(detailsOpt && classSelected) && (
                    <ClassDetails classe={classSelected} handleDispose={handleDispose} />
                )}
            </ClassContainer>

        </>
    );
}