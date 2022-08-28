import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField } from 'components/atoms';
import { ButtonIcon } from 'components/molecules';
import { SearchPredictiveResult } from 'components/organisms';
import { actions as uiActions } from 'store/slices/ui.slice';
import './search-form.scss';

const SearchForm = React.memo(function ({ className }) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const query = useSelector((state) => state.ui.search.query);

    const handle = {

        submit: useCallback(() => {

            if (query.trim() !== '') navigate(`/search/${query}`);

        }),

        queryChange: useCallback(({ target }) => {

            dispatch(uiActions.setSearchQuery(target.value));

        })

    };

    return (
        <form className={`search-form ${className}`}>

            <TextField
                className="search-form__input"
                type="text"
                value={query}
                label="Search"
                onChange={handle.queryChange}
                onEnterPress={handle.submit}
            />

            <ButtonIcon
                className="search-form__button-submit"
                iconName="search"
                onClick={handle.submit}
            />

            <SearchPredictiveResult className="search-form__result" />

        </form>
    );

});

SearchForm.propTypes = {
    className: PropTypes.string
};

SearchForm.defaultProps = {
    className: ''
};

export { SearchForm };
