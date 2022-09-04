import { configureStore } from '@reduxjs/toolkit';

import announcement from './slices/announcement.slice';
import ui from './slices/ui.slice';
import category from './slices/category.slice';
import product from './slices/product.slice';
import content from './slices/content.slice';
import blog from './slices/blog.slice';

const store = configureStore({

    reducer: { announcement, category, ui, product, content, blog },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]

});

export default store;
