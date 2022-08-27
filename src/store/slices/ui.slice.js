/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({

    name: 'ui',

    initialState: {

        isMenuDrawerOpen: false,
        isSearchBarVisible: false

    },

    reducers: {

        toggleMenuDrawer: (state) => {

            state.isMenuDrawerOpen = !state.isMenuDrawerOpen;

        },

        setMenuDrawerStatus: (state, action) => {

            state.isMenuDrawerOpen = action.payload;

        },

        toggleSearchBarVisibility: (state) => {

            state.isSearchBarVisible = !state.isSearchBarVisible;

        },

        setSearchBarVisibility: (state, action) => {

            state.isSearchBarVisible = action.payload;

        }

    }

});

export const actions = { ...uiSlice.actions };

export default uiSlice.reducer;
