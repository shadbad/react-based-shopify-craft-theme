import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import announcement from './slices/announcement.slice';
import ui from './slices/ui.slice';
import category from './slices/category.slice';
import product from './slices/product.slice';
import content from './slices/content.slice';
import blog from './slices/blog.slice';
import user from './slices/user.slice';
import cart, { listeners as cartListeners } from './slices/cart.slice';

const listenerMiddleware = createListenerMiddleware();

const store = configureStore({

    reducer: { announcement, category, ui, product, content, blog, user, cart },

    middleware: (getDefaultMiddleware) => [listenerMiddleware.middleware, ...getDefaultMiddleware()]

});

listenerMiddleware.startListening(cartListeners.AddToCartListener);
listenerMiddleware.startListening(cartListeners.ModifyListener);

export default store;
