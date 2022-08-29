import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField } from 'components/atoms';
import { ButtonIcon, SearchPredictiveResult } from 'components/molecules';
import { actions as uiActions } from 'store/slices/ui.slice';
import './search-form.scss';

const SearchForm = React.memo(function ({ className }) {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const query = useSelector((state) => state.ui.search.query);

    const products = useSelector((state) => state.product.list);

    const helpers = {

        filterProducts: useCallback(() => {

            const keywords = query.toLowerCase().split(' ').filter((item) => item !== '');
            return products.filter((item) => keywords.some((keyword) => item.title.toLowerCase().includes(keyword))).slice(0, 4);

        })

    };

    const handle = {

        submit: useCallback(() => {

            if (query.trim() !== '') navigate(`/search/${query}`);

        }),

        queryChange: useCallback(({ target }) => {

            dispatch(uiActions.setSearchQuery(target.value));

        })

    };

    const filteredProducts = helpers.filterProducts(query, products);

    return (
        <form className={`search-form ${filteredProducts.length > 0 ? 'with-result' : ''} ${className}`}>

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

            <SearchPredictiveResult className="search-form__result" query={query} filteredProducts={filteredProducts} />

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
