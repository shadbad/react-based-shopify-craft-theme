import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from 'components/molecules';
import './button-quantity.scss';

const ButtonQuantity = React.memo(function ({ className, value, handleAddition, handleSubtraction, min, max, disabled }) {

    return (
        <div className={`button-quantity ${disabled ? 'disable' : ''} ${className}`}>

            <ButtonIcon
                className="button-quantity__minus"
                variant="expandOnHover"
                iconName="minus"
                onClick={handleSubtraction}
                disabled={disabled || value === min}
            />

            <span className="button-quantity__quantity">{value}</span>

            <ButtonIcon
                className="button-quantity__plus"
                variant="expandOnHover"
                iconName="plus"
                onClick={handleAddition}
                disabled={disabled || value === max}
            />

        </div>
    );

});

ButtonQuantity.propTypes = {
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    disabled: PropTypes.bool,
    value: PropTypes.number.isRequired,
    handleAddition: PropTypes.func,
    handleSubtraction: PropTypes.func
};

ButtonQuantity.defaultProps = {
    className: '',
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    disabled: false,
    handleAddition: null,
    handleSubtraction: null
};

export { ButtonQuantity };
