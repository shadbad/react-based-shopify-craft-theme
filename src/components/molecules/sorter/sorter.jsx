/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectBox, SelectOption } from 'components/molecules';
import './sorter.scss';

const Sorter = React.memo(function ({ className, collection, config, setSortedCollection, selectedSortOption, setSelectedSortOption }) {

    const apply = {

        sorter: useCallback(() => {

            const sortConfig = config.find((item) => item.key === selectedSortOption);

            return collection.sort(sortConfig.compare);

        })
    };

    const handle = {

        sortOptionClick: (optionKey) => setSelectedSortOption(() => optionKey)

    };

    useEffect(() => {

        setSortedCollection(() => [...apply.sorter(selectedSortOption, collection)]);

    }, [collection, selectedSortOption]);

    return (
        <div className={`sorter ${className}`}>

            <span className="sorter__title">Sort by:</span>

            <SelectBox
                title={config.find((item) => item.key === selectedSortOption).title}
                className="list-product__sort-options"
            >

                {
                    config.map((item) => (

                        <SelectOption
                            key={item.key}
                            keyValue={item.key}
                            label={item.title}
                            selected={selectedSortOption === item.key}
                            onClick={handle.sortOptionClick}
                        />

                    ))
                }

            </SelectBox>

        </div>
    );

});

Sorter.propTypes = {
    className: PropTypes.string,
    collection: PropTypes.array.isRequired,
    config: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        title: PropTypes.string,
        compare: PropTypes.func
    })).isRequired,
    setSortedCollection: PropTypes.func.isRequired,
    selectedSortOption: PropTypes.string.isRequired,
    setSelectedSortOption: PropTypes.func.isRequired
};

Sorter.defaultProps = {
    className: ''
};

export { Sorter };
