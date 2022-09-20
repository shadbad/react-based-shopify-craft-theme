import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { FilterGroup, Sorter, ButtonIconText, FilterChips, ButtonIcon, LinkProduct, Paginator } from 'components/molecules';
import { useOutsideClickDetector } from 'hooks';
import './list-product.scss';

const ListProduct = function ({ products }) {

    const [filteredCollection, setFilteredCollection] = useState(products);
    const [selectedFilters, setSelectedFilters] = useState(new Set());

    const [sortedCollection, setSortedCollection] = useState(products);
    const [selectedSortOption, setSelectedSortOption] = useState('sales');

    const [isFilterSortMenuExpanded, setIsFilterSortMenuExpanded] = useState(false);

    useOutsideClickDetector('.list-product__tools__fs-button, .list-product__tools__fs-wrapper', () => setIsFilterSortMenuExpanded(false));

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
                        count: products.filter((item) => item.stock > 0).length
                    },
                    {
                        key: 'outOfStock',
                        title: 'Out of stock',
                        filterFunction: (item) => item.stock === 0,
                        count: products.filter((item) => item.stock === 0).length
                    }
                ]
            },

            {
                key: 'product-type',
                title: 'Product Type',
                type: 'multi-select',
                items: [...new Set(products.map((product) => product.tags).flat())]
                    .sort()
                    .map((item) => ({
                        key: item.toLowerCase().replace(' ', '_'),
                        title: item,
                        filterFunction: (product) => product.tags.includes(item),
                        count: products.filter((product) => product.tags.includes(item)).length
                    }))
            }

        ],

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

    const handle = {
        filterButtonClick: useCallback(() => {

            setIsFilterSortMenuExpanded(() => !isFilterSortMenuExpanded);

        }),

        chipClick: useCallback((optionKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            if (clonedSelectedFilters.has(optionKey)) clonedSelectedFilters.delete(optionKey);

            setSelectedFilters(() => clonedSelectedFilters);

        }),

        chipClear: useCallback(() => setSelectedFilters(new Set()))
    };

    const helpers = {

        getFilterConfigs: useCallback(() => config
            .filters
            .map((filterGroup) => filterGroup.items)
            .flat()
            .filter((f) => selectedFilters.has(f.key)))

    };

    return (
        <>
            <div className={`list-product__tools ${isFilterSortMenuExpanded ? 'expand-fs' : ''}`}>

                <ButtonIconText
                    className="list-product__tools__fs-button"
                    leadingIconName="sliders"
                    label="Filter and sort"
                    variant="underlineOnHover"
                    onClick={handle.filterButtonClick}
                />

                <div className="list-product__tools__fs-wrapper">

                    <div className="list-product__tools__fs-header">
                        <hgroup>
                            <h3>Filters and sort</h3>
                            <h4>
                                {filteredCollection.length !== products.length && <span>{`${filteredCollection.length} of `}</span>}

                                <span>{`${products.length} products`}</span>
                            </h4>
                        </hgroup>

                        <ButtonIcon
                            className="list-product__tools__fs-close-button"
                            iconName="cross"
                            variant="expandOnHover"
                            onClick={handle.filterButtonClick}
                        />
                    </div>

                    <FilterGroup
                        className="list-product__tools__fs-wrapper__filters"
                        config={config.filters}
                        collection={products}
                        setFilteredCollection={setFilteredCollection}
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}
                    />

                    <Sorter
                        className="list-product__tools__fs-wrapper__sort"
                        config={config.sortOptions}
                        collection={filteredCollection}
                        setSortedCollection={setSortedCollection}
                        selectedSortOption={selectedSortOption}
                        setSelectedSortOption={setSelectedSortOption}
                    />

                </div>

                <span className="list-product__tools__count">

                    {filteredCollection.length !== products.length && <span>{`${filteredCollection.length} of `}</span>}

                    <span>{`${products.length} products`}</span>

                </span>

            </div>

            {selectedFilters.size > 0 && (
                <FilterChips
                    className="list-product__filter-chips"
                    selectedFilters={helpers.getFilterConfigs()}
                    onChipClick={handle.chipClick}
                    onClearAllClick={handle.chipClear}
                />
            )}

            <Paginator key={nanoid()} className={`list-product__products${sortedCollection.length > 3 ? '' : '--three-column'}`} size={12}>
                {
                    sortedCollection.map((product) => (

                        <LinkProduct
                            key={product.id}
                            className="list-product__products__item"
                            title={product.title}
                            price={product.price}
                            discount={product.discount}
                            stock={product.stock}
                            slug={product.slug}
                            images={product.images}
                        />

                    ))
                }
            </Paginator>
        </>
    );

};

ListProduct.propTypes = {

    products: PropTypes.arrayOf(

        PropTypes.shape({

            id: PropTypes.string,

            categoryId: PropTypes.string,

            caption: PropTypes.string,

            title: PropTypes.string,

            subtitle: PropTypes.string,

            tags: PropTypes.arrayOf(PropTypes.string),

            stock: PropTypes.number,

            sales: PropTypes.number,

            date: PropTypes.number,

            images: PropTypes.arrayOf(PropTypes.string),

            price: PropTypes.number,

            discount: PropTypes.number,

            slug: PropTypes.string,

            content: PropTypes.string,

            spec: PropTypes.arrayOf(PropTypes.shape({

                key: PropTypes.string,

                value: PropTypes.string

            }))

        })

    ).isRequired

};

export { ListProduct };
