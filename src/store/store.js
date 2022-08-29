import { configureStore } from '@reduxjs/toolkit';

import announcement from './slices/announcement.slice';
import ui from './slices/ui.slice';
import category from './slices/category.slice';
import product from './slices/product.slice';

const store = configureStore({

    reducer: { announcement, category, ui, product },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]

});

export default store;
