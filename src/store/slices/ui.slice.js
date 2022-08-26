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

        toggleSearchBar: (state) => {

            state.isSearchBarVisible = !state.isSearchBarVisible;

        }

    }

});

export const actions = { ...uiSlice.actions };

export default uiSlice.reducer;
