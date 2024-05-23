import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled } from '@mui/material/styles';



export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        fontSize: 20,
        fontWeight: 'bold',
        padding: '15px',
        borderBottom: `5px solid ${theme.palette.primary.main}!important`
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: `${theme.palette.action.hover} !important`,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    },
}));


const Row = (props) => {
    const { row, nestedColumns, nestedRows, nestedTitle } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <StyledTableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <StyledTableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                    {row.column_name}
                </StyledTableCell>
                <StyledTableCell>{row.errors}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                {nestedTitle}
                            </Typography>
                            <Table size="small">
                                {nestedColumns && nestedColumns.length > 0 ?
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell />
                                            {nestedColumns && nestedColumns.length > 0 ?
                                                nestedColumns.map(col => (
                                                    <StyledTableCell key={col.key}>{col.name}</StyledTableCell>
                                                ))
                                                : null}
                                        </StyledTableRow>
                                    </TableHead>
                                    : null}
                                <TableBody>
                                    {nestedRows && nestedRows.length > 0 ?
                                        nestedRows.map((nested, index) => (
                                            row[nested.key].map((element, nestedIndex) => (<StyledTableRow key={nestedIndex}>
                                                <StyledTableCell component="th" scope="row">
                                                    {element}
                                                </StyledTableCell>
                                            </StyledTableRow>))

                                        ))
                                        : null}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
}

const CollapsibleTable = ({ columns, tableSize, rows, nestedColumns, nestedRows, nestedTitle }) => {
    return (
        <Table size={tableSize}>
            <TableHead>
                <StyledTableRow>
                    <StyledTableCell />
                    {columns && columns.length > 0 ?
                        columns.map(col => (
                            <StyledTableCell key={col.key}>{col.name}</StyledTableCell>
                        ))
                        : null}
                </StyledTableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <Row key={row.name} row={row} nestedColumns={nestedColumns} nestedRows={nestedRows} nestedTitle={nestedTitle} />
                ))}
            </TableBody>
        </Table>
    )
}


CollapsibleTable.prototype = {
    tableSize: PropTypes.string,
    columns: PropTypes.array,
    rows: PropTypes.array,
    nestedColumns: PropTypes.array,
    nestedRows: PropTypes.array,
    nestedTitle: PropTypes.string
}

CollapsibleTable.defaultProps = {
    tableSize: '',
    columns: [],
    rows: [],
    nestedColumns: [],
    nestedRows: [],
    nestedTitle: ''
}


export default CollapsibleTable