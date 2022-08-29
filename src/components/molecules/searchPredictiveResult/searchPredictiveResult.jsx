import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LinkArrow } from 'components/molecules';
import { TextPrice } from 'components/atoms';
import './search-predictive-result.scss';

const SearchPredictiveResult = function ({ className, query, filteredProducts }) {

    return (

        <div className={`search-predictive-result ${className}`}>

            <span className="search-predictive-result-title">Products</span>

            <ul className="search-predictive-result__list">
                {
                    filteredProducts.map((item) => (

                        <li key={item.id} className="search-predictive-result__list-item">

                            <Link className="search-predictive-result__list-item-link" to={item.url}>

                                <img
                                    className="search-predictive-result__list-item-image"
                                    src={item.image}
                                    alt={item.title}
                                />

                                <span className="search-predictive-result__list-item-title">{item.title}</span>

                                <TextPrice className="search-predictive-result__list-item-price" price={item.price} discount={item.discount} />

                            </Link>

                        </li>

                    ))
                }
            </ul>

            <LinkArrow className="search-predictive-result-search-for-link" href={`/search/${query}`}>
                {`Search for "${query}"`}
            </LinkArrow>

        </div>

    );

};

SearchPredictiveResult.propTypes = {

    className: PropTypes.string,
    query: PropTypes.string.isRequired,
    filteredProducts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        discount: PropTypes.number,
        url: PropTypes.string
    })).isRequired

};

SearchPredictiveResult.defaultProps = {

    className: ''

};

export { SearchPredictiveResult };
