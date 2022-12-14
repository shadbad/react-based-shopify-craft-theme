import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useWindowResizeEffect, useOutsideClickDetector, useBodyLocker } from 'hooks';
import { actions as uiActions } from 'store/slices/ui.slice';
import { ButtonIcon } from 'components/molecules';
import { SearchForm } from 'components/organisms';

import './search-bar.scss';

const SearchBar = function () {

    const dispatch = useDispatch();

    const bodyLocker = useBodyLocker(false);

    const isSearchBarVisible = useSelector((state) => state.ui.search.isVisible);

    const [topPosition, setTopPosition] = useState(0);

    useOutsideClickDetector('.search-bar__wrapper, .app-bar__search', () => dispatch(uiActions.setSearchVisibility(false)));

    useWindowResizeEffect(() => {

        const universalBanner = document.querySelector('header > .universal-banner');

        if (!universalBanner) return;

        setTopPosition(() => parseFloat(universalBanner.getBoundingClientRect().height));

    });

    useEffect(() => bodyLocker(isSearchBarVisible), [isSearchBarVisible]);

    return (

        <div className={`search-bar ${isSearchBarVisible ? 'visible' : ''}`} style={{ top: `${topPosition}px` }}>

            <div className="search-bar__wrapper">

                <SearchForm className="search-bar__form" focus={isSearchBarVisible} />

                <ButtonIcon
                    className="search-bar__button-close"
                    iconName="cross"
                    variant="expandOnHover"
                    onClick={() => dispatch(uiActions.setSearchVisibility(false))}
                />

            </div>

        </div>

    );

};

export { SearchBar };
