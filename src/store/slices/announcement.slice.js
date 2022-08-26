/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetch = createAsyncThunk('announcement/fetch', async (arg, thunkAPI) => {

    const { getState } = thunkAPI;
    const { announcement } = getState();

    if (announcement.text === '' && announcement.url === '') {

        if (process.env.NODE_ENV !== 'production') {

            const { ANNOUNCEMENT: data } = await import('../sample.json');

            return data;

        }

        // TODO: complete the http request

    }

    return {};

});

const announcementSlice = createSlice({
    name: 'announcement',

    initialState: {

        isLoading: false,

        text: '',

        url: '',

        error: ''

    },

    reducers: {

    },

    extraReducers: (builder) => {

        builder.addCase(fetch.pending, (state) => {

            state.isLoading = true;
            state.text = '';
            state.url = '';
            state.error = '';

        });

        builder.addCase(fetch.fulfilled, (state, action) => {

            state.isLoading = false;
            state.text = action.payload.text;
            state.url = action.payload.url;
            state.error = '';

        });

        builder.addCase(fetch.rejected, (state, action) => {

            state.isLoading = false;
            state.text = '';
            state.url = '';
            state.error = action.payload.error.message;

        });

    }
});

export const actions = { ...announcementSlice.actions, fetch };

export default announcementSlice.reducer;
