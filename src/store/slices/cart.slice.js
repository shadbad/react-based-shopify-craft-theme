/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const loadFromLocalStorage = createAsyncThunk('cart/loadFromLocalStorage', (arg, thunkAPI) => {

    const localStorageData = window.localStorage.getItem('cart');

    if (localStorageData) {

        return JSON.parse(localStorageData);

    }

    return [];

});

const cartSlice = createSlice({

    name: 'cart',

    initialState: {
        isLoading: false,
        error: '',
        items: []
    },

    reducers: {
        add: (state, action) => {

            const { productId, quantity } = action.payload;

            const entry = state.items.find((item) => item.productId === productId);

            if (entry) {

                state.items = [...state.items.filter((item) => item.productId !== productId), {
                    productId,
                    quantity: entry.quantity + quantity
                }];

            } else {

                state.items = [...state.items, { productId, quantity }];

            }

        },

        remove: (state, action) => {

            state.items = state.items.filter((item) => item.productId === action.payload);

        },

        update: (state, action) => {

            const { productId, quantity } = action.payload;

            state.items = state.items
                .filter((item) => item.productId !== productId)
                .push({ productId, quantity });

        },

        clear: (state, action) => {

            state.items = [];

        }
    },

    extraReducers: (builder) => {

        builder.addCase(loadFromLocalStorage.pending, (state, action) => {

            state.isLoading = true;
            state.error = '';
            state.items = [];

        });

        builder.addCase(loadFromLocalStorage.fulfilled, (state, action) => {

            state.isLoading = false;
            state.error = '';
            state.items = action.payload;

        });

        builder.addCase(loadFromLocalStorage.rejected, (state, action) => {

            state.isLoading = false;
            state.error = action.error.message;
            state.items = [];

        });

    }

});

const listener = {

    predicate: (action, { cart: currentState }, { cart: originalState }) => Object.keys(cartSlice.actions).map((a) => `cart/${a}`).includes(action.type),

    effect: (action, listenerApi) => {

        const { getState } = listenerApi;
        const { cart } = getState();

        window.localStorage.setItem('cart', JSON.stringify(cart.items));

    }
};

export const listenerConfig = listener;

export const actions = { ...cartSlice.actions, loadFromLocalStorage };

export default cartSlice.reducer;
