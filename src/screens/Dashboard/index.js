import { Grid, Box, TextField, Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrop, useDrag } from "react-dnd";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { handleAddLoading, handleRemoveLoading } from "../../common/commonSlice";
import { useDispatch } from "react-redux";
import { openErrorToast } from "../../common/toast";
const Dashboard = () => {
    const theme = useTheme();
    const [files, setFiles] = useState([]);
    const [question, setQuestion] = useState('');
    const [visualization, setVisualization] = useState('');
    const dispatch = useDispatch();

    const getHtmlReponse = async (question, visualization) => {
        dispatch(handleAddLoading());
        try {
            const { data } = await axios({
                url: 'http://localhost:8001/chat/send-quick-graph-req',
                method: 'POST',
                data: {
                    user_msg: question,
                    graph_type: visualization
                },
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(data);
            setFiles([...files, url]);
        }
        catch (err) {
            openErrorToast("Unable to get graph");
            console.log(err);
        }
        dispatch(handleRemoveLoading());
    }


    //DUstbin
    const ItemTypes = {
        BOX: 'box',
    }
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }


    //Box
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { name: 'box' },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}!`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    const opacity = isDragging ? 0.4 : 1;

    return (
        <DndProvider backend={HTML5Backend}>
            <Box>
                <Box
                    sx={{
                        width: '100%',
                        height: '100px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            width: '30%',
                            margin: '0px 5px'
                        }}
                    >
                        <TextField
                            placeholder="Total rides ?"
                            fullWidth
                            size="small"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: '20%',
                            margin: '0px 5px'
                        }}
                    >
                        <FormControl fullWidth size="small">
                            <InputLabel>Visualization</InputLabel>
                            <Select
                                label="Visualization"
                                value={visualization}
                                onChange={(e) => setVisualization(e.target.value)}
                            >
                                <MenuItem value={'Use Intelligence'}>Use Intelligence</MenuItem>
                                <MenuItem value={'Pie Chart'}>Pie Chart</MenuItem>
                                <MenuItem value={'Bar Chart'}>Bar Chart</MenuItem>
                                <MenuItem value={'Line Graph'}>Line Graph</MenuItem>
                                <MenuItem value={'Table'}>Table</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                        sx={{
                            width: '10%',
                            margin: '0px 5px'
                        }}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={async () => await getHtmlReponse(question, visualization)}
                        >Add</Button>
                    </Box>
                </Box>
                {files.map(file => (
                    <Box
                        style={{
                            width: '100%',
                            padding: '5px',
                            backgroundColor,
                            overflowX: 'scroll',
                            overflowY: 'hidden',
                            display: 'flex'
                        }}
                        ref={drop}
                        data-testid="dustbin">
                        <div>
                            <iframe
                                src={file}
                                style={{ height: '200px', width: 'auto', overflow: 'scroll', border: 'none', backgroundColor: 'orange', opacity, border: '1px solid black' }}
                            // ref={drag}
                            // data-testid={`box`}
                            ></iframe>
                        </div>
                    </Box>
                ))}
            </Box>
        </DndProvider>
    );
}

export default Dashboard;