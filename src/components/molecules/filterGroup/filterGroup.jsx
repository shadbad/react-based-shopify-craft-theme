/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms';
import { SelectBoxMulti, SelectOption, Chip } from 'components/molecules';
import './filter-group.scss';

const FilterGroup = React.memo(function ({ className, collection, setFilteredCollection, selectedFilters, setSelectedFilters }) {

    const config = {

        filters: [
            {
                key: 'availability',
                title: 'Availability',
                type: 'multi-select',
                items: [
                    {
                        key: 'inStock',
                        title: 'In stock',
                        filterFunction: (item) => item.stock > 0,
                        count: collection.filter((item) => item.stock > 0).length
                    },
                    {
                        key: 'outOfStock',
                        title: 'Out of stock',
                        filterFunction: (item) => item.stock === 0,
                        count: collection.filter((item) => item.stock === 0).length
                    }
                ]
            },

            {
                key: 'product-type',
                title: 'Product Type',
                type: 'multi-select',
                items: [...new Set(collection.map((product) => product.tags).flat())]
                    .sort()
                    .map((item) => ({
                        key: item.toLowerCase().replace(' ', '_'),
                        title: item,
                        filterFunction: (product) => product.tags.includes(item),
                        count: collection.filter((product) => product.tags.includes(item)).length
                    }))
            }

        ]
    };

    const handle = {

        filterOptionClick: useCallback((optionKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            if (clonedSelectedFilters.has(optionKey)) clonedSelectedFilters.delete(optionKey);
            else clonedSelectedFilters.add(optionKey);

            setSelectedFilters(() => clonedSelectedFilters);

        }),

        filterResetClick: useCallback((filterKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            config.filters
                .find((filter) => filter.key === filterKey)
                .items
                .forEach((item) => clonedSelectedFilters.delete(item.key));

            setSelectedFilters(() => clonedSelectedFilters);

        }),

        chipClick: useCallback((optionKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            if (clonedSelectedFilters.has(optionKey)) clonedSelectedFilters.delete(optionKey);

            setSelectedFilters(() => clonedSelectedFilters);

        }),

        chipClear: useCallback(() => setSelectedFilters(new Set()))
    };

    const helpers = {

        applyFilters: useCallback(() => {

            const filters = config.filters
                .map((filterGroup) => filterGroup.items)
                .flat()
                .filter((f) => selectedFilters.has(f.key));

            if (filters.length === 0) return collection;

            let filteredProducts = new Set();

            filters.forEach((filterObject) => {

                filteredProducts = new Set([...filteredProducts, ...collection.filter(filterObject.filterFunction)]);

            });

            return Array.from(filteredProducts);

        }),

        getFilterConfigs: useCallback(() => config
            .filters
            .map((filterGroup) => filterGroup.items)
            .flat()
            .filter((f) => selectedFilters.has(f.key)))
    };

    useEffect(() => {

        setFilteredCollection(() => [...helpers.applyFilters()]);

    }, [selectedFilters]);

    return (
        <div className={`filter-group ${className}`}>

            <div className="filter-group__filters">

                <span className="filter-group__filters-title">Filter:</span>

                {
                    config.filters.map((filter) => (

                        <SelectBoxMulti
                            key={filter.title}
                            className="filter-group__filters-item"
                            title={filter.title}
                            options={filter.items.map((f) => ({ title: `${f.title} (${f.count})`, key: f.key }))}
                            onResetClick={() => handle.filterResetClick(filter.key)}
                        >
                            {
                                filter.items.map((f) => (
                                    <SelectOption
                                        variant="multi"
                                        key={f.key}
                                        keyValue={f.key}
                                        label={`${f.title} (${f.count})`}
                                        selected={selectedFilters.has(f.key)}
                                        onClick={handle.filterOptionClick}
                                    />
                                ))
                            }

                        </SelectBoxMulti>

                    ))
                }

            </div>

            {
                selectedFilters.size > 0 && (

                    <div className="filter-group__chips">
                        {
                            helpers.getFilterConfigs().map((item) => (

                                <Chip
                                    key={item.key}
                                    className="filter-group__chips-item"
                                    label={item.title}
                                    onClick={() => handle.chipClick(item.key)}
                                />

                            ))
                        }

                        <Button className="filter-group__chips-clear-button" variant="link" onClick={handle.chipClear}>
                            Clear all
                        </Button>
                    </div>
                )
            }
        </div>
    );

});

FilterGroup.propTypes = {
    className: PropTypes.string,
    collection: PropTypes.array.isRequired,
    setFilteredCollection: PropTypes.func.isRequired,
    selectedFilters: PropTypes.instanceOf(Set).isRequired,
    setSelectedFilters: PropTypes.func.isRequired
};

FilterGroup.defaultProps = {
    className: ''
};

export { FilterGroup };
