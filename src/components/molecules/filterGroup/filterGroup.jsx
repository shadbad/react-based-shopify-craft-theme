/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectBoxMulti, SelectOption } from 'components/molecules';
import './filter-group.scss';

const FilterGroup = React.memo(function ({ className, collection, config, setFilteredCollection, selectedFilters, setSelectedFilters }) {

    const handle = {

        filterOptionClick: useCallback((optionKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            if (clonedSelectedFilters.has(optionKey)) clonedSelectedFilters.delete(optionKey);
            else clonedSelectedFilters.add(optionKey);

            setSelectedFilters(() => clonedSelectedFilters);

        }),

        filterResetClick: useCallback((filterKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            config
                .find((filter) => filter.key === filterKey)
                .items
                .forEach((item) => clonedSelectedFilters.delete(item.key));

            setSelectedFilters(() => clonedSelectedFilters);

        })
    };

    const helpers = {

        applyFilters: useCallback(() => {

            const filters = config
                .map((filterGroup) => filterGroup.items)
                .flat()
                .filter((f) => selectedFilters.has(f.key));

            if (filters.length === 0) return collection;

            let filteredProducts = new Set();

            filters.forEach((filterObject) => {

                filteredProducts = new Set([...filteredProducts, ...collection.filter(filterObject.filterFunction)]);

            });

            return Array.from(filteredProducts);

        })
    };

    useEffect(() => {

        setFilteredCollection(() => [...helpers.applyFilters()]);

    }, [selectedFilters]);

    return (
        <div className={`filter-group ${className}`}>

            <div className="filter-group__filters">

                <span className="filter-group__filters-title">Filter:</span>

                {
                    config.map((filter) => (

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

        </div>
    );

});

FilterGroup.propTypes = {
    className: PropTypes.string,
    collection: PropTypes.array.isRequired,
    setFilteredCollection: PropTypes.func.isRequired,
    selectedFilters: PropTypes.instanceOf(Set).isRequired,
    setSelectedFilters: PropTypes.func.isRequired,
    config: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.shape({
            key: PropTypes.string,
            title: PropTypes.string,
            filterFunction: PropTypes.func,
            count: PropTypes.number
        }))
    })).isRequired
};

FilterGroup.defaultProps = {
    className: ''
};

export { FilterGroup };
