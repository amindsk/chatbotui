import { Button, Grid, TextField, Box, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ImplicitTable from "../../components/mui/Table/ImplicitTable";
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { handleAddLoading, handleRemoveLoading } from "../../common/commonSlice";
import { useDispatch } from "react-redux";
import { openErrorToast } from "../../common/toast";
const Chat = () => {
    const theme = useTheme();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const getResponse = async (message) => {
        dispatch(handleAddLoading());
        try {
            const { data } = await axios({
                url: 'http://localhost:8001/chat/send-msg-sql',
                method: 'POST',
                data: { user_msg: message },
            });
            setMessages(() => {
                return [...messages, {
                    id: messages.length,
                    message,
                    ...data,
                    df: JSON.parse(data.df)
                }]
            });
        }
        catch (err) {
            openErrorToast("Unable to get reponse");
            console.log("Error", err);
        }
        dispatch(handleRemoveLoading());
    }

    const getGraph = async (id, message, graphType, dataFrame) => {
        dispatch(handleAddLoading());
        try {
            const { data } = await axios({
                url: 'http://localhost:8001/chat/send-msg-graph',
                method: 'POST',
                data: {
                    user_msg: message,
                    graph_type: graphType,
                    df: JSON.stringify(dataFrame)
                },
                responseType: 'blob',
            });
            setMessages(() => messages.map(msg => {
                if (msg.id === id) {
                    return {
                        ...msg,
                        graph: window.URL.createObjectURL(data)
                    }
                }
                return msg
            }));
        }
        catch (err) {
            openErrorToast("Unable to get graph");
            console.log("Error", err);
        }
        dispatch(handleRemoveLoading());
    }

    const getTable = (df) => {
        const columns = Object.keys(df[0]);
        return (<ImplicitTable
            tableSize="small"
            showHeader={true}
            styledRows={true}
            columns={columns.map(col => ({ name: col, key: col }))}
            rows={df}
        />);
    }

    return (
        <Box sx={{
            height: 'calc(100vh - 85px)',
            width: '100%'
        }}>
            <Box sx={{ height: '100%', width: '20%', float: 'left' }}>
                <Box sx={{ height: '100%', width: 'calc(100% - 20px)', borderRight: '1px solid black', padding: '10px' }}>
                    <Button
                        variant="contained"
                        sx={{ mt: '10px' }}
                        fullWidth
                        size="small"
                    >
                        Previous Chat
                    </Button>
                </Box>
            </Box>
            <Box sx={{ height: '100%', width: '80%', float: 'left', position: 'relative' }}>
                <Box sx={{
                    height: messages.length > 0 ? 'calc(100vh - 140px)' : 'calc(100vh - 200px)',
                    overflowY: 'scroll'
                }}>
                    {
                        messages.map(message => {
                            return <>
                                <Box sx={{
                                    width: '60%',
                                    backgroundColor: '#FA5C7C',
                                    float: 'right',
                                    clear: 'both',
                                    padding: '10px',
                                    margin: '5px',
                                    borderRadius: '5px',
                                    border: '1px solid black',
                                    boxShadow: '0px 0px 5px #333, 0px 0px 10px #333'
                                }}>
                                    <p style={{ margin: 0, fontSize: '20px', fontFamily: "'Open Sans', sans-serif" }}>
                                        {message.message}
                                    </p>
                                </Box>





                                <Box sx={{
                                    width: '60%',
                                    backgroundColor: "#0acf97",
                                    border: '1px solid black',
                                    float: 'left',
                                    clear: 'both',
                                    padding: '10px',
                                    margin: '5px',
                                    borderRadius: '5px',
                                    boxShadow: '0px 0px 5px #333, 0px 0px 10px #333',
                                    wordBreak: 'break-all'
                                }}>
                                    <code style={{ fontSize: '20px' }}>
                                        {message.sql_query}
                                    </code>
                                </Box>
                                <Box sx={{
                                    width: '60%',
                                    backgroundColor: "#0acf97",
                                    border: '1px solid black',
                                    float: 'left',
                                    clear: 'both',
                                    padding: '10px',
                                    margin: '5px',
                                    borderRadius: '5px',
                                    boxShadow: '0px 0px 5px #333, 0px 0px 10px #333'
                                }}>
                                    {getTable(message.df)}
                                </Box>





                                {!message.graph && (
                                    <Box sx={{
                                        width: '60%',
                                        // backgroundColor: "#0acf97",
                                        // border: '1px solid black',
                                        float: 'left',
                                        clear: 'both',
                                        padding: '10px',
                                        margin: '5px',
                                        borderRadius: '5px',
                                        // boxShadow: '0px 0px 5px #333, 0px 0px 10px #333'
                                    }}>
                                        <Box
                                            sx={{
                                                fontSize: '20px',
                                                fontFamily: 'sans-serif',
                                                color: "#0acf97",
                                                float: 'left',
                                                clear: 'both',
                                                textAlign: 'center',
                                                width: '100%'
                                            }}
                                        >How do you want to visualize the data frame ?</Box>
                                        <Box sx={{
                                            clear: 'both'
                                        }}>
                                            <Box
                                                sx={(theme) => ({
                                                    backgroundColor: theme.palette.secondary.dark,
                                                    width: '40%',
                                                    margin: '10px 10px',
                                                    fontSize: '20px',
                                                    fontFamily: 'sans-serif',
                                                    padding: '10px',
                                                    borderRadius: '5px',
                                                    border: '1px solid black',
                                                    float: 'left',
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.secondary.main,
                                                        cursor: 'pointer'
                                                    }
                                                })}
                                                onClick={async () => await getGraph(message.id, message.message, 'use intelligence', message.df)}
                                            >Use Intelligence</Box>
                                            <Box
                                                sx={(theme) => ({
                                                    backgroundColor: theme.palette.secondary.dark,
                                                    width: '40%',
                                                    margin: '10px 10px',
                                                    fontSize: '20px',
                                                    fontFamily: 'sans-serif',
                                                    padding: '10px',
                                                    borderRadius: '5px',
                                                    border: '1px solid black',
                                                    float: 'left',
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.secondary.main,
                                                        cursor: 'pointer'
                                                    }
                                                })}
                                                onClick={async () => await getGraph(message.id, message.message, 'pie chart', message.df)}
                                            >Pie Chart</Box>
                                            <Box
                                                sx={(theme) => ({
                                                    backgroundColor: theme.palette.secondary.dark,
                                                    width: '40%',
                                                    margin: '10px 10px',
                                                    fontSize: '20px',
                                                    fontFamily: 'sans-serif',
                                                    padding: '10px',
                                                    borderRadius: '5px',
                                                    border: '1px solid black',
                                                    float: 'left',
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.secondary.main,
                                                        cursor: 'pointer'
                                                    }
                                                })}
                                                onClick={async () => await getGraph(message.id, message.message, 'bar chart', message.df)}
                                            >Bar Chart</Box>
                                            <Box
                                                sx={(theme) => ({
                                                    backgroundColor: theme.palette.secondary.dark,
                                                    width: '40%',
                                                    margin: '10px 10px',
                                                    fontSize: '20px',
                                                    fontFamily: 'sans-serif',
                                                    padding: '10px',
                                                    borderRadius: '5px',
                                                    border: '1px solid black',
                                                    float: 'left',
                                                    '&:hover': {
                                                        backgroundColor: theme.palette.secondary.main,
                                                        cursor: 'pointer'
                                                    }
                                                })}
                                                onClick={async () => await getGraph(message.id, message.message, 'line graph', message.df)}
                                            >Line Graph</Box>
                                        </Box>
                                    </Box>
                                )}

                                {message.graph && (
                                    <Box sx={{
                                        width: 'calc(60% + 20px)',
                                        backgroundColor: "#0acf97",
                                        float: 'left',
                                        clear: 'both',
                                        // padding: '10px',
                                        margin: '5px',
                                        borderRadius: '5px',
                                    }}>
                                        <Box sx={(theme) => ({
                                            width: 'calc(100% - 10px)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            fontSize: '20px',
                                            fontFamily: 'sans-serif',
                                            background: theme.palette.secondary.dark,
                                            borderRadius: '5px',
                                            padding: '5px',
                                            color: 'white',
                                            fontWeight: 'bold'
                                        })}>
                                            <p style={{ margin: '0' }}>Pin to dashboard</p>
                                            <IconButton
                                                onClick={() => {
                                                    setMessages(() => messages.map(msg => {
                                                        if (msg.id === message.id) {
                                                            return {
                                                                ...msg,
                                                                pinned: !message.pinned
                                                            }
                                                        }
                                                        return msg
                                                    }));
                                                }}
                                                disableRipple
                                                size="small"
                                            >
                                                {message.pinned ? (
                                                    <PushPinIcon fontSize="large" color="primary" />
                                                ) : (
                                                    <PushPinOutlinedIcon fontSize="large" color="primary" />
                                                )}
                                            </IconButton>
                                        </Box>
                                        <iframe src={message.graph} style={{ width: '100%', height: '350px', border: 'none', overflow: 'auto' }}></iframe>
                                    </Box>
                                )}
                            </>;
                        })
                    }
                </Box>
                {messages.length === 0 && (
                    <Box sx={{
                        position: 'absolute',
                        left: '10%',
                        bottom: '80px',
                        height: '75px',
                        width: '80%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            width: '100%',
                        }}>
                            <Box
                                sx={(theme) => ({
                                    margin: '10px 0px',
                                    width: '90%',
                                    fontSize: '1rem',
                                    fontFamily: 'sans-serif',
                                    background: theme.palette.primary.dark,
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.main,
                                        cursor: 'pointer'
                                    }
                                })}
                                onClick={async () => getResponse('What sort of data do you have?')}
                            >What sort of data do you have?</Box>
                            <Box
                                sx={(theme) => ({
                                    margin: '10px 0px',
                                    width: '90%',
                                    fontSize: '1rem',
                                    fontFamily: 'sans-serif',
                                    background: theme.palette.primary.dark,
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.main,
                                        cursor: 'pointer'
                                    }
                                })}
                                onClick={async () => getResponse('Which month of data do you posses?')}
                            >Which month of data do you posses?</Box>
                        </Box>
                        <Box
                            sx={{
                                width: '100%',
                            }}
                        >
                            <Box
                                sx={(theme) => ({
                                    margin: '10px 0px',
                                    width: '90%',
                                    fontSize: '1rem',
                                    fontFamily: 'sans-serif',
                                    background: theme.palette.primary.dark,
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.main,
                                        cursor: 'pointer'
                                    }
                                })}
                                onClick={async () => getResponse('What is the count of rides for each day?')}
                            >What is the count of rides for each day?</Box>
                            <Box
                                sx={(theme) => ({
                                    margin: '10px 0px',
                                    width: '90%',
                                    fontSize: '1rem',
                                    fontFamily: 'sans-serif',
                                    background: theme.palette.primary.dark,
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '5px',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.main,
                                        cursor: 'pointer'
                                    }
                                })}
                                onClick={async () => getResponse('What sort of data do you have?')}
                            >What sort of data do you have?</Box>
                        </Box>
                    </Box>
                )}
                <Box sx={{
                    position: 'absolute',
                    left: '10%',
                    bottom: '0px',
                    height: '75px',
                    width: '80%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        width: '80%',
                        float: 'left'
                    }}>
                        <TextField
                            fullWidth
                            placeholder="Total rides ?"
                            size="small"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </Box>
                    <Box sx={{
                        width: '20%',
                        float: 'left',
                        textAlign: 'center'
                    }}>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={async () => {
                                await getResponse(message);
                                setMessage('');
                            }}
                        >Send</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Chat;