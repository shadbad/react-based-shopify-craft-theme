import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'components/atoms';
import './chip.scss';

const Chip = React.memo(function ({ className, label, onClick }) {

    return (
        <button type="button" className={`chip ${className}`} onClick={onClick}>

            <span className="chip__label">{label}</span>

            <Icon className="chip__icon" name="cross" />

        </button>
    );

});

Chip.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

Chip.defaultProps = {
    className: '',
    onClick: null
};

export { Chip };
