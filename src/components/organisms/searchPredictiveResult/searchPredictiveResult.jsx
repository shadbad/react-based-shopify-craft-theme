import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './search-predictive-result.scss';

const SearchPredictiveResult = function ({ className }) {

    const priceFormatter = useCallback((p) => `${new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(p)} GBP`);

    const query = useSelector((state) => state.ui.search.query);

    const keywords = query.toLowerCase().split(' ').filter((item) => item !== '');

    const products = useSelector((state) => state.product.list);

    const filteredProducts = products.filter((item) => keywords.some((keyword) => item.title.toLowerCase().includes(keyword))).slice(0, 3);

    return (

        <div className={`search-predictive-result ${className}`}>

            <ul className="search-predictive-result__list">
                {
                    filteredProducts.map((item) => (

                        <li key={item.id} className="search-predictive-result__list-item">

                            <img
                                className="search-predictive-result__list-item-image"
                                src={item.image}
                                alt={item.title}
                            />

                            <Link
                                className="search-predictive-result__list-item-link"
                                to={item.url}
                            >

                                {item.title}

                            </Link>

                            <span className="search-predictive-result__list-item-price">

                                {
                                    item.discount !== 0 && <s>{priceFormatter(item.price)}</s>
                                }

                                <span>{priceFormatter(item.price)}</span>

                            </span>

                        </li>

                    ))
                }
            </ul>

        </div>

    );

};

SearchPredictiveResult.propTypes = {

    className: PropTypes.string

};

SearchPredictiveResult.defaultProps = {

    className: ''

};

export { SearchPredictiveResult };
