import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconLink, TextBox } from 'components/atoms';

import styles from './search-bar.module.scss';

const SearchBar = React.memo(function ({ searchBarVisibility, setSearchBarVisibility, className, topPosition }) {

    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    const eventHandlers = {

        handleClose() {

            setSearchBarVisibility((prevSearchBarVisibility) => !prevSearchBarVisibility);
            setQuery(() => '');

        },

        handleValueChange({ target }) {

            setQuery(() => target.value);

        },

        handleSubmit() {

            if (query.trim() !== '') navigate(`/search/${query}`);

        }

    };

    return (
        <div className={`${styles.root} ${searchBarVisibility ? styles.visible : ''} ${className}`} style={{ top: `${topPosition}px` }}>

            <div className={styles.wrapper}>

                <TextBox
                    type="text"
                    label="Search"
                    className={styles.textBox}
                    value={query}
                    handleValueChange={eventHandlers.handleValueChange}
                    iconName="search"
                    handleSubmit={eventHandlers.handleSubmit}
                />

                <IconLink url="#" iconName="cross" clickHandler={eventHandlers.handleClose} className={styles.closeBtn} />

            </div>

        </div>
    );

});

SearchBar.propTypes = {
    searchBarVisibility: PropTypes.bool.isRequired,
    setSearchBarVisibility: PropTypes.func.isRequired,
    className: PropTypes.string,
    topPosition: PropTypes.number
};

SearchBar.defaultProps = {
    className: '',
    topPosition: 0
};

export { SearchBar };
