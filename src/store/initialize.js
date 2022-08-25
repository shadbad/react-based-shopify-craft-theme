import store from 'store/store';
import { actions as announcementActions } from './slices/announcementSlice';

const initializeStore = function () {

    const unsubscribe = store.subscribe(() => { });

    store.dispatch(announcementActions.fetch());

    unsubscribe();

};

export default initializeStore;
