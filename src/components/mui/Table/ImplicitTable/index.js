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


const ImplicitTable = ({
    showHeader,
    styledRows,
    tableSize,
    columns,
    rows,
}) => {

    return (
        <Table size={tableSize} stickyHeader>
            {showHeader && (
                <TableHead>
                    <TableRow>
                        {columns.map((col, index) => (
                            <StyledTableCell key={index} align={col.align ? col.align : 'left'}>{col.name}</StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
            )}
            <TableBody>
                {
                    rows.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex} styledRows={styledRows}>
                            {columns.length > 0 ?
                            columns.map((column, columnIndex) => <StyledTableCell sx={{ color: row.color }} key={columnIndex}>{Array.isArray(row[column.key]) ? row[column.key].join() : row[column.key]}</StyledTableCell>)
                        : (<StyledTableCell>{row}</StyledTableCell>)}
                        </StyledTableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
}

ImplicitTable.prototype = {
    tableSize: PropTypes.string,
    showHeader: PropTypes.bool,
    styledRows: PropTypes.bool,
    columns: PropTypes.array,
    rows: PropTypes.array
}

ImplicitTable.defaultProps = {
    tableSize: '',
    styledRows: true,
    showHeader: true,
    columns: [],
    rows: []
}

export default ImplicitTable;