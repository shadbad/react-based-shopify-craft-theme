/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectBox, SelectOption } from 'components/molecules';
import './sorter.scss';

const Sorter = React.memo(function ({ className, collection, setSortedCollection, selectedSortOption, setSelectedSortOption }) {

    const config = {
        sortOptions: [
            {
                key: 'sales',
                title: 'Best selling',
                compare: (a, b) => {

                    if (a.sales < b.sales) return 1;
                    if (a.sales === b.sales) return 0;
                    return -1;

                }
            },
            {
                key: 'title',
                title: 'Alphabetically, A-Z',
                compare: (a, b) => {

                    if (a.title < b.title) return -1;
                    if (a.title === b.title) return 0;
                    return 1;

                }
            },
            {
                key: 'titleDesc',
                title: 'Alphabetically, Z-A',
                compare: (a, b) => {

                    if (a.title < b.title) return 1;
                    if (a.title === b.title) return 0;
                    return -1;

                }
            },
            {
                key: 'price',
                title: 'Price, low to high',
                compare: (a, b) => {

                    if (a.price > b.price) return 1;
                    if (a.price === b.price) return 0;
                    return -1;

                }
            },
            {
                key: 'priceDesc',
                title: 'Price, high to low',
                compare: (a, b) => {

                    if (a.price < b.price) return 1;
                    if (a.price === b.price) return 0;
                    return -1;

                }
            },
            {
                key: 'date',
                title: 'Date, old to new',
                compare: (a, b) => {

                    if (a.date > b.date) return 1;
                    if (a.date === b.date) return 0;
                    return -1;

                }
            },
            {
                key: 'dateDesc',
                title: 'Date, new to old',
                compare: (a, b) => {

                    if (a.date < b.date) return 1;
                    if (a.date === b.date) return 0;
                    return -1;

                }
            }
        ]
    };

    const apply = {

        sorter: useCallback(() => {

            const sortConfig = config.sortOptions.find((item) => item.key === selectedSortOption);

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
                title={config.sortOptions.find((item) => item.key === selectedSortOption).title}
                className="list-product__sort-options"
            >

                {
                    config.sortOptions.map((item) => (

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
    setSortedCollection: PropTypes.func.isRequired,
    selectedSortOption: PropTypes.string.isRequired,
    setSelectedSortOption: PropTypes.func.isRequired
};

Sorter.defaultProps = {
    className: ''
};

export { Sorter };
