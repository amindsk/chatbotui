import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationActions from '../TablePaginationActions';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const PaginatedTable = ({
    tableSize,
    pages,
    rowsPerPages,
    tableHeight,
    columns,
    rows,
}) => {
    
    const [page, setPage] = React.useState(pages)
    const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPages)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '10px', marginBottom: '10px' }}>
            <TableContainer sx={{ maxHeight: tableHeight, minHeight: tableHeight }}>
                <Table size={tableSize} stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((col, index) => (
                                <StyledTableCell key={index} align="left">{col.name}</StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (rowsPerPage > 0
                                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : rows
                            ).map((row, rowIndex) => (
                                <StyledTableRow key={rowIndex}>
                                    {columns.map((column, columnIndex) => <StyledTableCell key={columnIndex}>{row[column.key]}</StyledTableCell>)}
                                </StyledTableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[50, 100, 200, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                        'aria-label': 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                component="div"
            />
        </Paper>
    );
}

PaginatedTable.prototype = {
    tableSize: PropTypes.string,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    setPage: PropTypes.func,
    setRowsPerPage: PropTypes.func,
    rowsCount: PropTypes.number,
    tableHeight: PropTypes.number,
    columns: PropTypes.array,
    rows: PropTypes.array
}

PaginatedTable.defaultProps = {
    tableSize: '',
    page: 0,
    rowsPerPage: 50,
    setPage: () => { },
    setRowsPerPage: () => { },
    rowsCount: 0,
    tableHeight: 500,
    columns: [],
    rows: []
}

export default PaginatedTable;