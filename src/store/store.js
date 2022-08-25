import { configureStore } from '@reduxjs/toolkit';

import announcement from './slices/announcementSlice';
import ui from './slices/uiSlice';

const store = configureStore({

    reducer: { announcement, ui },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]

});

export default store;
