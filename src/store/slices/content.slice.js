/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetch = createAsyncThunk('content/fetch', async (arg, thunkAPI) => {

    const { getState } = thunkAPI;
    const { content } = getState();

    if (Object.keys(content.data).length === 0) {

        const { CONTENT: data } = await import('../sample.json');

        return data;

        // TODO: complete the http request

    }

    return {};

});

const contentSlice = createSlice({
    name: 'content',

    initialState: {
        isLoading: false,
        error: '',
        data: {}
    },

    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(fetch.pending, (state, action) => {

            state.isLoading = true;
            state.data = {};
            state.error = '';

        });
        builder.addCase(fetch.fulfilled, (state, action) => {

            state.isLoading = false;
            state.data = action.payload;
            state.error = '';

        });
        builder.addCase(fetch.rejected, (state, action) => {

            state.isLoading = false;
            state.list = [];
            state.error = action.payload.error.message;

        });

    }
});

export const actions = { ...contentSlice.actions, fetch };

export default contentSlice.reducer;
