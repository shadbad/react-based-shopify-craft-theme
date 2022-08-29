import React from 'react';
import PropTypes from 'prop-types';
import './text-price.scss';

const TextPrice = React.memo(function ({ className, price, discount, local, currency }) {

    const priceFormatter = (amount) => `${new Intl.NumberFormat(local, { style: 'currency', currency }).format(amount)} ${currency}`;

    return (
        <span className={`text-price ${className}`}>
            {
                discount !== 0 && <s>{priceFormatter(price)}</s>
            }

            <span>{priceFormatter(price - (price * discount))}</span>
        </span>
    );

});

TextPrice.propTypes = {
    className: PropTypes.string,
    price: PropTypes.number.isRequired,
    discount: PropTypes.number,
    currency: PropTypes.string,
    local: PropTypes.string
};

TextPrice.defaultProps = {
    className: '',
    discount: 0,
    currency: 'GBP',
    local: 'en-UK'
};

export { TextPrice };
