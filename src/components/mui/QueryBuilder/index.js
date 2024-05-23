import { Button, Paper, TextField, Typography, useTheme } from '@mui/material';
import Box from '@mui/material/Box'
import React from 'react';
import { QUERY_EDITOR_TITLE } from './constants';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types'
const QueryBuilder = ({ rows, columns, handleApiRespons }) => {
    const [query, setQuery] = React.useState("")
    const theme = useTheme()
    return (
        <Paper elevation={10}>
            <Box>
                <Box sx={{
                    px: 4,
                    py: 2,
                    background: theme.palette.grey[200]
                }}>
                    <Typography component="h4" variant="h4">{QUERY_EDITOR_TITLE}</Typography>
                </Box>
                <Box sx={{
                    px: 4,
                    py: 2,
                }}>

                    <TextField
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                        fullWidth
                        multiline
                        rows={5}
                        placeholder="select * from table"
                        sx={{
                            mb: 1
                        }}
                    />
                    <Button variant='contained' sx={{
                        background: theme.palette.grey[900],
                        color: "#fff",
                        px: 2,
                        mb: 3
                    }} onClick={() => handleApiRespons(query)} >Execute Query</Button>
                    {rows && rows.length > 0 ? <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
                            checkboxSelection
                            disableSelectionOnClick
                            experimentalFeatures={{ newEditingApi: true }}
                        />
                    </Box> : null}
                </Box>
            </Box>
        </Paper>
    )
}


QueryBuilder.propType = {
    rows: PropTypes.array.isReqyured,
    columns: PropTypes.array.isReqyured,
    handleApiRespons: PropTypes.func.isRequired
}

QueryBuilder.defaultProps = {
    rows: [],
    columns: [],
    handleApiRespons: () => { }
}

export default QueryBuilder;