import React, { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
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
import TablePaginationActions from './TablePaginationActions';
import { TABLE_TYPES, DRAGGABLE_ITEMS } from './constants';

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

export const DraggableRow = memo(({ row, columns, moveRow, findRow }) => {
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
      {columns.map((column, columnIndex) => <StyledTableCell key={columnIndex}>{row[column.key]}</StyledTableCell>)}
    </StyledTableRow>
  )
});


const MuiTable = ({
  hasPagination,
  tableSize,
  innerRef,
  sortable,
  findRow,
  moveRow,
  tableType,
  page,
  rowsPerPage,
  setPage,
  setRowsPerPage,
  rowsCount,
  tableHeight,
  columns,
  rows,
  children
}) => {

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
        <Table size={tableSize} ref={innerRef} stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col, index) => (
                <StyledTableCell key={index} align={col.align ? col.align : 'left'}>{col.name}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableType === TABLE_TYPES.IMPLICIT && hasPagination ?
              (rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row, rowIndex) => (
                <StyledTableRow key={rowIndex}>
                  {columns.map((column, columnIndex) => <StyledTableCell key={columnIndex}>{row[column.key]}</StyledTableCell>)}
                </StyledTableRow>
              ))
              : tableType === TABLE_TYPES.IMPLICIT && !hasPagination ?
                sortable ?
                  rows.map((row, rowIndex) => (
                    <DraggableRow key={rowIndex} id={row.id} row={row} columns={columns} moveRow={moveRow} findRow={findRow}>
                      {columns.map((column, columnIndex) => <StyledTableCell key={columnIndex}>{row[column.key]}</StyledTableCell>)}
                    </DraggableRow>
                  ))
                  : rows.map((row, rowIndex) => (
                    <StyledTableRow key={rowIndex}>
                      {columns.map((column, columnIndex) => <StyledTableCell key={columnIndex}>{Array.isArray(row[column.key]) ? row[column.key].join() : row[column.key]}</StyledTableCell>)}
                    </StyledTableRow>
                  ))
                : children
            }
          </TableBody>
        </Table>
      </TableContainer>
      {tableType === TABLE_TYPES.IMPLICIT && hasPagination ? (
        <TablePagination
          rowsPerPageOptions={[50, 100, 200, { label: 'All', value: -1 }]}
          colSpan={3}
          count={rowsCount}
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
      ) : null}
    </Paper>
  );
}

MuiTable.prototype = {
  hasPagination: PropTypes.bool,
  tableSize: PropTypes.string,
  innerRef: PropTypes.object,
  sortable: PropTypes.bool,
  findRow: PropTypes.func,
  moveRow: PropTypes.func,
  tableType: PropTypes.string,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  setPage: PropTypes.func,
  setRowsPerPage: PropTypes.func,
  rowsCount: PropTypes.number,
  tableHeight: PropTypes.number,
  columns: PropTypes.array,
  rows: PropTypes.array
}

MuiTable.defaultProps = {
  hasPagination: false,
  tableSize: '',
  sortable: false,
  findRow: () => { },
  moveRow: () => { },
  tableType: TABLE_TYPES.EXPLICIT,
  page: 0,
  rowsPerPage: 50,
  setPage: () => { },
  setRowsPerPage: () => { },
  rowsCount: 0,
  tableHeight: 500,
  columns: [],
  rows: []
}

export default MuiTable;