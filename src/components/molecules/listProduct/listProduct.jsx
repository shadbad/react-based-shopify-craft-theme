import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SelectBoxMulti, SelectBox, SelectOption, LinkProduct } from 'components/molecules';
import './list-product.scss';

const ListProduct = function ({ products }) {

    const [items, setItems] = useState(products);

    const [selectedFilters, setSelectedFilters] = useState(new Set());

    const [selectedSortOption, setSelectedSortOption] = useState('sales');

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
        ],

        filters: [
            {
                key: 'availability',
                title: 'Availability',
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
                items: [...new Set(products.map((product) => product.tags).flat())]
                    .sort()
                    .map((item) => ({
                        key: item.toLowerCase().replace(' ', '_'),
                        title: item,
                        filterFunction: (product) => product.tags.includes(item),
                        count: products.filter((product) => product.tags.includes(item)).length
                    }))
            }

        ]
    };

    const apply = {
        filters: useCallback((filterKeys) => {

            const filters = config.filters.map((filterGroup) => filterGroup.items).flat().filter((f) => filterKeys.has(f.key));

            if (filters.length === 0) return products;

            let filteredProducts = new Set();

            filters.forEach((filterObject) => {

                filteredProducts = new Set([...filteredProducts, ...products.filter(filterObject.filterFunction)]);

            });

            return Array.from(filteredProducts);

        }),

        sorter: useCallback((sortKey, list) => {

            const sortConfig = config.sortOptions.find((item) => item.key === sortKey);

            return list.sort(sortConfig.compare);

        })
    };

    const handle = {
        filterOptionClick: (optionKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            if (clonedSelectedFilters.has(optionKey)) clonedSelectedFilters.delete(optionKey);
            else clonedSelectedFilters.add(optionKey);

            setSelectedFilters(() => clonedSelectedFilters);

        },

        filterResetClick: (filterKey) => {

            const clonedSelectedFilters = new Set(selectedFilters);

            config.filters
                .find((filter) => filter.key === filterKey)
                .items
                .forEach((item) => clonedSelectedFilters.delete(item.key));

            setSelectedFilters(() => clonedSelectedFilters);

        },

        sortOptionClick: (optionKey) => setSelectedSortOption(() => optionKey)

    };

    const helper = {

        getFilterCount: (filterKey) => {

            const filter = config.filters.map((filterGroup) => filterGroup.items).flat().find((f) => f.key === filterKey);
            return products.filter(filter.filterFunction).length;

        }

    };

    useEffect(() => {

        setItems(() => [...apply.sorter(selectedSortOption, apply.filters(selectedFilters))]);

    }, [selectedFilters, selectedSortOption]);

    return (

        <div className="list-product">

            <div className="list-product__toolbox">

                <div className="list-product__filters">

                    <span className="list-product__filters-title">Filter:</span>

                    {
                        config.filters.map((filter) => (

                            <SelectBoxMulti
                                key={filter.title}
                                className="list-product__filters-item"
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
                                            label={`${f.title} (${helper.getFilterCount(f.key)})`}
                                            selected={selectedFilters.has(f.key)}
                                            onClick={handle.filterOptionClick}
                                        />
                                    ))
                                }

                            </SelectBoxMulti>

                        ))
                    }

                </div>

                <div className="list-product__sort">

                    <span className="list-product__sort-title">Sort by:</span>

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

                <span className="list-product__count">1 of 3 products</span>

            </div>

            <ul className="list-product__list">
                {
                    items.map((product) => (

                        <li className="list-product__list-item-wrapper" key={product.id}>

                            <LinkProduct
                                className="list-product__list-item"
                                title={product.title}
                                price={product.price}
                                discount={product.discount}
                                slug={product.slug}
                                images={product.images}
                            />

                        </li>

                    ))
                }
            </ul>
        </div>

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
