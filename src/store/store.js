import { configureStore } from '@reduxjs/toolkit';

import announcement from './slices/announcementSlice';

const store = configureStore({

    reducer: { announcement },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()]
});

export default store;
