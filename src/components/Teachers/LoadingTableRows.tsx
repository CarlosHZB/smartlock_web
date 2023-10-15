import { Skeleton } from '@mui/material'
import { TableCell, TableCellName, TableRow } from '../../styles/components/TableTeacher'

function LoadingTableRows() {
    return (
        <>
            <TableRow>
                <TableCellName>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCellName>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={60} height={30} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCellName>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCellName>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={60} height={30} />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCellName>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCellName>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={150} height={30} />
                </TableCell>
                <TableCell>
                    <Skeleton variant="rounded" width={60} height={30} />
                </TableCell>
            </TableRow>
        </>
    )
}

export default LoadingTableRows