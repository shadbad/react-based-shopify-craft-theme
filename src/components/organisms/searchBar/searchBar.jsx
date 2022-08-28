import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useWindowResizeEffect, useOutsideClickDetector } from 'hooks';
import { actions as uiActions } from 'store/slices/ui.slice';
import { TextField } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';
import './search-bar.scss';

const SearchBar = function () {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const isSearchBarVisible = useSelector((state) => state.ui.search.isVisible);

    const query = useSelector((state) => state.ui.search.query);

    const [topPosition, setTopPosition] = useState(0);

    useOutsideClickDetector('.search-bar__wrapper, .app-bar__search', () => dispatch(uiActions.setSearchVisibility(false)));

    useWindowResizeEffect(() => {

        const universalBanner = document.querySelector('header > .universal-banner');

        if (!universalBanner) return;

        setTopPosition(() => parseFloat(universalBanner.getBoundingClientRect().height));

    });

    const handleSubmit = () => {

        if (query.trim() !== '') navigate(`/search/${query}`);

    };

    const handleQueryChange = ({ target }) => dispatch(uiActions.setSearchQuery(target.value));

    return (

        <div className={`search-bar ${isSearchBarVisible ? 'visible' : ''}`} style={{ top: `${topPosition}px` }}>

            <div className="search-bar__wrapper">

                <form className="search-bar__form">

                    <TextField
                        className="search-bar__input"
                        type="text"
                        label="Search"
                        onChange={handleQueryChange}
                        onEnterPress={handleSubmit}
                    />

                    <ButtonIcon
                        className="search_bar__button-submit"
                        iconName="search"
                        onClick={handleSubmit}
                    />

                    <ButtonIcon
                        className="search_bar__button-close"
                        iconName="cross"
                        variant="expandOnHover"
                        onClick={() => dispatch(uiActions.setSearchVisibility(false))}
                    />

                </form>

            </div>

        </div>

    );

};

export { SearchBar };
