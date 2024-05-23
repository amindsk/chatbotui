import React, { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DRAGGABLE_ITEMS } from '../constants';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`& table .${tableCellClasses.head}`]: {
        color: theme.palette.primary.main,
        fontSize: 16,
        fontWeight: 'bold',
        borderBottom: `3px double ${theme.palette.secondary.main}`,
        // whiteSpace: 'nowrap',
        borderLeft: '1px solid #222',
        borderRight: '1px solid #222',
    },
    [`& table .${tableCellClasses.body}`]: {
        fontSize: 14,
        // whiteSpace: 'nowrap',
        borderLeft: '1px solid #222',
        borderRight: '1px solid #222',
        borderBottom: '1px solid #222',
    },
    '& table :nth-of-type(odd)': {
        borderLeft: 0,
    },
    '& table :last-child': {
        borderRight: 0,
    },

    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.primary.main,
        fontSize: 16,
        fontWeight: 'bold',
        borderBottom: `3px double ${theme.palette.secondary.main}`,
        // whiteSpace: 'nowrap',
        borderLeft: '1px solid #222',
        borderRight: '1px solid #222',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        // whiteSpace: 'nowrap',
        borderLeft: '1px solid #222',
        borderRight: '1px solid #222',
        borderBottom: '1px solid #222',
    },
    '&:nth-of-type(odd)': {
        borderLeft: 0,
    },
    '&:last-child': {
        borderRight: 0,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme, styledRows }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: styledRows ? theme.palette.action.hover : null,
    },
    '&:last-child td, &:last-child th': {
        borderBottom: 0,
    },
    'td, th': {
        border: !styledRows ? 0 : null,
    },
}));

export const DraggableRow = memo(({ row, moveRow, findRow, children }) => {
    const originalIndex = findRow(row.id).index
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: DRAGGABLE_ITEMS.ROW,
            item: { id: row.id, originalIndex },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
            end: (item, monitor) => {
                const { id: droppedId, originalIndex } = item
                const didDrop = monitor.didDrop()
                if (!didDrop) {
                    moveRow(droppedId, originalIndex)
                }
            },
        }),
        [row, originalIndex, moveRow],
    )
    const [, drop] = useDrop(
        () => ({
            accept: DRAGGABLE_ITEMS.ROW,
            hover({ id: draggedId }) {
                if (draggedId !== row.id) {
                    const { index: overIndex } = findRow(row.id)
                    moveRow(draggedId, overIndex)
                }
            },
        }),
        [findRow, moveRow],
    )
    const opacity = isDragging ? 0 : 1;
    return (
        <StyledTableRow ref={(node) => drag(drop(node))} style={{ opacity }}>
            {children}
        </StyledTableRow>
    )
});


const SortableTable = ({
    tableSize,
    columns,
    innerRef,
    children
}) => {

    return (
        <Table size={tableSize} ref={innerRef} stickyHeader>
            <TableHead>
                <TableRow>
                    {columns.map((col, index) => (
                        <StyledTableCell key={index} align="left">{col.name}</StyledTableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {children}
            </TableBody>
        </Table>
    );
}

SortableTable.prototype = {
    tableSize: PropTypes.string,
    innerRef: PropTypes.object,
    columns: PropTypes.array
}

SortableTable.defaultProps = {
    tableSize: '',
    columns: [],
}

export default SortableTable;