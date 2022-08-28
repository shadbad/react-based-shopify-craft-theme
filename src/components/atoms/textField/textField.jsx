import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './text-field.scss';

const TextField = function ({ className, type, label, error, onChange, onEnterPress }) {

    const id = label.replace(' ', '_');

    const [hasValue, setHasValue] = useState(false);

    const handleClick = useCallback(({ target }) => {

        const container = target.closest('.text-field');
        container.querySelector('.text-field__input').focus();

    });

    const handleKeyDown = useCallback((event) => {

        const { target, key } = event;

        if (target.value === '') setHasValue(() => false);
        else setHasValue(() => true);

        if (key === 'Enter') onEnterPress();

    });

    return (

        <div
            className={`text-field ${hasValue ? 'with-value' : ''} ${className}`}
            onClick={handleClick}
            onKeyDown={handleClick}
            role="textbox"
            tabIndex={-1}
        >

            <input className="text-field__input" id={id} type={type} onChange={onChange} onKeyDown={handleKeyDown} />

            <label className="text-field__label" htmlFor={id}>{label}</label>

            {error !== '' && <span className="text-field__error">{error}</span>}

        </div>

    );

};

TextField.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number']).isRequired,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onEnterPress: PropTypes.func
};

TextField.defaultProps = {
    className: '',
    error: '',
    onChange: null,
    onEnterPress: null
};

export { TextField };
