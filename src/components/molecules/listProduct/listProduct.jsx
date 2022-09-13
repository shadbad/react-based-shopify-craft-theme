import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { LinkProduct, FilterGroup, Sorter, ButtonIconText } from 'components/molecules';
import './list-product.scss';

const ListProduct = function ({ products }) {

    const [filteredCollection, setFilteredCollection] = useState(products);
    const [selectedFilters, setSelectedFilters] = useState(new Set());

    const [sortedCollection, setSortedCollection] = useState(products);
    const [selectedSortOption, setSelectedSortOption] = useState('sales');

    const handle = {
        filterButtonClick: useCallback(() => { })
    };

    return (

        <div className="list-product">

            <div className="list-product__toolbox">

                <ButtonIconText
                    className="list-product__filter-sort-button"
                    leadingIconName="sliders"
                    label="Filter and sort"
                    variant="underlineOnHover"
                    onClick={handle.filterButtonClick}
                />

                <FilterGroup
                    className="list-product__filters"
                    collection={products}
                    setFilteredCollection={setFilteredCollection}
                    selectedFilters={selectedFilters}
                    setSelectedFilters={setSelectedFilters}
                />

                <Sorter
                    className="list-product__sort"
                    collection={filteredCollection}
                    setSortedCollection={setSortedCollection}
                    selectedSortOption={selectedSortOption}
                    setSelectedSortOption={setSelectedSortOption}
                />

                <span className="list-product__count">

                    {filteredCollection.length !== products.length && <span>{`${filteredCollection.length} of `}</span>}

                    <span>{`${products.length} products`}</span>

                </span>

            </div>

            <ul className="list-product__list">
                {
                    sortedCollection.map((product) => (

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
