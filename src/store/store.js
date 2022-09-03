import { configureStore } from '@reduxjs/toolkit';

import announcement from './slices/announcement.slice';
import ui from './slices/ui.slice';
import category from './slices/category.slice';
import product from './slices/product.slice';
import content from './slices/content.slice';

const store = configureStore({

    reducer: { announcement, category, ui, product, content },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]

});

export default store;
