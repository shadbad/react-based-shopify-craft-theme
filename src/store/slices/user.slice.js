/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const sync = createAsyncThunk('user', (arg, thunkAPI) => {

    const { getState } = thunkAPI;
    const { user } = getState();

    if (user.info.email === '') return {};

    if (process.env.NODE_ENV === 'production') {

        const url = `${process.env.REACT_APP_API_BASE}/user`;
        return axios.post(url, user.info);

    }

    return new Promise((resolve) => {

        setTimeout(() => resolve(1), 3000);

    });

});

const userSlice = createSlice({
    name: 'user',

    initialState: {
        info: {
            email: ''
        },
        synced: false,
        isSyncing: false,
        error: ''
    },

    reducers: {

        setEmail: (state, action) => {

            state.info.email = action.payload;
            state.synced = false;

        }

    },

    extraReducers: (builder) => {

        builder.addCase(sync.pending, (state, action) => {

            state.isSyncing = true;
            state.synced = false;
            state.error = '';

        });

        builder.addCase(sync.fulfilled, (state, action) => {

            state.isSyncing = false;
            state.synced = true;
            state.error = '';

        });

        builder.addCase(sync.rejected, (state, action) => {

            state.isSyncing = false;
            state.synced = false;
            state.error = action.payload.error.message;

        });

    }
});

export const actions = { ...userSlice.actions, sync };

export default userSlice.reducer;
