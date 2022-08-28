import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as uiActions } from 'store/slices/ui.slice';
import { TextField } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';
import { useOutsideClickDetector, useWindowResizeEffect } from 'hooks';
import './search-bar.scss';

const SearchBar = function () {

    const isSearchBarVisible = useSelector((state) => state.ui.search.isVisible);

    const [topPosition, setTopPosition] = useState(0);

    const dispatch = useDispatch();

    useOutsideClickDetector('.search-bar__wrapper, .app-bar__search', () => dispatch(uiActions.setSearchVisibility(false)));

    useWindowResizeEffect(() => {

        const universalBanner = document.querySelector('header > .universal-banner');

        if (!universalBanner) return;

        setTopPosition(() => parseFloat(universalBanner.getBoundingClientRect().height));

    });

    return (

        <div className={`search-bar ${isSearchBarVisible ? 'visible' : ''}`} style={{ top: `${topPosition}px` }}>

            <div className="search-bar__wrapper">

                <TextField className="search-bar__input" type="text" label="Search" />

                <ButtonIcon
                    className="search_bar__button-close"
                    iconName="cross"
                    variant="expandOnHover"
                    onClick={() => dispatch(uiActions.setSearchVisibility(false))}
                />

            </div>

        </div>

    );

};

export { SearchBar };
