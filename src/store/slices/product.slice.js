/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetch = createAsyncThunk('product/fetch', async (arg, thunkAPI) => {

    const { getState } = thunkAPI;
    const { category } = getState();

    if (category.list.length === 0) {

        if (process.env.NODE_ENV !== 'production') {

            const { PRODUCTS: data } = await import('../sample.json');

            return data;

        }

        // TODO: complete the http request

    }

    return {};

});

const productSlice = createSlice({

    name: 'product',

    initialState: {

        isLoading: false,

        error: '',

        list: []

    },

    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(fetch.pending, (state, action) => {

            state.isLoading = true;
            state.error = '';
            state.list = [];

        });

        builder.addCase(fetch.fulfilled, (state, action) => {

            state.isLoading = false;
            state.error = '';
            state.list = action.payload;

        });

        builder.addCase(fetch.rejected, (state, action) => {

            state.isLoading = false;
            state.error = action.payload.error.message;
            state.list = [];

        });

    }

});

export const actions = { ...productSlice.actions, fetch };

export default productSlice.reducer;
