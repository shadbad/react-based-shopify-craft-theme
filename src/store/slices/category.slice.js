/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetch = createAsyncThunk('category/fetch', async (args, thunkAPI) => {

    const { getState } = thunkAPI;
    const { category } = getState();

    if (category.list.length === 0) {

        return new Promise((resolve) => {

            setTimeout(async () => {

                const { CATEGORIES: data } = await import('../sample.json');

                resolve(data);

            }, 100); // if you want to simulate network delay increase this timer

        });

    }

    return {};

});

const categorySlice = createSlice({

    name: 'category',

    initialState: {

        list: [],

        isLoading: false,

        error: ''

    },

    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(fetch.pending, (state, action) => {

            state.isLoading = true;
            state.list = [];
            state.error = '';

        });

        builder.addCase(fetch.fulfilled, (state, action) => {

            state.isLoading = false;
            state.list = action.payload;
            state.error = '';

        });

        builder.addCase(fetch.rejected, (state, action) => {

            state.isLoading = false;
            state.list = [];
            state.error = action.payload.error.message;

        });

    }

});

export const actions = { ...categorySlice.actions, fetch };

export default categorySlice.reducer;
