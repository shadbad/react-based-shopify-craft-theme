import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconLink, TextBox, ProductLink } from 'components/atoms';
import { useBodyLocker } from 'hooks';

import styles from './search-bar.module.scss';

const SearchBar = React.memo(function ({ visibility, setVisibility, className, topPosition, query, setQuery, searchResult }) {

    const navigate = useNavigate();

    useBodyLocker(visibility);

    const eventHandlers = {

        handleClose() {

            setVisibility((prevVisibility) => !prevVisibility);
            setQuery('');

        },

        handleValueChange({ target }) {

            setQuery(target.value);

        },

        handleSubmit() {

            if (query.trim() !== '') navigate(`/search/${query}`);

        }

    };

    return (
        <div className={`${styles.root} ${visibility ? styles.visible : ''} ${className}`} style={{ top: `${topPosition}px` }}>

            <div className={styles.wrapper}>

                <TextBox
                    type="text"
                    label="Search"
                    value={query}
                    handleValueChange={eventHandlers.handleValueChange}
                    iconName="search"
                    handleSubmit={eventHandlers.handleSubmit}
                    className={`${styles.textBox} ${searchResult.data.length > 0 ? styles.showingResult : ''} `}
                />

                {
                    (searchResult.status === 'done' && searchResult.data.length > 0) &&

                    (
                        <div className={styles.result}>

                            <span>Products</span>

                            <ul className={styles.resultList}>
                                {
                                    searchResult.data.map((product) => (
                                        <li key={product.id}>
                                            <ProductLink
                                                title={product.title}
                                                url={product.url}
                                                image={product.image}
                                                price={product.price}
                                                discount={product.discount}
                                            />
                                        </li>
                                    ))

                                }
                            </ul>

                            <a className={searchResult.data.length === 0 ? 'no-result' : ''} href={`/search/${query}`}>{`Search for '${query}'`}</a>

                        </div>
                    )
                }

                <IconLink url="#" iconName="cross" clickHandler={eventHandlers.handleClose} className={styles.closeBtn} />

            </div>

        </div>
    );

});

SearchBar.propTypes = {
    visibility: PropTypes.bool.isRequired,
    setVisibility: PropTypes.func.isRequired,
    className: PropTypes.string,
    topPosition: PropTypes.number,
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired,
    searchResult: PropTypes.shape({
        status: PropTypes.oneOf(['', 'loading', 'done', 'error']).isRequired,
        error: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            discount: PropTypes.number,
            url: PropTypes.string.isRequired
        }))
    }).isRequired
};

SearchBar.defaultProps = {
    className: '',
    topPosition: 0
};

export { SearchBar };
