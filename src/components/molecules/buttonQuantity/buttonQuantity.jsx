import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/molecules';
import './button-quantity.scss';

const ButtonQuantity = React.memo(function ({ className, quantity, setQuantity, min, max, disabled }) {

    const handle = {
        plusClick: () => {

            if (quantity < max) setQuantity(() => quantity + 1);

        },

        minusClick: () => {

            if (quantity > min) setQuantity(() => quantity - 1);

        }
    };

    return (
        <div className={`button-quantity ${disabled ? 'disable' : ''} ${className}`}>

            <ButtonIcon
                className="button-quantity__minus"
                variant="expandOnHover"
                iconName="minus"
                onClick={handle.minusClick}
                disabled={disabled || quantity === min}
            />

            <span className="button-quantity__quantity">{quantity}</span>

            <ButtonIcon
                className="button-quantity__plus"
                variant="expandOnHover"
                iconName="plus"
                onClick={handle.plusClick}
                disabled={disabled || quantity === max}
            />

        </div>
    );

});

ButtonQuantity.propTypes = {
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    disabled: PropTypes.bool,
    quantity: PropTypes.number.isRequired,
    setQuantity: PropTypes.func.isRequired
};

ButtonQuantity.defaultProps = {
    className: '',
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    disabled: false
};

export { ButtonQuantity };
