import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    DASHBOARD_SLICE_NAME,
    FETCH_DASHBOARD_WIDGETS,
    FETCH_WIDGET
} from './constants';
import { getDashboardWidgetsApi, getWidgetApi } from '../../api';
import { v4 as uuidv4 } from 'uuid';

export const fetchDashboardWidgets = createAsyncThunk(FETCH_DASHBOARD_WIDGETS, async () => {
    try {
        const { data } = await getDashboardWidgetsApi();
        return data;
    }
    catch (err) {
        throw Error(err);
    }
});

export const fetchWidget = createAsyncThunk(FETCH_WIDGET, async ({ question, visualization }) => {
    try {
        const { data } = await getWidgetApi({ user_msg: question, graph_type: visualization });
        return data;
    }
    catch (err) {
        throw Error(err);
    }
});

const dashboardSlice = createSlice({
    name: DASHBOARD_SLICE_NAME,
    initialState: {
        widgetContainers: [],
        loading: false
    },
    reducers: {
        handleAddWidget(state, action) {

            const { url, id } = action.payload;

            state.widgetContainers.push({
                id: uuidv4(),
                widgets: [{
                    id,
                    url,
                    width: 500,
                    height: 300
                }]
            });

        },
        handleRemoveWidget(state, action) {

            const { id } = action.payload;

            state.widgetContainers = state.widgetContainers.reduce((acc, curr) => {
                const widgets = curr.widgets.filter(widget => widget.id !== id);
                if (widgets.length > 0) {
                    return [...acc, { ...curr, widgets }];
                }
                return acc;
            }, []);

        },
        handleChangeWidgetContainer(state, action) {
            const fromIndex = state.widgetContainers.findIndex(widgetContainer => widgetContainer.id === action.payload.fromContainer);
            const widget = state.widgetContainers[fromIndex].widgets.find(widget => widget.id === action.payload.widget);
            state.widgetContainers[fromIndex].widgets = state.widgetContainers[fromIndex].widgets.filter(widget => widget.id !== action.payload.widget);
            if (state.widgetContainers[fromIndex].widgets.legth === 0) {
                state.widgetContainers = state.widgetContainers.filter(widgetContainer => widgetContainer.id !== action.payload.fromContainer);
            }
            const toIndex = state.widgetContainers.findIndex(widgetContainer => widgetContainer.id === action.payload.toContainer);
            const maxHeight = state.widgetContainers[toIndex].widgets.reduce((acc, curr) => {
                if (curr.height > acc) {
                    acc = curr.height;
                }
                return acc;
            }, 0);
            state.widgetContainers[toIndex].widgets.push({ ...widget, height: maxHeight });
        },
        handleChangeWidgetSize(state, action) {
            const containerIndex = state.widgetContainers.findIndex(widgetContainer => widgetContainer.id === action.payload.containerId);
            const widgetIndex = state.widgetContainers[containerIndex].widgets.findIndex(widget => widget.id === action.payload.widgetId);
            state.widgetContainers[containerIndex].widgets[widgetIndex].width = action.payload.width;
            state.widgetContainers[containerIndex].widgets[widgetIndex].height = action.payload.height;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDashboardWidgets.fulfilled, (state, action) => {
        });
        builder.addCase(fetchDashboardWidgets.pending, (state, action) => state.loading = true);
        builder.addCase(fetchWidget.fulfilled, (state, action) => {
            var binaryData = [];
            binaryData.push(action.payload);
            state.widgetContainers.push({
                id: uuidv4(),
                widgets: [{
                    id: uuidv4(),
                    url: window.URL.createObjectURL(new Blob(binaryData, { type: "text/html" })),
                    width: 500,
                    height: 300
                }]
            });

            state.loading = false;
        })
        builder.addCase(fetchDashboardWidgets.rejected, (state, action) => state.loading = false);
    }
});

export const getWidgetContainers = (state) => state.dashboard.widgetContainers;
export const getDashboardLoading = (state) => state.dashboard.loading;

export const {
    handleChangeWidgetContainer,
    handleChangeWidgetSize,
    handleAddWidget,
    handleRemoveWidget
} = dashboardSlice.actions;

export default dashboardSlice.reducer;