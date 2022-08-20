import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = React.memo(function ({ className, children, onClick, variant, disabled }) {

    return (

        <button
            type="button"
            className={`${className} button--${variant} ${disabled ? 'button--disabled' : ''}`}
            onClick={onClick}
        >

            {children}

        </button>

    );

});

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['ghost', 'filled', 'outlined']),
    disabled: PropTypes.bool
};

Button.defaultProps = {
    className: '',
    onClick: null,
    variant: 'ghost',
    disabled: false
};

export { Button };
