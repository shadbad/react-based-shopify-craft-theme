import store from 'store/store';
import { actions as announcementActions } from './slices/announcement.slice';
import { actions as categoryActions } from './slices/category.slice';
import { actions as productActions } from './slices/product.slice';

const initializeStore = function () {

    const unsubscribe = store.subscribe(() => { });

    store.dispatch(announcementActions.fetch());
    store.dispatch(categoryActions.fetch());
    store.dispatch(productActions.fetch());

    unsubscribe();

};

export default initializeStore;
