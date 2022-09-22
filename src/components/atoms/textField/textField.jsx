import React, { useCallback, useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import './text-field.scss';

const TextField = function ({ className, value, type, label, focus, required, error, onChange, onEnterPress }) {

    const id = label.replace(' ', '_');

    const [hasValue, setHasValue] = useState(value !== '');

    const [isFocused, setIsFocused] = useState(focus);

    const containerRef = useRef();

    useLayoutEffect(() => {

        if (focus) containerRef.current.querySelector('.text-field__input').focus();
        else containerRef.current.querySelector('.text-field__input').blur();

    }, [focus]);

    const handle = {

        click: useCallback(() => {

            containerRef.current.querySelector('.text-field__input').focus();

        }),

        keyUp: useCallback((event) => {

            const { target } = event;

            if (target.value.trim() === '') setHasValue(() => false);
            else setHasValue(() => true);

            target.setCustomValidity(error);
            target.checkValidity();
            target.reportValidity();

        }),

        keyDown: useCallback((event) => {

            if (event.key === 'Enter') {

                event.preventDefault();
                onEnterPress(event);

            }

        }),

        focus: useCallback(() => setIsFocused(() => true)),

        blur: useCallback(() => setIsFocused(() => false))

    };

    return (

        <div
            className={`text-field ${hasValue ? 'with-value' : ''} ${isFocused ? 'focused' : ''} ${className}`}
            onClick={handle.click}
            onKeyDown={handle.click}
            role="textbox"
            tabIndex={-1}
            ref={containerRef}
        >

            <input
                className="text-field__input"
                id={id}
                type={type}
                value={value}
                required={required}
                onChange={onChange}
                onKeyUp={handle.keyUp}
                onKeyDown={handle.keyDown}
                onFocus={handle.focus}
                onBlur={handle.blur}
            />

            <label className="text-field__label" htmlFor={id}>{label}</label>

            {error !== '' && <span className="text-field__error">{error}</span>}

        </div>

    );

};

TextField.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.oneOf(['text', 'search', 'password', 'email']).isRequired,
    required: PropTypes.bool,
    focus: PropTypes.bool,
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func,
    onEnterPress: PropTypes.func
};

TextField.defaultProps = {
    className: '',
    value: '',
    required: false,
    focus: false,
    error: '',
    onChange: null,
    onEnterPress: null
};

export { TextField };
