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


const SortableTable = ({
    tableSize,
    innerRef,
    findRow,
    moveRow,
    tableHeight,
    columns,
    rows,
}) => {

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '10px', marginBottom: '10px' }}>
            <TableContainer sx={{ maxHeight: tableHeight, minHeight: tableHeight }}>
                <Table size={tableSize} ref={innerRef} stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col, index) => (
                                <StyledTableCell key={index} align={col.align}>{col.name}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row, rowIndex) => (
                                <DraggableRow key={rowIndex} id={row.id} row={row} columns={columns} moveRow={moveRow} findRow={findRow}>
                                    {columns.map((column, columnIndex) => <StyledTableCell key={columnIndex}>{row[column.key]}</StyledTableCell>)}
                                </DraggableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

SortableTable.prototype = {
    tableSize: PropTypes.string,
    innerRef: PropTypes.object,
    findRow: PropTypes.func,
    moveRow: PropTypes.func,
    tableHeight: PropTypes.number,
    columns: PropTypes.array,
    rows: PropTypes.array
}

SortableTable.defaultProps = {
    tableSize: '',
    findRow: () => { },
    moveRow: () => { },
    tableHeight: 500,
    columns: [],
    rows: []
}

export default SortableTable;