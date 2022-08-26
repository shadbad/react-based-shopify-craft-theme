import { configureStore } from '@reduxjs/toolkit';

import announcement from './slices/announcement.slice';
import ui from './slices/ui.slice';
import category from './slices/category.slice';

const store = configureStore({

    reducer: { announcement, category, ui },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]

});

export default store;
