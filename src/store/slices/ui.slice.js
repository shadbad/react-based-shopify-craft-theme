/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({

    name: 'ui',

    initialState: {

        isMenuDrawerOpen: false,
        search: {
            isVisible: false,
            query: ''
        }

    },

    reducers: {

        toggleMenuDrawer: (state) => {

            state.isMenuDrawerOpen = !state.isMenuDrawerOpen;

        },

        setMenuDrawerStatus: (state, action) => {

            state.isMenuDrawerOpen = action.payload;

        },

        toggleSearchVisibility: (state) => {

            state.search.isVisible = !state.search.isVisible;

        },

        setSearchVisibility: (state, action) => {

            state.search.isVisible = action.payload;

        },

        setSearchQuery: (state, action) => {

            state.search.query = action.payload;

        }

    }

});

export const actions = { ...uiSlice.actions };

export default uiSlice.reducer;
