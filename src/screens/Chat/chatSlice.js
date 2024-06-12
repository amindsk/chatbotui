import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { sendMessageApi, sendMessageGraphApi } from '../../api';
import { CHAT_SLICE_NAME, SEND_MESSAGE, SEND_MESSAGE_GRAPH } from './constants';
import { v4 as uuidv4 } from 'uuid';

export const sendMessage = createAsyncThunk(SEND_MESSAGE, async ({ message }) => {
    try {
        const { data } = await sendMessageApi({ user_msg: message });
        return {
            message,
            data
        };
    }
    catch (err) {
        throw Error(err);
    }
});

export const sendMessageGraph = createAsyncThunk(SEND_MESSAGE_GRAPH, async ({ messageId, message, graph, df }) => {
    try {
        const { data } = await sendMessageGraphApi({ user_msg: message, graph_type: graph, df: JSON.stringify(df) });
        return {
            messageId,
            data
        };
    }
    catch (err) {
        console.log(err);
        throw Error(err);
    }
});



const chatSlice = createSlice({
    name: CHAT_SLICE_NAME,
    initialState: {
        messages: [],
        message: '',
        loading: false
    },
    reducers: {
        handleChangeMessage(state, action) {
            state.message = action.payload;
        },
        handleTogglePinToDashboard(state, action) {
            const messageIndex = state.messages.findIndex(msg => msg.id === action.payload);
            state.messages[messageIndex].pinnedToDashboard = !state.messages[messageIndex].pinnedToDashboard;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(sendMessage.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            state.messages.push({
                id: uuidv4(),
                message: action.payload.message,
                ...action.payload.data,
                df: JSON.parse(action.payload.data.df)
            });
            state.message = '';
            state.loading = false;
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.loading = false;
        });

        builder.addCase(sendMessageGraph.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(sendMessageGraph.fulfilled, (state, action) => {
            const messageIndex = state.messages.findIndex(msg => msg.id === action.payload.messageId);
            var binaryData = [];
            binaryData.push(action.payload.data);
            state.messages[messageIndex] = {
                ...state.messages[messageIndex],
                graph: window.URL.createObjectURL(new Blob(binaryData, {type: "text/html"})),
                pinnedToDashboard: false
            };
            state.loading = false;
        });
        builder.addCase(sendMessageGraph.rejected, (state, action) => {
            state.loading = false;
        });
    }
});

export const getMessage = state => state.chat.message;
export const getMessages = state => state.chat.messages;
export const getLoading = state => state.chat.loading;

export const {
    handleChangeMessage,
    handleTogglePinToDashboard
} = chatSlice.actions;

export default chatSlice.reducer;