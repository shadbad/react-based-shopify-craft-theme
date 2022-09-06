/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetch = createAsyncThunk('blog/fetch', async (args, thunkAPI) => {

    const { getState } = thunkAPI;
    const { blog } = getState();

    if (blog.posts.length === 0) {

        const { BLOG: data } = await import('../sample.json');

        return data;

        // TODO: complete the http request

    }

    return {};

});

const blogSlice = createSlice({
    name: 'blog',

    initialState: {
        isLoading: false,
        error: '',
        posts: []
    },

    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(fetch.pending, (state, action) => {

            state.isLoading = true;
            state.error = '';
            state.posts = [];

        });

        builder.addCase(fetch.fulfilled, (state, action) => {

            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;

        });

        builder.addCase(fetch.rejected, (state, action) => {

            state.isLoading = false;
            state.error = action.error.message;
            state.posts = [];

        });

    }
});

export const actions = { ...blogSlice.actions, fetch };

export default blogSlice.reducer;
