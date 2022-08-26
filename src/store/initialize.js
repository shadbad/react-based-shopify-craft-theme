import store from 'store/store';
import { actions as announcementActions } from './slices/announcement.slice';
import { actions as categoryActions } from './slices/category.slice';

const initializeStore = function () {

    const unsubscribe = store.subscribe(() => { });

    store.dispatch(announcementActions.fetch());
    store.dispatch(categoryActions.fetch());

    unsubscribe();

};

export default initializeStore;
