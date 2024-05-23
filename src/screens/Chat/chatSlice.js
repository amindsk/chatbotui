import { createSlice } from '@reduxjs/toolkit';
import { CHAT_SLICE_NAME } from './constants';

const chatSlice = createSlice({
    name: CHAT_SLICE_NAME,
    initialState: {
    },
    reducers: {
    },
    extraReducers: {
    }
});

export const {  } = chatSlice.actions;

export default chatSlice.reducer;