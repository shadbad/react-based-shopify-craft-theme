import React from 'react';
import { MenuList } from 'components/molecules';
import { useSelector } from 'react-redux';

import './nav-bar.scss';

const NavBar = React.memo(function () {

    const categories = useSelector((state) => state.category);

    if (categories.isLoading) return <nav className="nav-bar--loading" />;

    if (!categories.isLoading && categories.error !== '') {

        // TODO: toast an appropriate message instead of console log

        console.error('NavBar organism: ', categories.error);

        return <menu className="nav-bar--error" />;

    }

    return (

        <nav className="nav-bar">

            <MenuList className="nav-bar__menu" variant="metro" links={categories.list} />

        </nav>

    );

});

export { NavBar };
