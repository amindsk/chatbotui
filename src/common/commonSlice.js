import { createSlice } from '@reduxjs/toolkit';
import { COMMON_SLICE_NAME } from './constants';
import { getItem, setItem } from '../utils/storage';
const commonSlice = createSlice({
    name: COMMON_SLICE_NAME,
    initialState: {
        loadings: 0,
        theme: getItem("theme") ? getItem("theme") : "dark"
    },
    reducers: {
        handleAddLoading: (state, action) => {
            state.loadings++;
        },
        handleRemoveLoading: (state, action) => {
            state.loadings--;
        },
        handleChangeTheme: (state, action) => {
            state.theme = action.payload
            setItem("theme", action.payload)
        },
        handleResetLoading: (state, action) => {
            state.loadings = 0
        }
    },
    extraReducers: builder => {

    }
});

export const { handleAddLoading, handleRemoveLoading, handleChangeTheme, handleResetLoading } = commonSlice.actions;

export const getLoadings = (state) => state.common.loadings;
export const getTheme = (state) => state.common.theme;

export default commonSlice.reducer;