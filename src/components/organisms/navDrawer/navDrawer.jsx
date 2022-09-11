import React, { useState } from 'react';
import { MenuList } from 'components/molecules';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowResizeEffect, useOutsideClickDetector, useBodyLocker } from 'hooks';
import { actions as uiActions } from 'store/slices/ui.slice';
import './nav-drawer.scss';

const NavDrawer = React.memo(function () {

    const [topPosition, setTopPosition] = useState(0);

    const categories = useSelector((state) => state.category);

    const isMenuDrawerOpen = useSelector((state) => state.ui.isMenuDrawerOpen);

    const dispatch = useDispatch();

    useWindowResizeEffect(() => {

        const header = document.querySelector('#root > header');

        if (!header) return;

        setTopPosition(() => parseFloat(header.getBoundingClientRect().height));

    });

    useOutsideClickDetector('#root > aside, .app-bar__menu', () => {

        dispatch(uiActions.setMenuDrawerStatus(false));

    }, []);

    useBodyLocker(isMenuDrawerOpen);

    const handle = {
        itemClick: () => dispatch(uiActions.setMenuDrawerStatus(false))
    };

    if (categories.isLoading) return <aside className="nav-drawer--loading" />;

    if (!categories.isLoading && categories.error !== '') {

        // TODO: toast an appropriate message instead of console log

        console.error('NavDrawer organism: ', categories.error);

        return <menu className="nav-drawer--error" />;

    }

    return (

        <>
            <aside className={`nav-drawer ${isMenuDrawerOpen ? 'expand' : ''}`} style={{ top: `${topPosition}px` }}>

                <MenuList className="nav-drawer__menu" variant="stack" links={categories.list} onItemClick={handle.itemClick} />

            </aside>

            <span className={`nav-drawer__body-cover ${isMenuDrawerOpen ? 'expand' : ''}`} style={{ top: `${topPosition}px` }} />
        </>
    );

});

export { NavDrawer };
