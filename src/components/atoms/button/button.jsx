import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = React.memo(function ({ className, children, onClick, type, disabled }) {

    return (

        <button
            type="button"
            className={`${className} button--${type} ${disabled ? 'button--disabled' : ''}`}
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
    type: PropTypes.oneOf(['ghost', 'filled', 'outlined']),
    disabled: PropTypes.bool
};

Button.defaultProps = {
    className: '',
    onClick: null,
    type: 'ghost',
    disabled: false
};

export { Button };
