import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

export const  DeleteTeacherDialog: React.FC<{ index: number, open: boolean, onClose(): void, onDelete(index: number): void}> = ({
    index,
    onClose,
    onDelete,
    open
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Deseja deleter o professor?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ao fazer essa ação o professor será removido de suas aulas atuais
                    e terá que ser adicionado novamente. Essa ação não poderá ser desfeita. 
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancelar</Button>
                <Button onClick={() => onDelete(index)} autoFocus>
                    Deletar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
